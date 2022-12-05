import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { deliveryFee, primaryColor } from '../../utilities/constants';
import Currency from 'react-currency-formatter';
import { useAppSelector, useNavigator, useAppDispatch } from '../../hooks';
import { selectRestaurant } from '../../store/restaurant/restaurantSlice';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotalPrice,
} from '../../store/cart/cartSlice';
import { IDish } from '../../typings';
import { urlFor } from '../../sanity';

const CartScreen = () => {
  const { navigation } = useNavigator();
  const dispatch = useAppDispatch();
  const restaurant = useAppSelector(selectRestaurant);
  const items = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotalPrice);
  const [groupedItemsInCart, setGroupedItemsInCart] = useState({});
  const [orderTotal, setOrderTotal] = useState<number>(0);

  const delivery = cartTotal ? deliveryFee : 0;

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInCart(groupedItems);
  }, [items]);

  useMemo(() => {
    if (cartTotal > 0) {
      setOrderTotal(cartTotal + deliveryFee);
    } else {
      setOrderTotal(0);
    }
  }, [cartTotal]);

  const removeCartItem = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  const cartItems = Object.entries(groupedItemsInCart).map(
    ([key, items]: [string, IDish[]]) => {
      return (
        <View
          className='flex-row items-center p-4 space-x-3 bg-white'
          key={key}>
          <View className='flex flex-row items-center flex-1 space-x-3'>
            <Text className='text-[#00CCBB] text-base'>{items.length} x</Text>
            <Image
              source={{
                uri: urlFor(items[0]?.image).url(),
              }}
              className='w-12 h-12 p-4 bg-gray-300 rounded-full'
            />
            <Text className='flex-1 text-sm'>{items[0]?.name}</Text>
          </View>
          <View className='flex flex-row items-center space-x-2'>
            <Text className='text-gray-600'>
              <Currency quantity={items[0]?.price} currency='NGN' />
            </Text>

            <TouchableOpacity onPress={() => removeCartItem(key)}>
              <Text className='text-xs text-[#00CCBB]'>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  );

  return (
    <>
      <SafeAreaView className='relative'>
        <View className='flex flex-row items-center p-4 bg-white'>
          <View className='items-center flex-1'>
            <Text className='text-2xl font-bold'>Cart</Text>
            <Text className='text-gray-500'>{restaurant.name}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}>
            <XCircleIcon size={45} color={primaryColor} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center p-4 my-5 space-x-3 bg-white'>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            }}
            className='p-4 bg-gray-300 rounded-full h-7 w-7'
          />
          <Text className='flex-1 text-base'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        {/* cart items */}
        <ScrollView className='my-3 divide-y divide-gray-200'>
          {cartItems}
        </ScrollView>
      </SafeAreaView>

      {/* subtotal */}
      <View className='absolute bottom-0 w-full p-5 bg-white'>
        <View className='flex-row items-center py-2 space-x-3 bg-white'>
          <Text className='flex-1 text-base text-gray-500'>Subtotal</Text>
          <Text className='text-gray-500'>
            <Currency quantity={cartTotal} currency='NGN' />
          </Text>
        </View>
        <View className='flex-row items-center py-2 space-x-3 bg-white'>
          <Text className='flex-1 text-base text-gray-500'>Delivery fee</Text>
          <Text className='text-gray-500'>
            <Currency quantity={delivery} currency='NGN' />
          </Text>
        </View>
        <View className='flex-row items-center py-2 space-x-3 bg-white'>
          <Text className='flex-1 text-base'>Order Total</Text>
          <Text className='font-extrabold'>
            <Currency quantity={orderTotal} currency='NGN' />
          </Text>
        </View>
        <TouchableOpacity
          className={`bg-[${primaryColor}] p-4 rounded-lg my-4`}>
          <Text className='text-xl font-bold text-center text-white'>
            Place order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartScreen;
