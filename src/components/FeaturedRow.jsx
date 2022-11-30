import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestuarantCard from './RestuarantCard';

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className='pt-4'>
        {/* Restuarant cards */}
        <RestuarantCard
          id={123}
          imgUrl='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          title='yo sushi'
          rating={4.5}
          genre='Japenese'
          address='123 apple'
          short_description='testing'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestuarantCard
          id={123}
          imgUrl='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          title='yo sushi'
          rating={4.5}
          genre='Japenese'
          address='123 apple'
          short_description='testing'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestuarantCard
          id={123}
          imgUrl='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          title='yo sushi'
          rating={4.5}
          genre='Japenese'
          address='123 apple'
          short_description='testing'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestuarantCard
          id={123}
          imgUrl='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          title='yo sushi'
          rating={4.5}
          genre='Japenese'
          address='123 apple'
          short_description='testing'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
