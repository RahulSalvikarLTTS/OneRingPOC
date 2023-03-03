import * as React from 'react';
import { Fragment, useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, Image, ScrollView, Text, Alert } from 'react-native';
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
  const [isHideDummyImage, setDummyImageStatus] = useState(false)
  const [FileManagerPath, setFileManagerPath] = useState('')
  const [response, setResponse] = useState<any>(null);
  const [result, setResult] = useState<Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null>()

  //------ File Upload

  useEffect(() => {
    //console.log("file manager response -> ",JSON.stringify(result, null, 2));
    //console.log("Image response -> ",JSON.stringify(response, null, 2));
    let data = JSON.stringify(result, null, 2);
    // if ( != undefined) {
    // setFileManagerPath(result[0].fileCopyUri)
    // }
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
  const setDefult = () => {
    setDummyImageStatus(false)
    setResponse(null)
    setResult(null)
    setFileManagerPath('')
  }

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      setDefult()
      cameraAction(options);
      //ImagePicker.launchCamera(options, setResponse);
    } else if (type === 'library') {
      setDefult()
      galleryAction(options);
      //ImagePicker.launchImageLibrary(options, setResponse);
    } else if (type === 'FileManager') {
      setDefult()
      fileManagerAction(options)
    } else {
      uploadAction()
    }
  }, []);


  const fileManagerAction = async (options: any) => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      })
      //console.log("pickerResult ->" ,pickerResult.fileCopyUri);
      await AsyncStorage.setItem('fileUri', String(pickerResult.fileCopyUri));
      setFileManagerPath(String(pickerResult.fileCopyUri))
      setResult([pickerResult]);
    } catch (e) {
      handleError(e)
    }

  }

  const galleryAction = async (options: any) => {
    try {
      const result = await ImagePicker.launchImageLibrary(options);
      await AsyncStorage.setItem('fileUri', String(result?.assets[0].uri));
      setResponse(result);
      setDummyImageStatus(true)
    } catch (e) {
      handleError(e)
    }
  }


  const cameraAction = async (options: any) => {
    try {
      const result = await ImagePicker.launchCamera(options);
      await AsyncStorage.setItem('fileUri', String(result?.assets[0].uri));
      setResponse(result);
      setDummyImageStatus(true)
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
  /*
  const imageUpload = (fileUri: String) => {
    console.log("fileUri ", fileUri);
    handleSubmit(fileUri);
    //AsyncStorage.removeItem('fileUri')

    // const imageData = new FormData()
    // imageData.append("file", {
    //   uri: fileUri,
    //   name: 'Img1.png',
    //   fileName: 'image',
    //   type: 'image/png'
    // })
    // console.log('form data', imageData)
    // axios({
    //   method: 'post',
    //   uri: '',
    //   data: imageData
    // }).then(function (response){
    //   console.log("image upload success", response.data)
    // }).then((error) {
    //   console.log(error)
    // })
  }*/

  const imageUpload = async(fileUri: String) => {
    const formData = new FormData();
    var filename = fileUri.substring(fileUri.lastIndexOf('/')+1);
    
    formData.append("file", {
      uri: fileUri,
      name: filename,
      fileName: filename,
      type: 'image/png'
    })
    formData.append("file", fileUri);
    try {
      const response = await axios({
        method: "post",
        url: "https://api.upload.io/v2/accounts/kW15b68/uploads/form_data",
        data: formData,
        headers: { "Authorization": "Bearer public_kW15b682j4mHVWyJR9tLvL34kwQh"},
      }).then(function(response){
        console.log("image upload success", response.data)
        Alert.alert('Success', 'File Uploaded Successfully');
      }).then((error) => {
        console.log(error)
        Alert.alert('Failed', 'File Failed to Uploaded');
      })
    } catch(error) {
      console.log(error)
      Alert.alert('Alert', 'No Internet Connection');
    } 
  }

  const renderFileUri = () => {
    if (isHideDummyImage == false) {
      return <View style={styles.imageContainer}>
        <Image
          source={require('./assets/dummy.png')}
          style={styles.image}
        />
        <Text style={styles.text}>File path: {FileManagerPath}</Text>

      </View>

    }
  }


  return (
    <Fragment>
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

                <Text style={styles.text}>File path: {uri}</Text>

              </View>
            ))}

          {renderFileUri()}

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
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'alicered',
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
    alignItems: 'center',
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
