import { View, Text } from 'react-native'
import React from 'react'

export default function MostrarNombreComponents({nombre}) {
  return (
    <View>
      <Text>El nombre recibido desde Componente padre es: {nombre}</Text>
    </View>
  )
}