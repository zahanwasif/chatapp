/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './src/screens/main';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Main />
    </>
  );
};

export default App;
