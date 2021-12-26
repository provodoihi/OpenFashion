import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from './../../../utils/scale';
export const styles = StyleSheet.create({
  product: {
    marginTop: verticalScale(15.87),
  },
  list: {
    width: scale(155),
    height: verticalScale(265),
    alignItems: 'center',
    marginLeft: scale(20),
  },
  list1: {
    width: scale(165),
    height: verticalScale(200),

    alignSelf: 'center',
    alignItems: 'center',
  },
  infomation: {
    width: scale(151),
    height: verticalScale(60),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNameProduct: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    fontFamily: 'TenorSans-Regular',
    textAlign: 'center',
    color: '#333333',
  },
  txtPrice: {
    lineHeight: moderateScale(24),
    fontSize: moderateScale(15),
    color: '#DD8560',
  },
  btnMore: {
    width: scale(155),
    height: verticalScale(48),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtMore: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    color: '#000000',
  },
  imgFA: {
    width: scale(18),
    height: verticalScale(18),
    marginLeft: scale(8),
  },
});
