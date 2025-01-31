import { View, Text } from 'react-native'
import React from 'react'
import { useSaludoContext } from '../Provider/Provider'

export default function MostrarNombreContextCom() {
 const {nombre} =useSaludoContext();
 
  return (
    <View>
      <Text>El nombre en el contexto es: {nombre}</Text>
    </View>
  )
}