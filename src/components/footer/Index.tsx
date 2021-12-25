import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import styles from './Style'
const Footer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconSocial}>
        <TouchableOpacity style={styles.iconImage}>
          <Image source={require('../../../assets/icon/twitterSocial.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconImage}>
          <Image source={require('../../../assets/icon/instagramSocial.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconImage}>
          <Image source={require('../../../assets/icon/youtubeSocial.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <Image source={require('../../../assets/icon/8.png')} style={styles.footerBoder} />
      <View style={styles.infomation}>
        <Text style={styles.infomationText}>support@openui.design</Text>
        <Text style={styles.infomationText}>+60 825 876</Text>
        <Text style={styles.infomationText}>08:00 - 22:00 - Everyday</Text>
        <Image source={require('../../../assets/icon/10.png')} style={styles.footerBoder} />
      </View>
      <View style={styles.contacts}>
        <TouchableOpacity>
          <Text style={styles.contactText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.contactText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.contactText}>Blog</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerCopyright}>
        <Text style={styles.footerCopyrightText}>Copyright© OpenUI All Rights Reserved.</Text>
      </View>
    </SafeAreaView>
  )
}

export default Footer
