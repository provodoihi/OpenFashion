import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ListRenderItemInfo,
} from 'react-native';
import {ProductList} from './type';
import {LogBox} from 'react-native';
import {styles} from './style';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
const data: Array<ProductList> = [
  {
    id: 1,
    name: '21WN reversible angora cardigan',
    price: '$120',
    imgUrl: require('./../../../../assets/image/Product1.png'),
  },
  {
    id: 2,
    name: '21WN reversible angora cardigan',
    price: '$120',
    imgUrl: require('../../../../assets/image/Product2.png'),
  },
  {
    id: 3,
    name: '21WN reversible angora cardigan',
    price: '$120',
    imgUrl: require('../../../../assets/image/Product3.png'),
  },
  {
    id: 4,
    name: 'Oblong bag',
    price: '$120',
    imgUrl: require('../../../../assets/image/Product4.png'),
  },
];

interface NavigationType {
  navigation?: () => void;
}

export default function All({navigation}: NavigationType) {
  const renderItem = ({item}: ListRenderItemInfo<ProductList>) => {
    return (
      <View style={styles.list}>
        <View style={styles.list1}>
          <TouchableOpacity
            onPress={navigation}
            style={{width: 165, height: 200}}>
            <Image source={item.imgUrl} style={{width: 165, height: 200}} />
          </TouchableOpacity>
          <View style={[styles.infomation]}>
            <Text style={[styles.txtNameProduct]}>{item.name}</Text>
            <Text style={[styles.txtPrice]}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.product}>
      <FlatList
        data={data}
        horizontal={false}
        numColumns={2}
        renderItem={renderItem}
        scrollEnabled={false}
        keyExtractor={item => `row-${item.id}`}
      />
      <TouchableOpacity style={styles.btnMore}>
        <Text style={styles.txtMore}>Explore More</Text>
        <Image
          source={require('../../../../assets/image/ForwardArrow.png')}
          style={styles.imgFA}
        />
      </TouchableOpacity>
    </View>
  );
}
