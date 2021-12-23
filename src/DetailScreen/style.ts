import {StyleSheet} from 'react-native';
import {moderateScale} from '../utils';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  box: {
    paddingHorizontal: moderateScale(16),
  },
  header: {
    height: moderateScale(60),
    flexDirection: 'row',
  },
  menu: {
    marginTop: moderateScale(22.75),
    height: moderateScale(24),
    width: moderateScale(24),
  },
  logo: {
    marginTop: moderateScale(19),
    height: moderateScale(32),
    width: moderateScale(78.08),
    marginLeft: moderateScale(102.31),
  },
  search: {
    marginTop: moderateScale(24),
    marginLeft: moderateScale(70),
    height: moderateScale(24),
    width: moderateScale(24),
  },
  bag: {
    marginTop: moderateScale(24),
    marginLeft: moderateScale(18),
    height: moderateScale(24),
    width: moderateScale(24),
  },
  ava: {
    marginTop: moderateScale(20),
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  avaContainer: {
    height: moderateScale(460),
    width: '100%',
  },
  resize: {
    top: moderateScale(432),
    // marginLeft: moderateScale(311),
    right: moderateScale(12),
    height: moderateScale(36),
    width: moderateScale(36),
    position: 'absolute',
    opacity: 1,
  },
  variation: {
    height: moderateScale(140),
    marginTop: moderateScale(48),
  },
  productName: {
    flexDirection: 'row',
    marginTop: moderateScale(15.52),
    width: '100%',
    justifyContent: 'space-between',
  },
  textName: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    fontWeight: '400',
    letterSpacing: moderateScale(4),
    color: 'black',
    marginLeft: moderateScale(-10),
    lineHeight: moderateScale(19),
  },
  export: {
    height: moderateScale(16),
    width: moderateScale(16),
  },
  descriptionContainer: {
    height: moderateScale(19),
    marginTop: moderateScale(8),
  },
  descriptionText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#555555',
  },
  priceContainer: {
    height: moderateScale(21),
    marginTop: moderateScale(8),
  },
  priceText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: '#DD8560',
  },
  color: {
    marginTop: moderateScale(18.39),
    height: moderateScale(22.24),
    flexDirection: 'row',
  },
  color1: {
    height: moderateScale(16),
    width: moderateScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: 'black',
    marginLeft: moderateScale(12),
  },
  color2: {
    height: moderateScale(16),
    width: moderateScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: '#DD8560',
    marginLeft: moderateScale(12),
  },
  color3: {
    height: moderateScale(16),
    width: moderateScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: '#E1E0D8',
    marginLeft: moderateScale(12),
  },
  colorText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#555555',
  },
  sizeText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#555555',
    marginLeft: moderateScale(35),
  },
  size1: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: 'black',
    marginLeft: moderateScale(12),
    marginTop: moderateScale(-4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    marginTop: moderateScale(17.51),
    height: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorSize: {
    flexDirection: 'row',
  },
  sText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: '#F9F9F9',
  },
  sText2: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: '#555555',
  },
  size2: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: 'white',
    marginLeft: moderateScale(12),
    marginTop: moderateScale(-4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  add: {
    height: moderateScale(56),
    width: '100%',
    backgroundColor: 'black',
    marginTop: moderateScale(32),
    justifyContent: 'center',
  },
  plus: {
    marginLeft: moderateScale(16),
  },
  addContent: {
    flexDirection: 'row',
  },
  addText: {
    marginLeft: moderateScale(10),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#FCFCFC',
    lineHeight: moderateScale(24),
  },
  heart: {
    marginLeft: moderateScale(154),
  },
  box1: {
    paddingHorizontal: moderateScale(20),
    height: moderateScale(740),
    marginTop: moderateScale(16.48),
  },
  mate: {
    lineHeight: moderateScale(20),
    marginTop: moderateScale(13),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: 'black',
  },
  des1: {
    height: moderateScale(84.7),
    marginTop: moderateScale(6.25),
  },
  desText: {
    lineHeight: moderateScale(24),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#555',
  },
  care: {
    lineHeight: moderateScale(20),
    marginTop: moderateScale(15.82),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: 'black',
    marginLeft: moderateScale(-4),
  },
  des2: {
    height: moderateScale(147),
    marginTop: moderateScale(6.53),
  },
  bleach: {
    marginTop: moderateScale(13.77),
    flexDirection: 'row',
  },
  bleachIcon: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  bleachText: {
    lineHeight: moderateScale(24),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#555',
    marginLeft: moderateScale(14.72),
  },
  tumble: {
    marginTop: moderateScale(16),
    flexDirection: 'row',
  },
  care1: {
    lineHeight: moderateScale(20),
    marginTop: moderateScale(42.65),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: 'black',
    marginLeft: moderateScale(-4),
  },
  shipContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(21.35),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shippingText: {
    lineHeight: moderateScale(24),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: 'black',
    marginLeft: moderateScale(10.53),
  },
  forward: {
    height: moderateScale(6.96),
    width: moderateScale(13.93),
  },
  desText1: {
    lineHeight: moderateScale(24),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#555',
    marginLeft: moderateScale(33.53),
    width: moderateScale(260),
  },
  line: {
    borderWidth: 1,
    width: moderateScale(326),
    marginLeft: moderateScale(33.53),
    borderColor: '#555',
    opacity: 0.2,
  },
  CODContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(8.92),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line1: {
    borderWidth: 1,
    width: moderateScale(326),
    marginLeft: moderateScale(33.53),
    borderColor: '#555',
    opacity: 0.2,
    marginTop: moderateScale(7.32),
  },
  alsoLikeBox: {
    marginTop: moderateScale(69),
    marginBottom: moderateScale(22),
    width: '100%',
    height: moderateScale(674),
    alignItems: 'center',
  },
  alsoLikeText: {
    lineHeight: moderateScale(40),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: '#000000',
    letterSpacing: moderateScale(4),
  },
  decorativeLine: {
    width: moderateScale(125),
    height: moderateScale(10),
  },
  contactBox: {
    width: '100%',
    height: moderateScale(340),
    alignItems: 'center',
  },
  socialIconBox: {
    marginVertical: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  instagram: {
    marginHorizontal: moderateScale(49),
    width: moderateScale(24),
    height: moderateScale(24),
    resizeMode: 'contain',
  },
  contactInfoTextBox: {
    marginVertical: moderateScale(19),
    alignItems: 'center',
  },
  contactInfoText: {
    lineHeight: moderateScale(30),
    marginHorizontal: moderateScale(8),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#333333',
    textAlign: 'center',
  },
  footerRoutesBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(32),
    marginBottom: moderateScale(23),
  },
  footerRoutesText: {
    lineHeight: moderateScale(24),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#000000',
  },
  footerRoutesTextCenter: {
    lineHeight: moderateScale(24),
    marginHorizontal: moderateScale(52),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#000000',
  },
  copyrightBox: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: moderateScale(45),
    alignItems: 'center',
  },
  copyrightText: {
    marginTop: moderateScale(10),
    lineHeight: moderateScale(19),
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#555555',
  },
});
