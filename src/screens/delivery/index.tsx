import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { primaryColor } from '../../utilities/constants'
import { useAppSelector, useNavigator } from '../../hooks'
import { selectRestaurant } from '../../store/restaurant/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
  const { navigation } = useNavigator()
  const restaurant = useAppSelector(selectRestaurant)

  const goHome = () => {
    navigation.navigate('Home')
  }
  return (
    <View className={`flex-1 bg-[${primaryColor}]`}>
      <SafeAreaView className='z-50'>
        <View className='flex-row items-center justify-between p-5'>
          <TouchableOpacity onPress={goHome}>
            <XMarkIcon color='white' size={30} />
          </TouchableOpacity>

          <Text className='text-lg text-white'>Order Help</Text>
        </View>
        <View className='z-50 p-6 mx-5 my-2 bg-white rounded-md shadow-md'>
          <View className='flex-row justify-between'>
            <View className='mb-4'>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>
            {/* <Image
              source={{
                uri: require('../../../assets/urban-882.gif'),
              }}
              className='object-contain w-10 h-10 mix-blend-color-burn'
            /> */}
          </View>
          <Progress.Bar indeterminate color='#00CCBB' />
          <Text className='mt-4 font-medium text-gray-500'>
            Your order from {restaurant.name} is being processed.
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='z-0 flex-1 -mt-10'
        mapType='mutedStandard'>
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.name}
          description={restaurant.short_description}
          identifier='origin'
          pinColor={primaryColor}
        />
      </MapView>

      <SafeAreaView className='bg-white h-28'>
        <View className='flex-row items-center p-5 space-x-5'>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaXZlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            }}
            className='w-12 h-12 p-4 bg-gray-300 rounded-full'
          />
          <View className='flex-1'>
            <Text className='text-lg font-semibold'>Afej </Text>
            <Text className='text-gray-500'>Your Rider </Text>
          </View>

          <Text className='text-[#00CCBB] text-lg font-bold'>Call</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
