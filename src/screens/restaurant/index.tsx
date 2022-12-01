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

const RestaurantScreen = () => {
  return (
    <ScrollView className='pt-5 bg-white'>
      <Text>Restaurant screen</Text>
    </ScrollView>
  );
};

export default RestaurantScreen;
