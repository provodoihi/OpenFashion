import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import data from '../../../assets/dataImage/Trending';
import styles from './Style';

const Trending = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.trending}>
        <Text style={styles.trendingText}>@TRENDING</Text>
      </View>
      <View style={styles.hastagList}>
        {data.map(e => {
          return (
            <View key={e.id} style={styles.hastag}>
              <Text style={styles.hastagText}>{e.hastag}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Trending;
