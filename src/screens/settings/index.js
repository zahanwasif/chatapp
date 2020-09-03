import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: 'white',
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Settings;
