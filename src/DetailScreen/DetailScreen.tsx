/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export const DetailScreen = ({navigation}: AppNavigationProps<'Detail'>) => {
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

  const data: Array<ProductList> = [
    {
      id: 2,
      name: 'MOHAN',
      attribute: 'angora cardigan',
      price: '$ 120',
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/6a2d/eb3f/5dc08c8f3f72604885ea722fb8d95299?Expires=1641168000&Signature=H59Ic~e~3jZ5MlgRbjW7FVqMnVACOUwuqLF9S7hz~Hr4EDNlI5peA5B10k2To0xOAldLUjddZ7Fhn8pPYFnd0VPZRWQgPpYciTCIz3UuecrdygjeUn-lHh-Hn75ESUEBOvJsJ9QH5EfzVlnKm4LOXXqTu0J6VVe7aoBJqpfgKoKkle5BPWMAj6~pbMBJNkAq2nJLIPQJ8ROiBs7~TZM2mpFcbvZL5Y46kjQvI7acWvW0XtdY5q7pAXO25qqWL2I7tY5jolGC~vnCUoXAa7p9JRGMWRtF~kP9ykHzAwebkXZR0P7A7mqd-OU-sDJKC49~Ev0hX7Th98eAesUxms74EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 3,
      name: 'MOHAN',
      attribute: 'angora cardigan',
      price: '$ 120',
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/6a2d/eb3f/5dc08c8f3f72604885ea722fb8d95299?Expires=1641168000&Signature=H59Ic~e~3jZ5MlgRbjW7FVqMnVACOUwuqLF9S7hz~Hr4EDNlI5peA5B10k2To0xOAldLUjddZ7Fhn8pPYFnd0VPZRWQgPpYciTCIz3UuecrdygjeUn-lHh-Hn75ESUEBOvJsJ9QH5EfzVlnKm4LOXXqTu0J6VVe7aoBJqpfgKoKkle5BPWMAj6~pbMBJNkAq2nJLIPQJ8ROiBs7~TZM2mpFcbvZL5Y46kjQvI7acWvW0XtdY5q7pAXO25qqWL2I7tY5jolGC~vnCUoXAa7p9JRGMWRtF~kP9ykHzAwebkXZR0P7A7mqd-OU-sDJKC49~Ev0hX7Th98eAesUxms74EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 4,
      name: 'MOHAN',
      attribute: 'angora cardigan',
      price: '$ 120',
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/6a2d/eb3f/5dc08c8f3f72604885ea722fb8d95299?Expires=1641168000&Signature=H59Ic~e~3jZ5MlgRbjW7FVqMnVACOUwuqLF9S7hz~Hr4EDNlI5peA5B10k2To0xOAldLUjddZ7Fhn8pPYFnd0VPZRWQgPpYciTCIz3UuecrdygjeUn-lHh-Hn75ESUEBOvJsJ9QH5EfzVlnKm4LOXXqTu0J6VVe7aoBJqpfgKoKkle5BPWMAj6~pbMBJNkAq2nJLIPQJ8ROiBs7~TZM2mpFcbvZL5Y46kjQvI7acWvW0XtdY5q7pAXO25qqWL2I7tY5jolGC~vnCUoXAa7p9JRGMWRtF~kP9ykHzAwebkXZR0P7A7mqd-OU-sDJKC49~Ev0hX7Th98eAesUxms74EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 5,
      name: 'MOHAN',
      attribute: 'angora cardigan',
      price: '$ 120',
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/6a2d/eb3f/5dc08c8f3f72604885ea722fb8d95299?Expires=1641168000&Signature=H59Ic~e~3jZ5MlgRbjW7FVqMnVACOUwuqLF9S7hz~Hr4EDNlI5peA5B10k2To0xOAldLUjddZ7Fhn8pPYFnd0VPZRWQgPpYciTCIz3UuecrdygjeUn-lHh-Hn75ESUEBOvJsJ9QH5EfzVlnKm4LOXXqTu0J6VVe7aoBJqpfgKoKkle5BPWMAj6~pbMBJNkAq2nJLIPQJ8ROiBs7~TZM2mpFcbvZL5Y46kjQvI7acWvW0XtdY5q7pAXO25qqWL2I7tY5jolGC~vnCUoXAa7p9JRGMWRtF~kP9ykHzAwebkXZR0P7A7mqd-OU-sDJKC49~Ev0hX7Th98eAesUxms74EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

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
              source={require('../../assets/image/Rose.jpeg')}
            />
            <Image
              style={styles.resize}
              source={require('../../assets/image/Resize.png')}
            />
          </View>
          <View style={styles.variation}>
            <View style={styles.productName}>
              <Text style={styles.textName}> {'MOHAN'} </Text>
              <Image
                style={styles.export}
                source={require('../../assets/image/Export.png')}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                {'Recycle Boucle Knit Cardigan Pink'}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{'$120'}</Text>
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
            data={data}
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
