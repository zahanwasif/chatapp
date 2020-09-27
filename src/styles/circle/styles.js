import {StyleSheet} from 'react-native';
import colors from '../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  circle: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 90,
    width: 90,
    borderRadius: 100,
    alignItems: 'center',
    marginLeft: wp(72),
    marginTop: hp(79),
  },
});
