import {StyleSheet} from 'react-native';
import {moderateScale} from '../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textHomeScreen: {
    fontSize: moderateScale(18),
    marginVertical: moderateScale(20),
    fontWeight: '400',
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'TenorSans-Regular',
  },
});
