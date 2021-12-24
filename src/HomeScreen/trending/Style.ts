import { StyleSheet } from "react-native";
import { moderateScale } from '../../utils';
const styles = StyleSheet.create({
  container: {
    height: moderateScale(140),
    marginBottom:moderateScale(22.44),
    alignItems: 'center',
  },
  trending:{
    marginTop: moderateScale(6),
    width: moderateScale(160),
    height: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendingText:{
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 40,
    letterSpacing:4,
    color: '#000000'
  }, 
  hastagList:{
    marginTop: moderateScale(2),
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  hastag:{
    margin:moderateScale(14),
  },
  hastagText:{
    fontFamily: 'TenorSans-Regular',
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 16,
    color: '#333333'
  }
});
export default styles