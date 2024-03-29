import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import RestaurantScreen from '../screens/restaurant';
import { RootStackParamList } from '../typings';
import CartScreen from '../screens/cart';
import OrderScreen from '../screens/order';
import DeliveryScreen from '../screens/delivery';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        <Stack.Screen
          name='Cart'
          component={CartScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name='Order'
          component={OrderScreen}
          options={{ presentation: 'fullScreenModal' }}
        />
        <Stack.Screen
          name='Delivery'
          component={DeliveryScreen}
          options={{ presentation: 'fullScreenModal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
