import {ImageSourcePropType} from 'react-native';

export interface ProductList {
  id: number;
  name: string;
  imgUrl: ImageSourcePropType;
  price: string;
}
