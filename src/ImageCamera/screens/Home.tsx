import { View, Text, Image, Button } from 'react-native'
import React, { Children, Fragment, useEffect, useState } from 'react'
import Styles from './Styles'
import DummyImageView from './atom/DummyImageView'
import FileNameText from './atom/FileNameText'
import { DemoButton } from '../components'
import * as ImagePicker from 'react-native-image-picker';
import { useSelector, useDispatch } from "react-redux";
import { gallery, camera, fileManager } from "../redux/action";
import * as DocumentPicker from 'react-native-document-picker'
/* toggle includeExtra */
const includeExtra = true;

export default function Home() {
    const filePath = useSelector((state: any) => state.filePath)
    const dispatch = useDispatch();
    const onButtonPress = React.useCallback((type: any, options: any) => {
        if (type === 'capture') {
            cameraAction(options);
        } else if (type === 'library') {
            galleryAction(options);
        } else if (type === 'FileManager') {
            fileManagerAction(options)
        } else {
            console.log('newPath ->', filePath)
        }
    }, [filePath]);

    const cameraAction = async (options: any) => {
        try {
            const result = await ImagePicker.launchCamera(options);
            dispatch(camera(result))
        } catch (error) {
            console.log(error)
        }
    }

    const galleryAction = async (options: any) => {
        try {
            const result = await ImagePicker.launchImageLibrary(options);
            dispatch(gallery(result))
        } catch (error) {
            console.log(error)
        }
    }

    const fileManagerAction = async (options: any) => {
        try {
            const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
            })
            dispatch(fileManager(pickerResult))
        } catch (error) {
            console.log(error)
        }

    }

    const renderFileUri = () => {
          return <View style={Styles.imageContainer}>
            <Image
            source={filePath == '' ? require('../assets/dummy.png') : { uri: filePath }}
            style={Styles.image}
          />
          </View>
    
      }
    
    return (
        <View style={Styles.container}>
            <View style={Styles.imageTextContainer}>
            {/* {renderFileUri()} */}
                <DummyImageView imageUrl={filePath} /> 
                <FileNameText>{filePath}</FileNameText>
            </View>
            <View style={Styles.buttonContainer}>
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
        </View>
    )
}

interface Action {
    title: string;
    type: 'capture' | 'library' | 'FileManager' | 'Upload';
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions | DocumentPicker.DocumentPickerResponse | null;
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
        options: null,
    },
];
