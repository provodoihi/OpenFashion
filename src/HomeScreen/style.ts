import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    height: verticalScale(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    // alignSelf: 'center',
    backgroundColor: '#E7EAEF',
  },
  menu: {
    width: scale(24),
    height: verticalScale(24),
  },
  iconmenu: {
    width: scale(24),
    height: verticalScale(24),
  },
  logo: {
    height: moderateScale(35),
    width: moderateScale(78),
    marginLeft: moderateScale(110),
    marginRight: moderateScale(70),
  },
  imglogo: {
    height: moderateScale(32),
    width: moderateScale(78),
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsearch: {
    width: scale(24),
    height: verticalScale(24),
    marginRight: moderateScale(18),
  },
  iconshoppingcart: {
    width: scale(24),
    height: verticalScale(24),
  },
  banner: {
    height: verticalScale(630),
    width: scale(375),
    // ,
  },
  imgbanner: {
    width: '100%',
    height: moderateScale(630),
  },
  slide: {
    width: '100%',
    height: moderateScale(50),
  },
  wrap: {
    height: moderateScale(630),
  },
  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
    transform: [{rotate: '45deg'}],
    borderColor: '#FCFCFC',
    borderWidth: 1,
  },
  activedot: {
    backgroundColor: '#FCFCFC',
    width: moderateScale(6),
    height: moderateScale(6),
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
    transform: [{rotate: '45deg'}],
  },
  luxury: {
    width: scale(175.16),
    height: verticalScale(43.49),
    marginLeft: scale(42.84),
    marginTop: verticalScale(231.44),
  },
  txtluxury: {
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    fontSize: moderateScale(38.66),
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: '#333333',
    opacity: 0.7,
  },
  fashion: {
    width: scale(187.24),
    marginLeft: scale(60.37),
    height: verticalScale(45.49),
    marginTop: verticalScale(5),
    // ,
    paddingTop: 5,
  },
  txtfashion: {
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    fontSize: moderateScale(38.66),
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: '#333333',
    opacity: 0.7,
    lineHeight: moderateScale(47),
  },
  and: {
    width: scale(25.81),
    height: verticalScale(39.42),
    left: scale(36.71),
    top: verticalScale(9),
    // ,
  },
  txtand: {
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    fontSize: moderateScale(30.59),
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: '#333333',
    opacity: 0.7,
    lineHeight: 37,
  },
  accessories: {
    width: scale(287.51),
    height: verticalScale(43.49),
    marginLeft: scale(39.43),
    // ,
  },
  txtaccessories: {
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    fontSize: moderateScale(38.66),
    textTransform: 'uppercase',
    letterSpacing: 1.3,
    color: '#333333',
    opacity: 0.7,
    lineHeight: 48,
  },
  explorecollection: {
    width: '100%',
    height: scale(40),
    marginTop: verticalScale(173.5),
  },
  btnexplorecollection: {
    width: scale(253),
    height: verticalScale(40),
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    blur: 4,
  },
  txtexplorecollection: {
    fontFamily: 'TenorSans-Regular',
    textTransform: 'uppercase',
    fontSize: moderateScale(16),
    color: '#FCFCFC',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  newarrival: {
    height: verticalScale(736),
    width: scale(375),
    backgroundColor: '#fcfcfc',
  },
  titleNewArrival: {
    height: verticalScale(32.58),
    width: scale(225.51),
    // ,
    marginTop: verticalScale(32.42),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNewArrival: {
    fontFamily: 'TenorSans-Regular',
    letterSpacing: 4,
    fontSize: moderateScale(18),
    color: '#000000',
  },
  devider: {
    height: verticalScale(9.25),
    width: scale(124.96),
    alignSelf: 'center',
  },
  devider1: {
    height: verticalScale(9.25),
    width: scale(124.96),
    alignSelf: 'center',
    marginTop: verticalScale(11),
  },
  imgdevider: {
    height: verticalScale(9.25),
    width: scale(124.96),
  },
  category: {
    height: verticalScale(36),
    width: scale(375),
    marginTop: verticalScale(13.75),
  },
  maincategory: {
    height: verticalScale(36),
    width: scale(292.1),
    // ,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnAll: {
    // ,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(26),
    width: scale(21),
    lineHeight: 14.48,
  },
  btnApparel: {
    // ,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(26),
    width: scale(59),
  },
  btnDress: {
    // ,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(26),
    width: scale(59),
  },
  btnTshirt: {
    // ,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(26),
    width: scale(42),
  },
  btnBag: {
    // ,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(26),
    width: scale(28),
  },
  scname: {
    fontSize: moderateScale(14),
    fontFamily: 'TenorSans-Regular',
  },
  brand: {
    height: verticalScale(190),
    width: scale(375),
    backgroundColor: '#fcfcfc',
  },
  globalbrand: {
    height: verticalScale(140),
    width: scale(375),
    flexDirection: 'row',
  },
  tier1: {
    height: verticalScale(140),
    width: scale(125),
    justifyContent: 'space-evenly',
    // ,
  },
  imglogoprada: {
    height: verticalScale(12.69),
    width: scale(69.32),
    alignSelf: 'center',
    // ,
  },
  imglogocartier: {
    height: verticalScale(25),
    width: scale(80),
    alignSelf: 'center',
    // ,
  },
  imglogoburberry: {
    height: verticalScale(9.31),
    width: scale(98.32),
    alignSelf: 'center',
  },
  imglogogucci: {
    height: verticalScale(15.71),
    width: scale(94.26),
    alignSelf: 'center',
  },
  imglogoboss: {
    height: verticalScale(19.73),
    width: scale(52.6),
    alignSelf: 'center',
  },
  imglogotiffany: {
    height: verticalScale(13.64),
    width: scale(95.36),
    alignSelf: 'center',
  },
  collections: {
    height: verticalScale(640),
    width: scale(375),
    backgroundColor: '#FCFCFC',
  },
  titleCollections: {
    height: verticalScale(40),
    width: scale(177),
    // ,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txtCollections: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(18),
    textTransform: 'uppercase',
    letterSpacing: 4,
    alignItems: 'center',
    lineHeight: 40,
    color: '#000000',
  },
  imgCollectionOctober: {
    height: verticalScale(244.79),
    width: scale(375),
    marginTop: verticalScale(15.76),
  },
  monthCollections: {
    height: verticalScale(244.37),
    width: scale(216.37),
    marginLeft: scale(187.93),
    marginTop: verticalScale(22.49),
    // ,
  },
  txtmonthCollections: {
    fontSize: moderateScale(162.704),
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    opacity: 0.5,
    letterSpacing: -31.5,
    lineHeight: 244,
    color: '#333333',
  },
  octoberCollections: {
    height: verticalScale(62.88),
    width: scale(172.52),
    marginLeft: scale(192.21),
    marginTop: verticalScale(-170),
    // ,
  },
  txtoctoberCollections: {
    fontSize: moderateScale(41.8646),
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    color: '#FCFCFC',
  },
  txtCollection: {
    fontFamily: 'TenorSans-Regular',
    color: '#FCFCFC',
    fontSize: moderateScale(12.93),
    textTransform: 'uppercase',
    letterSpacing: 6.06064,
  },
  imgCollectionAutumn: {
    height: verticalScale(296),
    width: scale(260),
    marginTop: verticalScale(35.46),
    alignSelf: 'center',
  },
  autumnCollections: {
    height: verticalScale(62.88),
    width: scale(171.52),
    marginLeft: scale(93.33),
    marginTop: verticalScale(32.67),
    // ,
  },
  txtautumnCollections: {
    fontSize: moderateScale(41.8646),
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    color: '#333333',
  },
  txtCollection1: {
    fontFamily: 'TenorSans-Regular',
    color: '#333333',
    fontSize: moderateScale(11.3221),
    textTransform: 'uppercase',
    letterSpacing: 5.30721,
    textAlign: 'center',
  },
  video: {
    height: verticalScale(207.96),
    marginBottom: verticalScale(48.89),
    width: scale(375),
    backgroundColor: '#FFFFFF',
  },
  imgVideo: {
    height: verticalScale(175.96),
    width: scale(375),
    justifyContent: 'center',
    marginTop: 32,
  },
  play: {
    height: verticalScale(33.27),
    width: scale(33.27),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 100,
    blur: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  polygon: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 7.78,
    borderBottomWidth: 11.56,
    borderLeftWidth: 7.78,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFFFFF',
    borderLeftColor: 'transparent',
    borderRadius: 3,
    transform: [{rotate: '90deg'}],
    alignItems: 'center',
  },
  containerProduct: {
    height: moderateScale(480),
    marginBottom: moderateScale(38),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    marginTop: moderateScale(23),
    width: moderateScale(190),
    height: moderateScale(40),
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 4,
    lineHeight: 40,
    color: '#000000',
  },
  footerBoder: {
    width: moderateScale(124.96),
    height: moderateScale(9.25),
  },
  groupProduct: {
    marginTop: moderateScale(23.06),
    height: moderateScale(390.27),
    alignItems: 'center',
  },
  product: {
    width: moderateScale(254.89),
    height: moderateScale(311.64),
    marginLeft: moderateScale(10),
    alignItems: 'center',
  },
  productInfor: {
    marginTop: moderateScale(4),
    width: moderateScale(254.89),
    height: moderateScale(48),
  },
  productImage: {
    width: moderateScale(254.89),
    height: moderateScale(311.64),
  },
  name: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
    color: '#333333',
  },
  priceV: {
    width: moderateScale(34),
    height: moderateScale(24),
  },
  price: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
    color: '#DD8560',
  },
});
