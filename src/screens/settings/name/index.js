import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {main} from '../../../styles/theme';
import styles from './styles';

const Name = () => {
  return (
    <View style={main.container}>
      <View style={main.headerContainer}>
        <Text style={main.header}>Name</Text>
      </View>
    </View>
  );
};
export default Name;
