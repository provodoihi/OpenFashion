import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
export const styles = StyleSheet.create({
  itemContainer: {
    width: moderateScale(165),
    height: moderateScale(285),
    marginTop: moderateScale(19),
    marginHorizontal: moderateScale(10),
  },
  itemImage: {
    width: '100%',
    height: moderateScale(220),
    resizeMode: 'contain',
  },
  itemName: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    fontWeight: '400',
    textAlign: 'left',
    color: '#000000',
  },
  itemAttribute: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    fontWeight: '400',
    textAlign: 'left',
    color: '#555555',
  },
  itemPrice: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(15),
    lineHeight: moderateScale(24),
    fontWeight: '400',
    textAlign: 'left',
    color: '#DD8560',
  },
  heart: {
    position: 'absolute',
    top: moderateScale(199),
    right: moderateScale(10),
  },
});
