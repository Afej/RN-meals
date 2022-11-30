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

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* header */}
      <View className='flex-row mx-4 items-center pb-3 space-x-2'>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-sm'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* search */}
      <View className='flex-row items-center space-x-2 py-3 mx-4'>
        <View className='flex-row items-center flex-1 bg-gray-200 p-3 rounded-sm'>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput
            placeholder='Restuarants and cuisines'
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
        <FeaturedRow
          id='1'
          title='Featured'
          description='lorem isdndmdm iifjfjfj'
        />
        <FeaturedRow
          id='12'
          title='Featured'
          description='lorem isdndmdm iifjfjfj'
        />
        <FeaturedRow
          id='123'
          title='Featured'
          description='lorem isdndmdm iifjfjfj'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
