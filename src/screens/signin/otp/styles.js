import {StyleSheet} from 'react-native';
import colors from '../../../styles/theme';
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 20,
  },
  headerContainer: {
    alignItems: 'center',
    elevation: 25,
  },
  header: {
    color: colors.secondary,
    fontSize: wp(6),
    fontWeight: 'bold',
    paddingVertical: hp(6),
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
    height: 70,
    width: 50,
    borderWidth: 4,
    fontSize: 30,
    borderColor: '#fff',
    color: colors.secondary,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 30,
    elevation: 25,
  },
  textContainer: {
    elevation: 25,
    alignItems: 'center',
    margin: 30,
  },
  text: {
    color: colors.secondary,
    fontSize: 17,
  },
});
