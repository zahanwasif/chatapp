import {StyleSheet} from 'react-native';
import colors from '../../styles/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  circle: {
    position: 'absolute',
    backgroundColor: colors.primary,
    height: hp(100),
    width: hp(100),
    borderRadius: 1000,
    alignSelf: 'center',
    marginTop: -hp(25),
  },
  headerContainer: {
    alignItems: 'center',
  },
  header: {
    color: colors.secondary,
    fontSize: 50,
    fontWeight: 'bold',
    paddingVertical: hp(4),
  },
  name: {
    color: colors.secondary,
    fontSize: hp(3),
    fontFamily: 'sans-serif-medium',
    paddingHorizontal: wp(10),
    paddingTop: 40,
    paddingBottom: 10,
  },
  Input: {
    alignSelf: 'center',
    height: hp(10),
    width: wp(80),
    borderWidth: 4,
    fontSize: hp(3),
    borderColor: '#fff',
    color: colors.secondary,
    borderRadius: 10,
    paddingLeft: 30,
  },
});
