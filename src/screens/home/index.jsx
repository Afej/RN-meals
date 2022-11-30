import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { UserIcon, ChevronDownIcon } from 'react-native-heroicons/solid';
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';
import { useEffect, useState } from 'react';
import sanityClient from '../../sanity';

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const query = `
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
      }
    }
  `;

  useEffect(() => {
    sanityClient.fetch(query).then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className='pt-5 bg-white'>
      {/* header */}
      <View className='flex-row items-center pb-3 mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          }}
          className='p-4 bg-gray-300 rounded-full h-7 w-7'
        />

        <View className='flex-1'>
          <Text className='text-sm font-bold text-gray-400'>Deliver Now!</Text>
          <Text className='text-xl font-bold'>
            Current Location <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* search */}
      <View className='flex-row items-center py-3 mx-4 space-x-2'>
        <View className='flex-row items-center flex-1 p-3 bg-gray-200 rounded-sm'>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>

        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* categories */}
        <Categories />

        {/* featured */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
