import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import {
  QuestionMarkCircleIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';
import { useEffect, useState } from 'react';
import sanityClient, { urlFor } from '../../sanity';
import React from 'react';
import { RootStackParamList } from '../../typings';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { primaryColor } from '../../utilities/constants';
import DishRow from '../../components/DishRow';

type RestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Restaurant'
>;

const RestaurantScreen = ({ route, navigation }: RestaurantScreenProps) => {
  const { restaurant } = route.params;

  return (
    <ScrollView>
      {/* hero section */}
      <View className='relative'>
        <Image
          source={{
            uri: urlFor(restaurant.image).url(),
          }}
          className='w-full h-56 p-4 bg-gray-300'
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className='absolute p-2 bg-gray-200 rounded-full top-14 left-5'>
          <ArrowLeftIcon size={20} color={primaryColor} />
        </TouchableOpacity>
      </View>

      {/* Restaurant info */}
      <View className='bg-white'>
        <View className='p-4'>
          <Text className='mb-1 text-3xl font-bold'>{restaurant.name}</Text>

          <View className='flex-row items-center space-x-2'>
            <StarIcon color='green' opacity={0.5} size={20} />
            <Text className='text-xs text-gray-500'>
              <Text className='text-green-500'>{restaurant.rating}</Text> •{' '}
              {restaurant.type?.name}
            </Text>
            <MapPinIcon color='gray' opacity={0.5} size={20} />
            <Text className='text-xs text-gray-500'>
              Nearby • {restaurant.address}
            </Text>
          </View>

          <Text className='mt-2 text-sm font-medium text-gray-500'>
            {restaurant.short_description}
          </Text>
        </View>

        <TouchableOpacity className='flex-row items-center p-4 space-x-4 border-t border-gray-300'>
          <QuestionMarkCircleIcon size={20} opacity={0.6} color='gray' />
          <Text className='flex-1 text-base font-bold'>
            Have a food allergy?
          </Text>
          <ChevronRightIcon color={primaryColor} size={20} />
        </TouchableOpacity>
      </View>

      {/* Menu */}

      <View className='p-4'>
        <Text className='pt-3 mb-1 text-xl font-bold'>Menu</Text>

        {/* dishes */}
        {restaurant.dishes.map((dish) => (
          <DishRow key={dish._id} dish={dish} />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
