import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Restaurant: { restaurant: IRestaurant };
};

export type IRestaurant = {
  _id: string;
  name: string;
  short_description: string;
  image: string;
  address: string;
  lat: number;
  long: number;
  rating: number;
  _createdAt: string;
  _updatedAt: string;
};

export type ICategory = {
  _id: string;
  name: string;
  image: string;
};

export type IFeaturedCategory = {
  _id: string;
  name: string;
  short_description: string;
  restaurants: IRestaurant[];
};
