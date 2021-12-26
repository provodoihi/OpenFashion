import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
const styles = StyleSheet.create({
  container: {
    height: moderateScale(465),
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  logo: {
    marginTop: moderateScale(27.56),
    width: moderateScale(97.61),
    height: moderateScale(40),
    alignItems: 'center',
  },
  logoImage: {
    width: moderateScale(97.93),
    height: moderateScale(39.9),
  },
  content: {
    marginTop: moderateScale(16.17),
    width: moderateScale(285.04),
    height: moderateScale(65.63),
    alignItems: 'center',
  },
  contentText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 20,
    color: '#555555',
  },
  footerBoder: {
    marginTop: moderateScale(4.94),
    width: moderateScale(124.96),
    height: moderateScale(9.25),
  },
  Contentsticker: {
    marginTop: moderateScale(5.6),
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickerList: {
    alignItems: 'center',
    margin: moderateScale(8),
  },
  sticker: {
    width: moderateScale(49.77),
    height: moderateScale(34.91),
  },
  contentSticker: {
    marginTop: moderateScale(11.96),
    width: moderateScale(165),
    height: moderateScale(40),
  },
  contentStickerText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(13),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 20,
    color: '#555555',
  },
  contentEnd: {
    marginTop: moderateScale(33.17),
    width: moderateScale(66.52),
    height: moderateScale(39.56),
  },
  contentEndImage: {
    width: moderateScale(66.52),
    height: moderateScale(39.56),
  },
});
export default styles;
