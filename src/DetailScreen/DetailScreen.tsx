import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {AppNavigationProps} from '../navigation/routes';
import {styles} from './style';

export const DetailScreen = ({navigation}: AppNavigationProps<'Detail'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.mainProductImage}
          source={require('../../assets/image/image15.png')}
        />
        <Image
          style={styles.expandButton}
          source={require('../../assets/icons/Group204.png')}
        />
        <Text testID="2" style={styles.textDetailScreen}>
          Open Fashion App Detail
        </Text>
        <View style={styles.productBox}>
          <Text style={styles.productName}>M O H A N</Text>
          <Text style={styles.productAttribute}>
            Recycle Boucle Knit Cardigan Pink
          </Text>
          <Text style={styles.productPrice}>$ 120</Text>
        </View>
        <Text style={styles.textDetailScreen}>Open Fashion App Detail</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
