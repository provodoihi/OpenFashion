/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListRenderItemInfo,
  FlatList,
} from 'react-native';
import {AppNavigationProps} from '../navigation/routes';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ProductList} from './types';
import {ListItem} from './ProductListItem';
import {LogBox} from 'react-native';
import axios from 'axios';
import {API_ROUTE, API_ROOT} from '../constants';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export const DetailScreen = ({navigation}: AppNavigationProps<'Detail'>) => {
  const [selectedProduct, setSelectedProduct] = useState<Array<ProductList>>(
    [],
  );
  const [moreProducts, setMoreProducts] = useState<Array<ProductList>>([]);
  const renderItem = ({item}: ListRenderItemInfo<ProductList>) => {
    return (
      <ListItem
        name={item.name}
        imageSource={item.imgUrl}
        attribute={item.attribute}
        price={item.price}
      />
    );
  };

  const getSelectedProduct = async () => {
    try {
      let response = await axios.get(
        API_ROOT + API_ROUTE.SELECTED_PRODUCT_DETAIL,
      );
      setSelectedProduct(response.data);
    } catch (error) {}
  };

  const getMoreProducts = async () => {
    try {
      let response = await axios.get(API_ROOT + API_ROUTE.MORE_PRODUCTS);
      setMoreProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getSelectedProduct();
    getMoreProducts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.header}>
            <Image
              style={styles.menu}
              source={require('../../assets/image/Menu.png')}
            />
            <Image
              style={styles.logo}
              source={require('../../assets/image/Group.png')}
            />
            <Image
              style={styles.search}
              source={require('../../assets/image/Search.png')}
            />
            <Image
              style={styles.bag}
              source={require('../../assets/image/shopping-bag.png')}
            />
          </View>
          <View style={styles.avaContainer}>
            <Image
              style={styles.ava}
              source={{uri: selectedProduct[0]?.imgUrl}}
            />
            <Image
              style={styles.resize}
              source={require('../../assets/image/Resize.png')}
            />
          </View>
          <View style={styles.variation}>
            <View style={styles.productName}>
              <Text style={styles.textName}> {selectedProduct[0]?.name} </Text>
              <Image
                style={styles.export}
                source={require('../../assets/image/Export.png')}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                {selectedProduct[0]?.attribute}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{selectedProduct[0]?.price}</Text>
            </View>
            <View style={styles.colorSize}>
              <View style={styles.color}>
                <Text style={styles.colorText}> {'Color'} </Text>
                <View style={styles.color1} />
                <View style={styles.color2} />
                <View style={styles.color3} />
              </View>
              <View style={styles.size}>
                <Text style={styles.sizeText}> {'Size'} </Text>
                <TouchableOpacity style={styles.size1}>
                  <Text style={styles.sText}> {'S'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.size2}>
                  <Text style={styles.sText2}> {'M'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.size2}>
                  <Text style={styles.sText2}> {'L'} </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.add}>
          <View style={styles.addContent}>
            <AntDesign
              style={styles.plus}
              name="plus"
              size={20}
              color="#FCFCFC"
            />
            <Text style={styles.addText}> {'ADD TO BASKET'} </Text>
            <AntDesign
              style={styles.heart}
              name="hearto"
              size={24}
              color="#FCFCFC"
            />
          </View>
        </View>
        <View style={styles.box1}>
          <Text style={styles.mate}>{'MATERIALS'}</Text>
          <View style={styles.des1}>
            <Text style={styles.desText}>
              {
                'We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.'
              }
            </Text>
          </View>
          <Text style={styles.care}> {'CARE'} </Text>
          <View style={styles.des2}>
            <Text style={styles.desText}>
              {
                'To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.'
              }
            </Text>
          </View>
          <View style={styles.bleach}>
            <Image
              style={styles.bleachIcon}
              source={require('../../assets/image/Do-Not-Bleach.png')}
            />
            <Text style={styles.bleachText}>{'Do not use bleach'}</Text>
          </View>
          <View style={styles.tumble}>
            <Image
              style={styles.bleachIcon}
              source={require('../../assets/image/Do-Not-Tumble-Dry.png')}
            />
            <Text style={styles.bleachText}>{'Do not tumble dry'}</Text>
          </View>
          <View style={styles.tumble}>
            <Image
              style={styles.bleachIcon}
              source={require('../../assets/image/Do-Not-Wash.png')}
            />
            <Text style={styles.bleachText}>
              {'Dry clean with tetrachloroethylene'}
            </Text>
          </View>
          <View style={styles.tumble}>
            <Image
              style={styles.bleachIcon}
              source={require('../../assets/image/Iron-Low-Temperature.png')}
            />
            <Text style={styles.bleachText}>
              {'Iron at a maximum of 110ºC/230ºF'}
            </Text>
          </View>
          <Text style={styles.care1}> {'CARE'} </Text>
          <View style={styles.shipContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.bleachIcon}
                source={require('../../assets/image/Shipping.png')}
              />
              <Text style={styles.shippingText}>
                {'Free Flat Rate Shipping'}
              </Text>
            </View>
            <Image
              style={styles.forward}
              source={require('../../assets/image/Forward.png')}
            />
          </View>
          <Text style={styles.desText1}>
            {'Estimated to be delivered on 09/11/2021 - 12/11/2021.'}
          </Text>
          <View style={styles.line} />
          <View style={styles.CODContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.bleachIcon}
                source={require('../../assets/image/Tag.png')}
              />
              <Text style={styles.shippingText}>{'COD'}</Text>
            </View>
            <Image
              style={styles.forward}
              source={require('../../assets/image/Downward.png')}
            />
          </View>
          <View style={styles.line1} />
          <View style={styles.CODContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.bleachIcon}
                source={require('../../assets/image/Refresh.png')}
              />
              <Text style={styles.shippingText}>{'Return Policy'}</Text>
            </View>
            <Image
              style={styles.forward}
              source={require('../../assets/image/Downward.png')}
            />
          </View>
        </View>
        <View style={styles.alsoLikeBox}>
          <Text style={styles.alsoLikeText}>{'YOU MAY ALSO LIKE'}</Text>
          <Image
            style={styles.decorativeLine}
            source={require('../../assets/image/Decorative-Underline.png')}
          />
          <FlatList
            data={moreProducts}
            horizontal={false}
            numColumns={2}
            initialNumToRender={4}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => `row-${item.id}`}
          />
        </View>
        <View style={styles.contactBox}>
          <View style={styles.socialIconBox}>
            <AntDesign name="twitter" color="#333333" size={24} />
            <Image
              source={require('../../assets/image/Instagram.png')}
              style={styles.instagram}
            />
            <AntDesign name="youtube" color="#333333" size={24} />
          </View>
          <Image
            style={styles.decorativeLine}
            source={require('../../assets/image/Decorative-Underline.png')}
          />
          <View style={styles.contactInfoTextBox}>
            <Text style={styles.contactInfoText}>
              {'support@openui.design'}
            </Text>
            <Text style={styles.contactInfoText}>{'+60 825 876'}</Text>
            <Text style={styles.contactInfoText}>
              {'08:00 - 22:00 - Everyday'}
            </Text>
          </View>
          <Image
            style={styles.decorativeLine}
            source={require('../../assets/image/Decorative-Underline.png')}
          />
          <View style={styles.footerRoutesBox}>
            <Text style={styles.footerRoutesText}>{'About'}</Text>
            <Text style={styles.footerRoutesTextCenter}>{'Contact'}</Text>
            <Text style={styles.footerRoutesText}>{'Blog'}</Text>
          </View>
          <View style={styles.copyrightBox}>
            <Text style={styles.copyrightText}>
              {'Copyright© OpenUI All Rights Reserved.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
