import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';
import { IRestaurant } from '../typings';

// type FeaturedRowProps = {}

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const query = `
  *[_type == "featured" && _id == $id] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
    },
  }[0]
  `;

  useEffect(() => {
    sanityClient
      .fetch(query, { id })
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);

  return (
    <View>
      <View className='flex-row items-center justify-between px-4 mt-5'>
        <Text className='text-lg font-bold'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>

      <Text className='px-4 text-xs text-gray-500'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className='pt-4'>
        {/* Restaurant cards */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
