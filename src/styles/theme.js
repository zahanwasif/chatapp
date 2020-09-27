import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const colors = {
  primary: '#00a3d2',
  secondary: '#FFFFFF',
  text: '#454545',
  secondaryText: '#808080',
};

export const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  bodyCotainer: {
    flex: 1,
  },
  headerContainer: {},
  header: {
    padding: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: colors.primary,
  },
  line: {
    borderColor: colors.secondaryText,
    borderWidth: 0.5,
  },
  circle: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: wp(20),
    width: wp(20),
    borderRadius: 1000,
    alignItems: 'center',
    marginLeft: wp(73),
    marginTop: hp(80),
  },
});

export default colors;
