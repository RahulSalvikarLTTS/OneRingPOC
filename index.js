/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//import LoginDemo from './src/LoginDemo/App';

// Redux Home
//import ReduxDemo from './src/ReduxDemo/App';

// File upload to Server
//import DocumentUploadComponent from './src/FileUploadToServer/DocumentUploadComponent';
//import App from './src/FileUploadToServer/App';

// ImageFileUploader -> ENAPPD
// import App from './src/ImageFileUploader/ENAPPD/App';
// import AppFuncComponent from './src/ImageFileUploader/ENAPPD/AppFuncComponent';

import FileUpload from './src/ImageCamera/App';
// import fileUpload from './src/ImageCamera/FileUpload';

AppRegistry.registerComponent(appName, () => FileUpload);
