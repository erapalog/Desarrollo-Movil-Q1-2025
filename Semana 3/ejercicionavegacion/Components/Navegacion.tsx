import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Page/HomeScreen/HomeScreen';
import AddTodoScreen from '../Page/AddTodoScreen/AddTodoScreen';

export default function Navegacion() {
    const Tab = createBottomTabNavigator();


  return (
   
    <NavigationContainer>
        <Tab.Navigator>       
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="AddTodo" component={AddTodoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}