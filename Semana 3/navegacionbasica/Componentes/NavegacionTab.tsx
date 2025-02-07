import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../pages/Home/Home'
import Informacion from '../pages/informacion/Informacion'
import { Icon } from 'react-native-vector-icons/Icon'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NavegacionTab() {

  const tab = createBottomTabNavigator()

  return (
    <tab.Navigator>
        <tab.Screen name='Home' component={Home} ></tab.Screen>
        <tab.Screen name='Informacion' component={Informacion}></tab.Screen>
    </tab.Navigator>
  )
}
