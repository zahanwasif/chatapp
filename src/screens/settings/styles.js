import {StyleSheet} from 'react-native';
import colors from '../../styles/theme';

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginVertical: 15,
  },
  imageHeading: {
    alignItems: 'center',
  },
  imageText: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 13,
    backgroundColor: colors.secondary,
  },
  optionsContainer: {flex: 1},
  left: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
  right: {
    fontSize: 20,
    color: colors.secondaryText,
    fontFamily: 'sans-serif-light',
    fontWeight: '800',
  },
});
