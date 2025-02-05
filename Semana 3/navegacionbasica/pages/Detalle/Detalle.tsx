import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function Detalle() {

  const route =useRoute();

  const {nombre,apellido} =route.params as {nombre:string, apellido:string}

  return (
    <View>
      <Text>El nombre recibido es: {nombre}</Text>
      <Text>El apellido recibido es: {apellido}</Text>
    </View>
  )
}