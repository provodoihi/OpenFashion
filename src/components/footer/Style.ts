import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils';
const styles = StyleSheet.create({
  container: {
    height: moderateScale(340),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconSocial: {
    marginTop: moderateScale(26.18),
    width: moderateScale(162),
    height: moderateScale(24),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconImage:{
    width: moderateScale(24),
    height: moderateScale(24),
  },
  icontwitter:{
    width: moderateScale(20.8),
    height: moderateScale(16.9),
  },
  iconInstagram:{
    width: moderateScale(19.2),
    height: moderateScale(19.2),
  },
  iconYoutube:{
    width: moderateScale(20.8),
    height: moderateScale(17.6),
  },
  footerBoder: {
    marginTop: moderateScale(24),
    width: moderateScale(124.96),
    height: moderateScale(9.25),
  },
  infomation: {
    marginTop: moderateScale(24),
    width: moderateScale(200),
    height: moderateScale(116),
    alignItems: 'center',
  },
  infomationText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    lineHeight: 29,
    fontWeight: '400',
    color: '#333333'
  },
  contacts: {
    marginTop: moderateScale(32),
    width: moderateScale(230),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(16),
    fontWeight: '400',
    lineHeight: 24,
    color: '#000000'
  },
  footerCopyright: {
    marginTop: moderateScale(22.97),
    width: moderateScale(375),
    height: moderateScale(45.25),
    backgroundColor: '#F5F5F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerCopyrightText:{
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(12),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 19,
    color: '#555555'
  }
});
export default styles