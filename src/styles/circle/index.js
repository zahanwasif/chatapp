import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

export default Circle = ({Icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.circle} onPress={onPress}>
      {Icon}
    </TouchableOpacity>
  );
};
