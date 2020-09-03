import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';
import Chat from '../chat';
import Settings from '../settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Loading = () => {
//   return (
//     <View style={styles.logoContainer}>
//       <Image style={styles.logo} source={require('../../images/logo.png')} />
//     </View>
//   );
// };

const Tab = createBottomTabNavigator();

const Main = () => {
  // const [timer, setTimer] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimer(false);
  //   }, 2000);
  // });

  // return <View>{timer ? <Loading /> : <Home Name="Muqadas" />}</View>;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {width: 400, height: 400},
  logoContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default Main;
