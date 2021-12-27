import {Platform} from 'react-native';

export const testID = (id: string) => {
  return Platform.OS === 'android'
    ? {
        accessible: true,
        accessibilityLabel: id,
      }
    : {
        testID: id,
      };
};
