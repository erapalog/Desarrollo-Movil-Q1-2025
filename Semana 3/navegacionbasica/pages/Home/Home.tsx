import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation();
  return (
    <View>
      <Text>Pagina de Inicio de aplicacion</Text>

      <Button title='Ir a pagina Informacion'
        onPress={() => navigation.navigate('Informacion')}
      >

      </Button>

      <Button title='ir a detalle'
      onPress={()=> navigation.navigate('Detalle',{nombre:'Juan', apellido:'Garcia'})}
      ></Button>


    </View>
  )
}