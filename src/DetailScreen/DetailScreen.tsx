import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {AppNavigationProps} from '../navigation/routes';
import {styles} from './style';

export const DetailScreen = ({navigation}: AppNavigationProps<'Detail'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text testID="2" style={styles.textDetailScreen}>
          Open Fashion App Detail
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
