import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { SaludoContext } from '../Context/SaludoContext'


//1. Definr el contexto base
//2. provider : darle una funcionalidad a lo que se define en el contexto
interface ViewReact{
    children: ReactNode
}
export default function Provider(props:ViewReact) {

  const [nombre,setNombre]=useState("")

  const ingresarNombre = (nombre:string)=>{
    setNombre(nombre)
  }

  return (
    <View>
      
      <SaludoContext.Provider value={{nombre, ingresarNombre}}>

        {props.children}

      </SaludoContext.Provider>
    </View>
  )
}

export const useSaludoContext =()=>{
    return useContext(SaludoContext)
}