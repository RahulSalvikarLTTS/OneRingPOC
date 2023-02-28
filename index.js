/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
import {name as appName} from './app.json';

// Redux Home
import ReduxHome from './src/ReduxDemo/ReduxHome';

// File upload to Server
//import DocumentUploadComponent from './src/FileUploadToServer/DocumentUploadComponent';
//import App from './src/FileUploadToServer/App';

AppRegistry.registerComponent(appName, () => ReduxHome);
