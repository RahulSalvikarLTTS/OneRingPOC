/**
 * @format
 */

import 'react-native';
import React from 'react';
//import App from '../src/LoginDemo/App';
import App from '../src/App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  //renderer.create(<App />).toJSON();
  const snap = renderer.create(
    <App />
  ).toJSON()
  expect(snap).toMatchSnapshot();
});
