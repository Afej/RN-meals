import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { IRestaurant } from '../typings';
import { useNavigator } from '../hooks';

type Props = {
  restaurant: IRestaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
  const { name, image, rating, address, type } = restaurant;
  const { navigation } = useNavigator();

  const openRestaurantScreen = () => {
    navigation.navigate('Restaurant', {
      restaurant,
    });
  };

  return (
    <TouchableOpacity
      className='mr-3 bg-white shadow'
      onPress={openRestaurantScreen}>
      <Image
        source={{ uri: urlFor(image).url() }}
        className='w-64 rounded h-36'
      />

      <View className='px-3 pb-4'>
        <Text className='pt-2 text-lg font-bold'>{name}</Text>
        <View className='flex-row items-center space-x-2'>
          <StarIcon color='green' opacity={0.5} size={20} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating}</Text> • {type?.name}
          </Text>
        </View>
        <View className='flex-row items-center space-x-2'>
          <MapPinIcon color='gray' opacity={0.5} size={20} />
          <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
