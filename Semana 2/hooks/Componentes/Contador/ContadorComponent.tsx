import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'


//useEffect variable, campo de formulario, un componente
//5, 7
export default function ContadorComponent() {

  const [contador, setContador]=useState(0)


  function sumarContador(){
    setContador(contador+1)
  }

  function restarContadr(){
    if(contador==0) return
    setContador(contador-1)
  }

  useEffect(()=>{
        console.log('Componente contador ha sido cargado')
  },[]);

  useEffect(()=>{

    console.log("El valor de contador ha cambiado")
  },[contador])

  useEffect(()=>{
    setContador(10)
  },[])

  return (
    <View>
      <Text>El valor del contador {contador}</Text>

      <Button title='Sumar Contador' onPress={()=> sumarContador()}></Button>
      <Button title='Restar Contador' onPress={restarContadr}></Button>
    </View>
  )
}