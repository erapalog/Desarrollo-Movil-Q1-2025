import { View, Text, Alert } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextTarea } from '../Context/ContextTarea'
import { Tarea } from '../Modelos/Tarea'
import { useNavigation } from '@react-navigation/native'


interface ViewRect{
    children: ReactNode
}
export default function TareaProvider({children}:ViewRect) {

  const [tarea,setTarea] = useState<Tarea[]> ([]);

 function agregarTarea(text:string){

    if(!text.trim()){
      Alert.alert('Error','El campo no puede quedar vacio')
      return
    }

    try {

      //request
      const nuevaTarea= {descripcion:text}

      const response = fetch('http://192.168.0.5:5000/tarea',{
        method:'POST',
        headers:{
           'Content-Type':'application/json'
        },
        body:JSON.stringify(nuevaTarea)
      })

      if(!response){
        Alert.alert('Ocurrio un error')
        return
      }

      Alert.alert('Agregado exitosamente')

      
    } catch (error) {
      
    }
 }

   const getTarea = async () =>{
 
     try {
       
       const response = await fetch('http://192.168.0.5:5000/tarea',{
         method:'GET',
         headers:{
           'Content-Type':'application/json'
         }
        })
 
        const respuestaTarea= await response.json()
        
        setTarea(respuestaTarea)
 
     } catch (error) {
       Alert.alert('Error','Ocurrio un error ' + error)
     }
    
 
   }
  
  return (
   <ContextTarea.Provider value={{tarea,agregarTarea,setTarea,getTarea}}>
    {children}
   </ContextTarea.Provider>
  )
}

export const useContextTarea =()=>{
    return useContext(ContextTarea)
}