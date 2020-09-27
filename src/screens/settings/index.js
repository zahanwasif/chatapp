import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {main} from '../../styles/theme';
import Header from '../../styles/header';

const picture = require('../../images/profile.png');

const Settings = ({navigation}) => {
  return (
    <View style={main.container}>
      <Header title="Settings" />
      <View style={main.bodyCotainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Display')}>
            <Image style={styles.image} source={picture} />
            <View style={styles.imageHeading}>
              <Text style={styles.imageText}>Profile Picture</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          <View style={main.line} />

          <TouchableOpacity onPress={() => navigation.navigate('Name')}>
            <View style={styles.options}>
              <Text style={styles.left}>Name</Text>
              <Text style={styles.right}>Zahan Wasif</Text>
            </View>
          </TouchableOpacity>
          <View style={main.line} />
          <TouchableOpacity onPress={() => navigation.navigate('Phone')}>
            <View style={styles.options}>
              <Text style={styles.left}>Phone number</Text>
              <Text style={styles.right}>+923164308443</Text>
            </View>
          </TouchableOpacity>
          <View style={main.line} />
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <View style={styles.options}>
              <Text style={styles.left}>About</Text>
              <Text style={styles.right}>Die Lit</Text>
            </View>
          </TouchableOpacity>
          <View style={main.line} />
        </View>
      </View>
    </View>
  );
};

export default Settings;
