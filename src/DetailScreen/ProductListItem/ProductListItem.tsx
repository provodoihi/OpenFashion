import React from 'react';
import {View, Image, ViewProps, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

interface ListItemProps extends ViewProps {
  imageSource?: string;
  name?: string;
  attribute?: string;
  price?: string;
}

export const ListItem = (props: ListItemProps) => {
  const {name, attribute, price, imageSource, ...restProps} = props;
  return (
    <View style={styles.itemContainer} {...restProps}>
      <Image style={styles.itemImage} source={{uri: imageSource}} />
      <AntDesign style={styles.heart} size={16} name="hearto" color="#DD8560" />
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemAttribute}>{attribute}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
};
