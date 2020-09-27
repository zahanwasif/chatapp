import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../redux/actions';
import SignupStack from '../navigators/signup-stack-navigator';
import TabNav from '../navigators/tab-navigator';
import Stack from '../navigators/main-stack-navigator';

const Main = () => {
  // const [isLogged, setIsLogged] = useState(true);
  const isLogged = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>{isLogged ? <SignupStack /> : <Stack />}</View>
  );
};

export default Main;
