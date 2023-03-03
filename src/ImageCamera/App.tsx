import * as React from 'react';
import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, Image, ScrollView, Text, Button } from 'react-native';
import { DemoTitle, DemoButton, DemoResponse } from './components';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'react-native-image-picker';

import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
import axios from 'axios';
/* toggle includeExtra */
const includeExtra = true;

export default function App() {
  const [response, setResponse] = useState<any>(null);
  //------ File Upload
  const [result, setResult] = useState<Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null>()

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2))
  }, [result, response])

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }
  //------


  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      cameraAction(options);
      //ImagePicker.launchCamera(options, setResponse);
    } else if (type === 'library') {
      galleryAction(options);
      //ImagePicker.launchImageLibrary(options, setResponse);
    } else if (type === 'FileManager') {
      try {
        const pickerResult = DocumentPicker.pickSingle({
          presentationStyle: 'fullScreen',
          copyTo: 'cachesDirectory',
        })
        setResult([pickerResult])
      } catch (e) {
        handleError(e)
      }
    } else {
      uploadAction()
    }
  }, []);

  const galleryAction = async (options: any) => {
    try {
      const result = await ImagePicker.launchImageLibrary(options);
      await AsyncStorage.setItem('fileUri', String(result?.assets[0].uri));
      setResponse(result);
    } catch (e) {
      handleError(e)
    }
  }


  const cameraAction = async (options: any) => {
    try {
      const result = await ImagePicker.launchCamera(options);
      await AsyncStorage.setItem('fileUri', String(result?.assets[0].uri));
      setResponse(result);
    } catch (e) {
      handleError(e)
    }
  }

  const uploadAction = () => {
    try {
      let fileUrl = ''
      AsyncStorage.getItem('fileUri')
        .then(value => {
          if (value != null) {
            fileUrl = value
            console.log("value", value)
            imageUpload(value)
          }
        })

    } catch (error) {
      console.log("Get Data error ->", error);
    }
  }
  const imageUpload = (fileUri: String) => {
    console.log("fileUri ", fileUri);
    AsyncStorage.removeItem('fileUri')

    const imageData = new FormData()
    imageData.append("file", {
      uri: fileUri,
      name: 'Img1.png',
      fileName: 'image',
      type: 'image/png'
    })
    console.log('form data', imageData)
    // axios({
    //   method: 'post',
    //   uri: '',
    //   data: imageData
    // }).then(function (response){
    //   console.log("image upload success", response.data)
    // }).then((error) {
    //   console.log(error)
    // })
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <DemoTitle>Honeywell</DemoTitle>
      {/* <DemoResponse>{response}</DemoResponse> */}

      <ScrollView>
        {response?.assets &&
          response?.assets.map(({ uri }: { uri: string }) => (
            <View key={uri} style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{ uri: uri }}
              />

              <Text style={styles.text}>File Url: {uri}</Text>

            </View>
          ))}

        <View style={styles.buttonContainer}>
          {actions.map(({ title, type, options }) => {
            return (
              <DemoButton
                key={title}
                onPress={() => onButtonPress(type, options)}>
                {title}
              </DemoButton>
            );
          })}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  buttonContainer: {
    flexDirection: 'column',
    //flexWrap: 'wrap',
    marginVertical: 8,
    alignItems: 'center'
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    alignItems: 'center',
    padding: 20,
  },
});

interface Action {
  title: string;
  type: 'capture' | 'library' | 'FileManager' | 'Upload';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Camera',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Gallery',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'File Manager',
    type: 'FileManager',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Upload',
    type: 'Upload',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];
