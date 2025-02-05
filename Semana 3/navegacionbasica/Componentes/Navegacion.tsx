import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home/Home'
import Informacion from '../pages/informacion/Informacion'
import Detalle from '../pages/Detalle/Detalle'

export default function Navegacion() {

  const Stack= createNativeStackNavigator()
  return (
    
      <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}></Stack.Screen>
            <Stack.Screen name='Informacion' component={Informacion}></Stack.Screen>
            <Stack.Screen name='Detalle' component={Detalle}></Stack.Screen>
    
    </Stack.Navigator>
  )
}