import React, { Fragment, Component, useState } from 'react';
//import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default function AppFuncComponent() {
    const [fileUri, setFileUri] = useState('')
    const [photo, setPhoto] = React.useState(null);

    const chooseImageAction = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            if (response) {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    //alert(response.customButton);
                } else {

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    // alert(JSON.stringify(response));s
                    console.log('response', JSON.stringify(response));

                    var fileUri = JSON.stringify(response.assets[0].uri)
                    var newFileUri = fileUri.replace('file://', '')
                    console.log(fileUri)
                    setFileUri(fileUri)
                    // setFileUri(response.uri);
                    // this.setState({
                    //   filePath: response,
                    //   fileData: response.data,
                    //   fileUri: response.uri
                    // });
                }
            }
        });
    }

    const launchCameraAction = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
                console.log('response', JSON.stringify(response));

                var fileUri = JSON.stringify(response.assets[0].uri)
                //var newFileUri = fileUri.replace('file://', '')
                //console.log(newFileUri)
                setFileUri(fileUri)
            }
      
        })
    }

    const renderFileUri = () => {
        if (fileUri != '') {
            
            return <Image
                // source={{ uri: fileUri }}
                // style={styles.images}
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.images}
                source={{uri: fileUri}}
            />
        } else {
            return <Image
                source={require('../assets/galeryImages.jpg')}
                style={styles.images}
            />
        }
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.body}>
                    <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10 }} >Pick Images from Camera & Gallery</Text>
                    <Text>{fileUri}</Text>
                    <View style={styles.ImageSections}>
                        {/* <View>
                  {renderFileData()}
                  <Text  style={{textAlign:'center'}}>Base 64 String</Text>
                </View> */}
                        <View>
                            {renderFileUri()}
                            <Text style={{ textAlign: 'center' }}>File Uri</Text>
                        </View>
                    </View>

                    <View style={styles.btnParentSection}>
                        <TouchableOpacity onPress={chooseImageAction} style={styles.btnSection}  >
                            <Text style={styles.btnText}>Gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={launchCameraAction} style={styles.btnSection}  >
                            <Text style={styles.btnText}>Directly Launch Camera</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={launchImageLibrary} style={styles.btnSection}  >
                  <Text style={styles.btnText}>Directly Launch Image Library</Text>
                </TouchableOpacity> */}
                    </View>

                </View>
            </SafeAreaView>
        </Fragment>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },

    body: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: Dimensions.get('screen').height - 20,
        width: Dimensions.get('screen').width
    },
    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center'
    },
    images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
    },
    btnParentSection: {
        alignItems: 'center',
        marginTop: 10
    },
    btnSection: {
        width: 225,
        height: 50,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10
    },
    btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold'
    }
});