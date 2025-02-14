import { View, Text, Alert, StyleSheet,FlatList, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useContextTarea } from '../Provider/TareaProvider'

export default function Home() {

  const {tarea,getTarea} = useContextTarea();




  useEffect(()=>{
      getTarea()
  },[])


  return (
    <View style={style.container}>

   {/* <FlatList
        data={tarea}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={
          ({item})=> 
            <Text>{item.descripcion}</Text>
        
        }
      />*/}

      {
        tarea.map((item)=>(
          <Text style={style.tarea}>{item.descripcion}</Text> 
        ))
      }


      <Button title='Refrescar tareas' onPress={getTarea}></Button>
    </View>
  )
}

const style =StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    alignItems:'center'
  },
  tarea:{
    fontSize:18,
    padding:10,
    borderBottomWidth:1,
    borderColor:'black',
    width:'100%'
  }
})