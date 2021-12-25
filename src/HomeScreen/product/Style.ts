import { StyleSheet } from "react-native";
import { moderateScale } from '../../utils';
const styles = StyleSheet.create({
  containerProduct: {
    height: moderateScale(480),
    marginBottom:moderateScale(38),
    alignItems: 'center',
  },
  title:{
    marginTop: moderateScale(23),
    width: moderateScale(190),
    height: moderateScale(40),
    alignItems: 'center',
  },
  titleText:{
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 4,
    lineHeight: 40,
    color: '#000000'
  },
  footerBoder: {
    width: moderateScale(124.96),
    height: moderateScale(9.25),
  },
  groupProduct:{
    marginTop: moderateScale(23.06),
    height: moderateScale(390.27),
    alignItems: 'center',
  },
  product:{
    width: moderateScale(254.89),
    height: moderateScale(311.64),
    marginLeft: moderateScale(10),
    alignItems: 'center',
  },
  productInfor:{
    marginTop: moderateScale(4),
    width: moderateScale(254.89),
    height: moderateScale(48),
  },
  productImage:{
    width: moderateScale(254.89),
    height: moderateScale(311.64),
  },
  name:{
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
    color: '#333333'
  },
  priceV:{
    width: moderateScale(34),
    height: moderateScale(24),
  },
  price:{
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
    color: '#DD8560'
  },
  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    transform: [{rotate: '45deg'}],
    borderColor: '#FCFCFC',
    borderWidth: moderateScale(1),
  },
  activedot: {
    backgroundColor: '#FCFCFC',
    width: moderateScale(6),
    height: moderateScale(6),
    transform: [{rotate: '45deg'}],
  },
});
export default styles