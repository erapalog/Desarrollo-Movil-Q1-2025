import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Paginas/Home'
import AgregarTarea from '../Paginas/AgregarTarea'

export default function Navegacion() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}></Tab.Screen>
            <Tab.Screen name='Agregar Tarea' component={AgregarTarea}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}