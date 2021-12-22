import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AppRoutes = {
  Home: undefined;
  Detail: undefined;
};

export type AppNavigationProps<RouteName extends keyof AppRoutes> =
  NativeStackScreenProps<AppRoutes, RouteName>;

// export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
//   AppNavigation: NativeStackScreenProps<AppRoutes, RouteName>;
// }
