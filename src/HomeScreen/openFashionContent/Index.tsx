import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import data from '../../../assets/dataImage/OpenFashion';
import styles from './Style';

const Openfashion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/image/Logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Making a luxurious lifestyle accessible for a generous group of women
          is our daily drive.
        </Text>
      </View>
      <Image
        source={require('../../../assets/icon/8.png')}
        style={styles.footerBoder}
      />
      <View style={styles.Contentsticker}>
        {data.map(e => {
          return (
            <View key={e.id} style={styles.stickerList}>
              <Image source={e.url} style={styles.sticker} />
              <View style={styles.contentSticker}>
                <Text style={styles.contentStickerText}>{e.content}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.contentEnd}>
        <Image
          source={require('../../../assets/image/–.png')}
          style={styles.contentEndImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default Openfashion;
