import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Informacion() {

  const navigation = useNavigation()
  return (
    <View>
      <Text>Pagina de informacion de la aplicacion</Text>

      <Button title='ir a Inicio'
        onPress={() => navigation.navigate('Home')}
      ></Button>
    </View>
  )
}