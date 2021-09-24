import React from 'react';
import  * as firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/redux/reducers';
import thunk from 'redux-thunk';

import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Constants from 'expo-constants';
import AuthScreen from './src/screens/auth';
import Route from './src/navigation/main';

const store = createStore(rootReducer, applyMiddleware(thunk));

if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
} else {
  firebase.app()
}

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
