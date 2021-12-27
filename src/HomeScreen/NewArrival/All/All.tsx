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
import {testID} from '../../../utils';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

interface AllSectionType {
  navigation?: () => void;
  data?: Array<ProductList>;
}

export default function All({navigation, data}: AllSectionType) {
  const renderItem = ({item}: ListRenderItemInfo<ProductList>) => {
    return (
      <View style={styles.list}>
        <View style={styles.list1}>
          <TouchableOpacity
            onPress={navigation}
            style={styles.imageContainer}
            {...testID(`MoreProducts${item.id}`)}>
            <Image source={{uri: item.imgUrl}} style={styles.imageProduct} />
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
        <Text {...testID('ExploreMore')} style={styles.txtMore}>
          Explore More
        </Text>
        <Image
          source={require('../../../../assets/image/ForwardArrow.png')}
          style={styles.imgFA}
        />
      </TouchableOpacity>
    </View>
  );
}
