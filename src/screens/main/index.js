import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';
import Home from '../home';

const Loading = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../../images/logo.png')} />
    </View>
  );
};

const Main = () => {
  const [timer, setTimer] = useState(true);
  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(() => {
      setTimer(false);
    }, 4000);
  });

  return <View>{timer ? <Loading /> : <Home Name="Muqadas" />}</View>;
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
