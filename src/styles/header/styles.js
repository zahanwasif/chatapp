import {StyleSheet} from 'react-native';
import colors from '../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  headerContainerLeft: {
    padding: 15,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignContent: 'center',
  },
  headerContainer: {
    padding: 15,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainerRight: {
    padding: 15,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerWithBoth: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  iconBoth: {
    fontSize: 32,
    color: 'white',
  },
  iconRightBoth: {
    alignSelf: 'flex-end',
    fontSize: 32,
    color: 'white',
  },

  headerLeft: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 10,
  },
  leftIcon: {
    fontSize: 32,
    color: 'white',
  },
  rightIcon: {
    fontSize: 32,
    color: 'white',
    marginHorizontal: 5,
  },
  headerRight: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  header: {
    flex: 1,
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    // textAlign: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 10,
  },
});
