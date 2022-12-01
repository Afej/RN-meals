import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import Currency from 'react-currency-formatter';
import { IDish } from '../typings';
import { primaryColor } from '../utilities/constants';
import { urlFor } from '../sanity';

type Props = {
  dish: IDish;
};

const DishRow = ({ dish }: Props) => {
  const { name, short_description, price, image } = dish;

  return (
    <TouchableOpacity className='flex-row justify-between p-3 my-2 bg-white'>
      <View className='flex-1 space-y-1'>
        <Text className='text-lg '>{name}</Text>
        <Text className='text-gray-500'>{short_description}</Text>
        <Text className='text-gray-500'>
          <Currency quantity={price} currency='NGN' />
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className='w-20 h-20 p-4 bg-gray-300 rounded'
        />
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
