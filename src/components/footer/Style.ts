import { StyleSheet } from 'react-native';
import {scale, verticalScale, moderateScale } from '../../utils';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconSocial: {
    marginTop: verticalScale(23.78),
    width: scale(162),
    height: verticalScale(24),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerBoder: {
    marginTop: verticalScale(24)
  },
  infomation: {
    marginTop: verticalScale(24),
    width: scale(184),
    height: verticalScale(116),
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
    marginTop: verticalScale(32),
    width: scale(230),
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
    marginTop: verticalScale(22.97),
    width: scale(375),
    height: verticalScale(45.25),
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