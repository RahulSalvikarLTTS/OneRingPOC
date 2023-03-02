import * as React from 'react';
import { useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Image, ScrollView, Text, Button } from 'react-native';
import { DemoTitle, DemoButton, DemoResponse } from './components';

import * as ImagePicker from 'react-native-image-picker';

import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
/* toggle includeExtra */
const includeExtra = true;

export default function App() {
  //------ File Upload
  const [result, setResult] = React.useState< Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null>()

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2))
  }, [result])

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

  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else if (type === 'library') {
      ImagePicker.launchImageLibrary(options, setResponse);
    } else {
      try {
        const pickerResult = DocumentPicker.pickSingle({
          presentationStyle: 'fullScreen',
          copyTo: 'cachesDirectory',
        })
        setResult([pickerResult])
      } catch (e) {
        handleError(e)
      }
  }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <DemoTitle>File and Image Picker</DemoTitle>
      {/* <DemoResponse>{response}</DemoResponse> */}

      <ScrollView>
      {response?.assets &&
          response?.assets.map(({ uri }: { uri: string }) => (
            <View key={uri} style={styles.imageContainer}>
              <Text>{uri}</Text>

              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{ uri: uri }}
              />
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

          {/* <Button
            title="open picker for single file selection"
            onPress={async () => {
              try {
                const pickerResult = await DocumentPicker.pickSingle({
                  presentationStyle: 'fullScreen',
                  copyTo: 'cachesDirectory',
                })
                setResult([pickerResult])
              } catch (e) {
                handleError(e)
              }
            }}
          /> */}

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
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

interface Action {
  title: string;
  type: 'capture' | 'library' | 'FileManager' | 'Upload';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions ;
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
  /*
  {
    title: 'Take Video',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'video',
      includeExtra,
    },
  },
  {
    title: 'Select Video',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'video',
      includeExtra,
    },
  },
  {
    title: 'Select Image or Video\n(mixed)',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'mixed',
      includeExtra,
    },
  },*/
];
