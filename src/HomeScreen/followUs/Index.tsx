import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import data from '../../../assets/dataImage/FollowUs';
import styles from './Style';

const FollowUs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.followUs}>
        <Text style={styles.followUsText}>Follow Us</Text>
      </View>
      <View style={styles.instagramSocial}>
        <Image
          source={require('../../../assets/icon/instagramSocial2.png')}
          style={styles.instagramIcon}
        />
      </View>
      <View style={styles.followUsImage}>
        {data.map(e => {
          return (
            <View key={e.id} style={styles.groupImage}>
              <Image source={e.url} style={styles.imageInstagram} />
              <LinearGradient
                colors={[0, '#000000']}
                style={styles.accountName}>
                <Text style={styles.accountNameText}>{e.instaAccount}</Text>
              </LinearGradient>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default FollowUs;
