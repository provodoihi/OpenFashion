import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  followUs: {
    marginTop: moderateScale(32.53),
    width: moderateScale(146),
    height: moderateScale(40),
  },
  followUsText: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: 'TenorSans-Regular',
    lineHeight: 40,
    fontWeight: '400',
    color: '#000000',
    letterSpacing: moderateScale(4),
  },
  instagramSocial: {
    marginTop: moderateScale(3.47),
  },
  instagramIcon: {
    width: moderateScale(21.12),
    height: moderateScale(22.12),
  },
  followUsImage: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(11.44),
  },
  groupImage: {
    margin: moderateScale(8),
  },
  imageInstagram: {
    width: moderateScale(164),
    height: moderateScale(175),
  },
  accountName: {
    marginTop: moderateScale(135),
    width: moderateScale(164),
    height: moderateScale(40),
    justifyContent: 'center',
    position: 'absolute',
  },
  accountNameText: {
    fontSize: moderateScale(14),
    letterSpacing: moderateScale(1),
    marginLeft: 9,
    fontWeight: '400',
    fontFamily: 'TenorSans-Regular',
    lineHeight: 16,
    color: '#FFFFFF',
  },
});
export default styles;
