import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../signin';
import Otp from '../signin/otp';
const SignupStack = createStackNavigator();

export default SignupStackNav = () => {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />

      <SignupStack.Screen
        name="Otp"
        component={Otp}
        options={{headerShown: false}}
      />
    </SignupStack.Navigator>
  );
};
