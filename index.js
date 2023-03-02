/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
import {name as appName} from './app.json';

// Redux Home
//import ReduxHome from './src/ReduxDemo/ReduxHome';

// File upload to Server
//import DocumentUploadComponent from './src/FileUploadToServer/DocumentUploadComponent';
//import App from './src/FileUploadToServer/App';

// ImageFileUploader -> ENAPPD
// import App from './src/ImageFileUploader/ENAPPD/App';
// import AppFuncComponent from './src/ImageFileUploader/ENAPPD/AppFuncComponent';

import App from './src/ImageCamera/App';
// import fileUpload from './src/ImageCamera/FileUpload';

AppRegistry.registerComponent(appName, () => App);
