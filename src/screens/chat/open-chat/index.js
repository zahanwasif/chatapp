import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {main} from '../../../styles/theme';
import styles from './styles';
import Header from '../../../styles/header';

const OpenChat = () => {
  return (
    <View style={main.container}>
      <Header title="Zahan" />
    </View>
  );
};
export default OpenChat;
