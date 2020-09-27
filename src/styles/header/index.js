import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Header = ({
  title,
  onPressLeft,
  onPressRight,
  rightIcon,
  image,
  base64,
}) => {
  handlePressBack = () => {
    console.log('Pressed Back');
  };

  if (onPressLeft && onPressRight) {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePressBack}>
          <Ionicons style={styles.iconBoth} name="chevron-back" />
        </TouchableOpacity>
        <Text style={styles.headerWithBoth}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <RightIcon style={styles.rightIcon} />
        </TouchableOpacity>
      </View>
    );
  } else if (onPressLeft) {
    return (
      <View style={styles.headerContainerLeft}>
        <TouchableOpacity onPress={handlePressBack}>
          <Ionicons style={styles.leftIcon} name="chevron-back" />
        </TouchableOpacity>
        {base64 && (
          <Image
            style={styles.image}
            source={{
              uri: base64,
            }}
          />
        )}
        {image && <Image style={styles.image} source={image} />}
        <Text style={styles.headerLeft}>{title}</Text>
      </View>
    );
  } else if (onPressRight) {
    return (
      <View style={styles.headerContainerRight}>
        <Text style={styles.headerRight}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <Ionicons
            style={styles.rightIcon}
            name={rightIcon ? rightIcon : 'chevron-back'}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{title}</Text>
      </View>
    );
  }
};
