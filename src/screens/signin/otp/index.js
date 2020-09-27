import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import colors from '../../../styles/theme';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../../redux/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Circle from '../../../styles/circle';
const Otp = () => {
  const dispatch = useDispatch();
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  var input1 = React.useRef('');
  var input2 = React.useRef('');
  var input3 = React.useRef('');
  var input4 = React.useRef('');

  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Confirm Your Phone Number</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>We have sent you One Time Password</Text>
        <Text style={styles.text}>Enter here to confirm your phone number</Text>
      </View>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.Input}
          onChangeText={(text) => {
            input1.current = text;
            if (text !== '') ref2.current.focus();
          }}
          ref={ref1}
          maxLength={1}
        />
        <TextInput
          style={styles.Input}
          onChangeText={(text) => {
            input2.current = text;
            if (text !== '') ref3.current.focus();
          }}
          ref={ref2}
          maxLength={1}
        />
        <TextInput
          style={styles.Input}
          onChangeText={(text) => {
            input3.current = text;
            if (text !== '') ref4.current.focus();
          }}
          ref={ref3}
          maxLength={1}
        />
        <TextInput
          style={styles.Input}
          onChangeText={(text) => {
            input4.current = text;
            if (text !== '') ref4.current.blur();
          }}
          ref={ref4}
          maxLength={1}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Didn't get the code? Resend</Text>
      </View>

      <Circle
        Icon={
          <Ionicons
            name="checkmark-outline"
            size={70}
            color={colors.secondary}
          />
        }
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default Otp;
