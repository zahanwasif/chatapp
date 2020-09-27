import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {main} from '../../../styles/theme';
import styles from './styles';

const About = () => {
  return (
    <View style={main.container}>
      <View style={main.headerContainer}>
        <Text style={main.header}>About</Text>
      </View>
    </View>
  );
};
export default About;
