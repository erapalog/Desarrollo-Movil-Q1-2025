import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../../Modelos/Persona'

//export default function SaludoComponentPropI(props:Persona) {
export default function SaludoComponentPropI({nombrePersona,apellidoPersona,edadPersona}:Persona) {
  return (
    <View>
      <Text>Saludo Persona desde un componente con interfaz</Text>
       <Text>Bienvenido {nombrePersona} {apellidoPersona} tu edad es : {edadPersona}</Text>
    </View>
  )
}