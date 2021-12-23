/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {AppNavigationProps} from '../navigation/routes';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const DetailScreen = ({navigation}: AppNavigationProps<'Detail'>) => {
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
      </ScrollView>
    </View>
  );
};
