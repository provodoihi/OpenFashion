import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import data from '../../../assets/dataImage/Product';
import styles from './Style';

const Product = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>JUST FOR YOU</Text>
      </View>
      <Image source={require('../../../assets/icon/8.png')} style={styles.footerBoder} />
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.groupProduct}>
              <TouchableOpacity style={styles.product} >
                <Image source={{ uri: item.url }} style={styles.productImage} resizeMode="cover" />
                <View style={styles.productInfor}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.priceV}>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
        keyExtractor={item => item.id?.toString()}
      />
    </SafeAreaView >
  )
}

export default Product
