import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppNavigationProps} from '../navigation/routes';
import {styles} from './style';

export const HomeScreen = ({navigation}: AppNavigationProps<'Home'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text testID="1" style={styles.textHomeScreen}>
          Open Fashion App
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.textHomeScreen}>Navigate</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
