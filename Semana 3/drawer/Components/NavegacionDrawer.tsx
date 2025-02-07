import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FormularioRegistro from '../Page/FormularioRegistro/FormularioRegistro'
import ListaRegistro from '../Page/ListaRegistro/ListaRegistro'

export default function NavegacionDrawer() {

  const Drawer = createDrawerNavigator()

  return (
    
    <Drawer.Navigator>
        <Drawer.Screen name='Registro' component={FormularioRegistro}></Drawer.Screen>
        <Drawer.Screen name='Lista' component={ListaRegistro}></Drawer.Screen>
    </Drawer.Navigator>
  )
}