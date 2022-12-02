import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import Currency from 'react-currency-formatter';
import { IDish } from '../typings';
import { primaryColor } from '../utilities/constants';
import { urlFor } from '../sanity';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from '../store/basket/basketSlice';

type Props = {
  dish: IDish;
};

const DishRow = ({ dish }: Props) => {
  const { name, short_description, price, image, _id } = dish;
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => selectBasketItemsById(state, _id));

  const [pressed, setPressed] = useState(false);

  const togglePressed = () => setPressed(!pressed);

  const addItemsToBasket = () => {
    dispatch(addToBasket(dish));
  };
  const removeItemsFromBasket = () => {
    if (!items.length) return;
    dispatch(removeFromBasket(_id));
  };

  return (
    <>
      <TouchableOpacity
        onPress={togglePressed}
        className='flex-row justify-between p-3 mt-2 bg-white rounded-lg'>
        <View className='flex-1 space-y-1'>
          <Text className='text-lg '>{name}</Text>
          <Text className='text-gray-600'>{short_description}</Text>
          <Text className='text-gray-600'>
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

      {pressed && (
        <View className='p-3 bg-white'>
          <View className='flex-row items-center space-x-2'>
            <TouchableOpacity
              onPress={removeItemsFromBasket}
              disabled={!items.length}>
              <MinusCircleIcon
                color={items.length ? primaryColor : 'gray'}
                size={35}
              />
            </TouchableOpacity>
            <Text className='text-lg'>{items.length}</Text>
            <TouchableOpacity onPress={addItemsToBasket}>
              <PlusCircleIcon color={primaryColor} size={35} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
