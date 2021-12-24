import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppRoutes } from './Routes';

import { HomeScreen } from '../HomeScreen';
import { DetailScreen } from '../DetailScreen';

const AppStack = createNativeStackNavigator<AppRoutes>();

export const AppNavigation = () => {
  return (
    <AppStack.Navigator initialRouteName={'Home'} >
      <AppStack.Screen name={'Home'} component={HomeScreen} options={{ headerShown: false }} />
      <AppStack.Screen name={'Detail'} component={DetailScreen} />
    </AppStack.Navigator>
  );
};
