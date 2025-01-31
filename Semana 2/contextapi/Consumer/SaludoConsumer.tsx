import { View, Text, TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import { useSaludoContext } from '../Provider/Provider'

export default function SaludoConsumer() {

    const {nombre,ingresarNombre} =useSaludoContext();

    const [input, setInput]=useState('') 

    const handlerInput=()=>{
        ingresarNombre(input)
        
    }

  return (
    <View>

        <TextInput placeholder='Ingrsar Nombre'
        value={input}
        onChangeText={setInput}
        >

        </TextInput>
        <Text>Nombre Ingresado es {nombre}</Text>

        <Button title='Cambiar Nombre' onPress={handlerInput}></Button>
    </View>
  )
}