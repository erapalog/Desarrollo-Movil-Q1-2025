import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextTarea } from '../Context/ContextTarea'
import { Tarea } from '../Modelos/Tarea'


interface ViewRect{
    children: ReactNode
}
export default function TareaProvider({children}:ViewRect) {

  const [tarea,setTarea] = useState<Tarea[]> ([]);

 function agregarTarea(text:string){

 }
  
  return (
   <ContextTarea.Provider value={{tarea,agregarTarea,setTarea}}>
    {children}
   </ContextTarea.Provider>
  )
}

export const useContextTarea =()=>{
    return useContext(ContextTarea)
}