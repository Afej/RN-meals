import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter';
import { useAppSelector, useNavigator } from '../hooks';
import { selectCartItems, selectCartTotalPrice } from '../store/cart/cartSlice';
import { primaryColor } from '../utilities/constants';

const CartIcon = () => {
  const { navigation } = useNavigator();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  const openCartScreen = () => {
    navigation.navigate('Cart');
  };

  if (!items.length) return null;

  return (
    <View className='absolute z-50 w-full bottom-5 '>
      <TouchableOpacity
        onPress={openCartScreen}
        className={`mx-5 bg-[${primaryColor}] p-4 rounded-lg flex-row items-center space-x-1`}>
        <Text className='px-2 py-1 text-lg font-extrabold text-white bg-gray-500'>
          {items.length}
        </Text>
        <Text className='flex-1 text-lg font-extrabold text-center text-white'>
          View Cart
        </Text>
        <Text className='text-lg font-extrabold text-white'>
          <Currency quantity={totalPrice} currency='NGN' />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
