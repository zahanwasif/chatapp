import {StyleSheet} from 'react-native';
import colors from '../../styles/theme';

export default StyleSheet.create({
  chatBoxContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    padding: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    justifyContent: 'space-around',
  },
  primaryText: {
    fontSize: 20,
    color: colors.text,
  },
  secondaryText: {
    fontSize: 15,
    color: colors.secondaryText,
  },
});
