import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Camara from '../page/Camara'
import Acelerometro from '../page/Acelerometro'
import Mapas from '../page/Mapas'

export default function Navegacion() {

  const tabNavigation= createBottomTabNavigator()

  return (
    <NavigationContainer>
        <tabNavigation.Navigator>
            <tabNavigation.Screen component={Camara} name='Camara'></tabNavigation.Screen>
            <tabNavigation.Screen component={Acelerometro} name='Acelerometro'></tabNavigation.Screen>
            <tabNavigation.Screen component={Mapas} name='Mapas'></tabNavigation.Screen>
        </tabNavigation.Navigator>
    </NavigationContainer>
  )
}