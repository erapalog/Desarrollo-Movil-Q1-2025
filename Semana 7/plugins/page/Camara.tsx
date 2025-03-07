import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function Camara() {

  const [selectImage, setSelectImage]= useState<string | null>(null);


  const seleccionarFotografia = async ()=>{

    const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        quality: 1
    })

    if(!resultado.canceled){
        console.log(resultado.assets[0].uri)
        setSelectImage(resultado.assets[0].uri)
    }
  }

  const tomarFotografia = async ()=>{
    
    const resultado= await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        quality: 0.5
    });

    if(!resultado.canceled){
        console.log(resultado.assets[0].uri)
        setSelectImage(resultado.assets[0].uri)
    }

  }

  return (
    <View>
      <Text>Camara</Text>

      <Text>Fotrografia Tomada</Text>

        {
            selectImage && (
                <Image source={{uri:selectImage}} style={style.imagen}></Image>
            )
        }
      

      <Button title='Abrir camara' onPress={tomarFotografia}></Button>
      <Button title='Selecciona Imagen ' onPress={seleccionarFotografia}></Button>
    </View>
  )
}

const style = StyleSheet.create({
    imagen:{
        width:200,
        height:200,
        borderRadius:10
    }
})