import * as React from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import colors, {main} from '../../styles/theme';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Circle from '../../styles/circle';

const Signin = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign In</Text>
      </View>
      <Text style={styles.name}>Name</Text>
      <TextInput
        style={styles.Input}
        onChangeText={(text) => setName(text)}
        defaultValue={name}
      />
      <Text style={styles.name}>Phone Number</Text>
      <TextInput
        style={styles.Input}
        onChangeText={(text) => setPhone(text)}
        defaultValue={phone}
        keyboardType="numeric"
      />
      <Circle
        Icon={
          <Ionicons
            name="checkmark-outline"
            size={70}
            color={colors.secondary}
          />
        }
        onPress={() => navigation.navigate('Otp')}
      />
    </View>
  );
};

export default Signin;
