
import { View, Text } from 'react-native'
import React from 'react'

export default function SaludoComponent({nombre, apellido, edad}) {
  return (
    <View>
      <Text>Saludando desde el componente hijo</Text>
      <Text>Bienvenido {nombre} {apellido} tu edad es : {edad}</Text>
    </View>
  )
}