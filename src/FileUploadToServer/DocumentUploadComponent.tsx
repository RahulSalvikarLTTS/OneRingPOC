import React, { useState, useCallback, useContext } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, Image } from "react-native";

import DocumentPicker from "react-native-document-picker";

import NativeUploady, {
  UploadyContext,
  useItemFinishListener,
  useItemStartListener,
  useItemErrorListener,
} from "@rpldy/native-uploady";

const App = () => {
  return (
    <>
      <NativeUploady        
        destination={{ url: "https://my-server.test.com/upload" }}>
       
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">

            <ImageBackground
              accessibilityRole={"image"}
              source={require("./logo.png")}
              style={styles.headerBackground}
              imageStyle={styles.headerLogo}
            >
              <Text style={styles.headerText}>Welcome to OneRing-Upload File</Text>
            </ImageBackground>

            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Upload File</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>

        <Upload/>
      </NativeUploady>
    </>
  );
};

const Upload = () => {
    const [uploadUrl, setUploadUrl] = useState(false);
    const uploadyContext = useContext(UploadyContext);
  
    useItemFinishListener((item) => {
      const response = JSON.parse(item.uploadResponse.data);
      console.log(`item ${item.id} finished uploading, response was: `, response);
      setUploadUrl(response.url);
    });
  
    useItemErrorListener((item) => {
      console.log(`item ${item.id} upload error !!!! `, item);
    });
  
    useItemStartListener((item) => {
      console.log(`item ${item.id} starting to upload,name = ${item.file.name}`);
    });
  
    const pickFile = useCallback(async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
  
        uploadyContext.upload(res);
        
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log("User cancelled the picker, exit any dialogs or menus and move on");
        } else {
          throw err;
        }
      }
    }, [uploadyContext]);
  
    return (
      <View>
        <Button title="Choose File" onPress={pickFile} />
        {uploadUrl && <Image source={{ uri: uploadUrl }} style={styles.uploadedImage} />}
      </View>
    );
  };

  const styles = StyleSheet.create({
    uploadedImage: {
      width: 400,
      height: 400,
      resizeMode: 'cover',
    },
    body: {
      backgroundColor: "#ffffff",
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      marginBottom: 12,
      fontWeight: '600',
      color: "#000",
    },
    headerBackground: {
      paddingBottom: 40,
      paddingTop: 96,
      paddingHorizontal: 32,
      backgroundColor: "#F3F3F3",
    },
    headerLogo: {
      opacity: 0.2,
      overflow: 'visible',
      resizeMode: 'cover',
      marginLeft: -128,
      marginBottom: -192,
    },
    headerText: {
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      color: "#000",
    },
  });

  export default App;