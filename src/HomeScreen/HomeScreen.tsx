/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {AppNavigationProps} from '../navigation/routes';
import {styles} from './style';
import {ProductList} from './types';
import {verticalScale} from '../utils';
import Swiper from 'react-native-swiper';
import All from './NewArrival/All/All';
import Apparel from './NewArrival/Apparel';
import Bag from './NewArrival/Bag';
import Dress from './NewArrival/Dress';
import Tshirt from './NewArrival/Tshirt';
import Trending from './trending/Index';
import Openfashion from './openFashionContent/Index';
import FollowUs from './followUs/Index';
import Footer from '../components/footer/Index';
import {getMoreProducts} from '../service/api';
export const HomeScreen = ({navigation}: AppNavigationProps<'Home'>) => {
  const [screen, setScreen] = useState('All');
  const [MoreProducts, setMoreProducts] = useState<Array<ProductList>>([]);
  const getApiProduct = async () => {
    try {
      const result = await getMoreProducts();
      setMoreProducts(result.data);
    } catch (error) {}
  };
  useEffect(() => {
    getApiProduct();
  }, []);
  const ToggleScreen: any = () => {
    if (screen) {
      if (screen === 'All') {
        return <All navigation={() => navigation.navigate('Detail')} />;
      }
      if (screen === 'Apparel') {
        return <Apparel />;
      }
      if (screen === 'Bag') {
        return <Bag />;
      }
      if (screen === 'Dress') {
        return <Dress />;
      }
      if (screen === 'Tshirt') {
        return <Tshirt />;
      }
    }
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <TouchableOpacity style={styles.menu}>
          <Image
            style={[styles.iconmenu]}
            source={require('./../../assets/image/Menu.png')}
          />
        </TouchableOpacity>
        <View style={[styles.logo]}>
          <Image
            style={[styles.imglogo]}
            source={require('../../assets/image/Logo.png')}
          />
        </View>
        <View style={[styles.option]}>
          <TouchableOpacity>
            <Image
              style={[styles.iconsearch]}
              source={require('../../assets/image/Search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={[styles.iconshoppingcart]}
              source={require('../../assets/image/ShoppingBag.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.banner]}>
          <Swiper
            dot={<View style={[styles.dot]} />}
            activeDot={<View style={[styles.activedot]} />}
            // loop={true}
            showsButtons={false}
            // autoplay={true}
            paginationStyle={{
              bottom: verticalScale(20),
            }}>
            <View testID="Hello" style={[styles.slide]}>
              <ImageBackground
                style={[styles.imgbanner]}
                source={{
                  uri: 'https://img01.ztat.net/article/spp-media-p1/68f6bc7dd3ab466387793333bd2b2450/7b9deb288288486895e370c741e92ba6.jpg?imwidth=300',
                }}>
                <View style={[styles.luxury]}>
                  <Text style={[styles.txtluxury]}>Luxury</Text>
                </View>
                <View style={[styles.fashion]}>
                  <Text style={[styles.txtfashion]}>Fashion</Text>
                </View>
                <View style={{flexDirection: 'row', width: 400, height: 50}}>
                  <View style={[styles.and]}>
                    <Text style={[styles.txtand]}>&</Text>
                  </View>
                  <View style={[styles.accessories]}>
                    <Text style={[styles.txtaccessories]}>Accessories</Text>
                  </View>
                </View>
                <View style={[styles.explorecollection]}>
                  <TouchableOpacity style={[styles.btnexplorecollection]}>
                    <Text style={[styles.txtexplorecollection]}>
                      Explore Collection
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View testID="Hello" style={[styles.slide]}>
              <Image
                style={styles.imgbanner}
                source={{
                  uri: 'https://img01.ztat.net/article/spp-media-p1/68f6bc7dd3ab466387793333bd2b2450/7b9deb288288486895e370c741e92ba6.jpg?imwidth=300',
                }}
              />
            </View>
            <View testID="Beautiful" style={[styles.slide]}>
              <Image
                style={styles.imgbanner}
                source={{
                  uri: 'https://images.theurge.com/farfetch/QPc8EsejwGpiqNgZjWG-4ydXORI=/main/3x/776-1035/neutrals-little-liffner-tulip-medium-asymmetric-tote-bag-2.jpg',
                }}
              />
            </View>
          </Swiper>
        </View>
        <View style={[styles.newarrival]}>
          <View style={[styles.titleNewArrival]}>
            <Text style={[styles.txtNewArrival]}>New Arrival</Text>
          </View>
          <View style={[styles.devider]}>
            <Image
              style={styles.imgdevider}
              source={require('../../assets/image/3.png')}
            />
          </View>
          <View style={[styles.category]}>
            <View style={[styles.maincategory]}>
              <TouchableOpacity
                onPress={() => setScreen('All')}
                style={[styles.btnAll]}>
                <Text
                  style={[
                    styles.scname,
                    {
                      color: screen === 'All' ? '#2e3515' : '#9f9f9f',
                      fontWeight: screen === 'All' ? 'bold' : '500',
                    },
                  ]}>
                  All
                </Text>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: screen === 'All' ? '#DD8560' : '#fff',
                    transform: [{rotate: '45deg'}],
                    marginTop: verticalScale(4),
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScreen('Apparel')}
                style={[styles.btnApparel]}>
                <Text
                  style={[
                    styles.scname,
                    {
                      color: screen === 'Apparel' ? '#2e3515' : '#9f9f9f',
                      fontWeight: screen === 'Apparel' ? 'bold' : '500',
                    },
                  ]}>
                  Apparel
                </Text>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: screen === 'Apparel' ? '#DD8560' : '#fff',
                    transform: [{rotate: '45deg'}],
                    marginTop: verticalScale(4),
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScreen('Dress')}
                style={[styles.btnDress]}>
                <Text
                  style={[
                    styles.scname,
                    {
                      color: screen === 'Dress' ? '#2e3515' : '#9f9f9f',
                      fontWeight: screen === 'Dress' ? 'bold' : '500',
                    },
                  ]}>
                  Dress
                </Text>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: screen === 'Dress' ? '#DD8560' : '#fff',
                    transform: [{rotate: '45deg'}],
                    marginTop: verticalScale(4),
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScreen('Tshirt')}
                style={[styles.btnTshirt]}>
                <Text
                  style={[
                    styles.scname,
                    {
                      color: screen === 'Tshirt' ? '#2e3515' : '#9f9f9f',
                      fontWeight: screen === 'Tshirt' ? 'bold' : '500',
                    },
                  ]}>
                  Tshirt
                </Text>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: screen === 'Tshirt' ? '#DD8560' : '#fff',
                    transform: [{rotate: '45deg'}],
                    marginTop: verticalScale(4),
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setScreen('Bag')}
                style={[styles.btnBag]}>
                <Text
                  style={[
                    styles.scname,
                    {
                      color: screen === 'Bag' ? '#2e3515' : '#9f9f9f',
                      fontWeight: screen === 'Bag' ? 'bold' : '500',
                    },
                  ]}>
                  Bag
                </Text>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: screen === 'Bag' ? '#DD8560' : '#fff',
                    transform: [{rotate: '45deg'}],
                    marginTop: verticalScale(4),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ToggleScreen />
        </View>
        <View style={[styles.brand]}>
          <View style={[styles.devider1]}>
            <Image
              style={styles.imgdevider}
              source={require('../../assets/image/Devider.png')}
            />
          </View>
          <View style={[styles.globalbrand]}>
            <View style={[styles.tier1]}>
              <Image
                style={styles.imglogoprada}
                source={require('../../assets/image/Prada.png')}
              />
              <Image
                style={styles.imglogocartier}
                source={require('../../assets/image/Catier.png')}
              />
            </View>
            <View style={[styles.tier1]}>
              <Image
                style={styles.imglogoburberry}
                source={require('../../assets/image/Burberry.png')}
              />
              <Image
                style={styles.imglogogucci}
                source={require('../../assets/image/Gucci.png')}
              />
            </View>
            <View style={[styles.tier1]}>
              <Image
                style={styles.imglogoboss}
                source={require('../../assets/image/Boss.png')}
              />
              <Image
                style={styles.imglogotiffany}
                source={require('../../assets/image/Tiffany&Co.png')}
              />
            </View>
          </View>
          <View style={[styles.devider]}>
            <Image
              style={styles.imgdevider}
              source={require('../../assets/image/Devider.png')}
            />
          </View>
        </View>
        <View style={[styles.collections]}>
          <View style={[styles.titleCollections]}>
            <Text style={[styles.txtCollections]}>collections</Text>
          </View>
          <ImageBackground
            style={[styles.imgCollectionOctober]}
            source={require('../../assets/image/image12.png')}>
            <View style={[styles.monthCollections]}>
              <Text style={[styles.txtmonthCollections]}>10</Text>
            </View>
            <View style={[styles.octoberCollections]}>
              <Text style={[styles.txtoctoberCollections]}>October</Text>
              <Text style={[styles.txtCollection]}>Collection</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            style={[styles.imgCollectionAutumn]}
            source={require('../../assets/image/image9.png')}>
            <View style={[styles.autumnCollections]}>
              <Text style={[styles.txtautumnCollections]}>Autumn</Text>
              <Text style={[styles.txtCollection1]}>Collection</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.video]}>
          <ImageBackground
            style={[styles.imgVideo]}
            source={require('../../assets/image/imagevideo.png')}>
            <TouchableOpacity style={[styles.play]}>
              <View style={[styles.polygon]} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.containerProduct}>
          <View style={styles.title}>
            <Text style={styles.titleText}>JUST FOR YOU</Text>
          </View>
          <Image
            source={require('../../assets/icon/8.png')}
            style={styles.footerBoder}
          />
          <FlatList
            horizontal
            data={MoreProducts}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: ListRenderItemInfo<ProductList>) => {
              return (
                <View style={styles.groupProduct}>
                  <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('Detail')}>
                    <Image
                      source={{uri: item?.imgUrl}}
                      style={styles.productImage}
                      resizeMode="cover"
                    />
                    <View style={styles.productInfor}>
                      <Text style={styles.name}>{item.name}</Text>
                    </View>
                    <View style={styles.priceV}>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={item => item.id?.toString()}
          />
        </View>
        <Trending />
        <Openfashion />
        <FollowUs />
        <Footer />
      </ScrollView>
    </View>
  );
};
