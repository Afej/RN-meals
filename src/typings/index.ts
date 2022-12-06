export type RootStackParamList = {
  Home: undefined;
  Restaurant: { restaurant: IRestaurant };
  Cart: undefined;
  Order: undefined;
  Delivery: undefined;
};

export type IRestaurant = {
  _id: string;
  name: string;
  short_description: string;
  image: object;
  address: string;
  lat: number;
  long: number;
  rating: number;
  dishes: IDish[];
  type: ICategory;
  _createdAt: string;
  _updatedAt: string;
};

export type IDish = {
  _id: string;
  name: string;
  price: number;
  image: object;
  short_description: string;
};

export type ICategory = {
  _id: string;
  name: string;
  image: object;
};

export type IFeaturedCategory = {
  _id: string;
  name: string;
  short_description: string;
  restaurants: IRestaurant[];
};
