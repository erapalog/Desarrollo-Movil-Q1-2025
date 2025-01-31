import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import MostrarNombreComponents from './MostrarNombreComponents'

export default function SaludoComponents() {

   const [nombre, setNombre]=useState('')
   const [input, setInput]=useState('') 

    const handlerInput=()=>{
        setNombre(input)
        
    }


  return (
    <View>
      <Text>Ingrsar Nombre</Text>
      <TextInput
        placeholder='Escribir Nombre'
        value={input}
        onChangeText={setInput}
      >

      </TextInput>

      <Text>El nombre ingresado Es {nombre}</Text>

      <Button title='Cambiar Nombre' onPress={handlerInput}></Button>

      <MostrarNombreComponents nombre={nombre}></MostrarNombreComponents>
    </View>
  )
}