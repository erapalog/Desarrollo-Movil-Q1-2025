import { View, Text, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useContextTarea } from '../Provider/TareaProvider'

export default function Home() {

  const {tarea,setTarea} = useContextTarea();

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

       Alert.alert('Mensaje','Informaicon recuperada')
    } catch (error) {
      Alert.alert('Error','Ocurrio un error ' + error)
    }
   

  }

  useEffect(()=>{
      getTarea()
  },[])


  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}