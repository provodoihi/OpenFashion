import {StyleSheet} from 'react-native';
import {moderateScale} from '../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textDetailScreen: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'TenorSans-Regular',
    color: '#000000',
    marginTop: moderateScale(10),
  },
  mainProductImage: {
    width: moderateScale(343),
    height: moderateScale(460),
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(13),
    alignSelf: 'center',
  },
  expandButton: {
    width: moderateScale(36),
    height: moderateScale(36),
    position: 'absolute',
    top: moderateScale(432),
    right: moderateScale(28),
  },
  productBox: {
    width: moderateScale(343),
    height: moderateScale(78),
    marginTop: moderateScale(26),
    marginBottom: moderateScale(18),
    marginVertical: moderateScale(16),
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'TenorSans-Regular',
    color: '#000000',
  },
  productAttribute: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'TenorSans-Regular',
    color: '#555555',
    paddingTop: moderateScale(8),
  },
  productPrice: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'TenorSans-Regular',
    color: '#DD8560',
    paddingTop: moderateScale(8),
  },
});
