import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { primaryColor } from '../../utilities/constants'
import { useNavigator } from '../../hooks'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const OrderScreen = () => {
  const { navigation } = useNavigator()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
  }, [])

  return (
    <SafeAreaView
      className={`flex-1 items-center justify-center bg-[${primaryColor}]`}>
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='my-5 text-xl font-extrabold text-white'>
        Awaiting confirmation...
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate color='white' />
    </SafeAreaView>
  )
}

export default OrderScreen
