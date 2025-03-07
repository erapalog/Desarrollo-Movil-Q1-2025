import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Accelerometer } from 'expo-sensors';

export default function Acelerometro() {

  const [data, setData] = useState({x:0, y:0,z:0})
  const [ballonPosition, setBalonPosition] = useState({x: 150, y:300,z:150});
  const [color, setColor]= useState('blue')


  //0.0000011
  //0.000
  const updateBallonPosition = ({x,y,z}:any) =>{
    setBalonPosition((prev)=>({
      x: Math.min(Math.max(prev.x + x *10,0),300),
      y: Math.min(Math.max(prev.y + y *10,0),600),
      z: Math.min(Math.max(prev.z + z *10,0),600)
    }))
  }

  useEffect(()=>{

    const suscription= Accelerometer.addListener((accelerometro)=>{

      console.log(accelerometro)
      setData(accelerometro);
      updateBallonPosition(accelerometro)

    });

    Accelerometer.setUpdateInterval(1500);

    return ()=> suscription.remove();

  },[]);


  const generarColorAleatorio =()=>{
    const colrRamdon= `rgb(${Math.floor(Math.random() *256)} ,
                      ${Math.floor(Math.random() *256)},
                      ${Math.floor(Math.random() *256)}
    )`;

    setColor(colrRamdon)
   // return colrRamdon;
  }

  useEffect(()=>{
    generarColorAleatorio()
  },[ballonPosition])

  return (
    <View style={style.container}>
      
      <View style={[
        style.ball,
        {
            left: ballonPosition.x,
            top: ballonPosition.y,
            right:ballonPosition.z,
            backgroundColor:color

        }

      ]}>

      </View>
    </View>
  )
}

const style= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      position:'relative'
    },
    ball:{
      position:'absolute',
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:'blue'
    },
    text:{
      position:'absolute',
      bottom:50,
      fontSize:12,
      fontWeight:'bold'
    }
})