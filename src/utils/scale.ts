import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const BaseWidth: number = 375;
const BaseHeight: number = 760;

const scale = (size: number) => (width / BaseWidth) * size;
const verticalScale = (size: number) => (height / BaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
