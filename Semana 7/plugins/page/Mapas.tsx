import { View, Text, Alert, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps'


export default function Mapas() {

   const [location, setLocation]= useState<Location.LocationObject | null>(null)
   const [meessage, setMessage]=useState('')

   useEffect(()=>{
      (
        async () =>{
          let {status} = await Location.requestForegroundPermissionsAsync();

          if(status!=='granted'){
            Alert.alert("Debe asignar permisos para la ubicacion");
            setMessage("Debe asignar permisos para la ubicacion")
            return
          }

          let location = await Location.getCurrentPositionAsync();
          console.log(location)
          setLocation(location)
        }
      )()
   },[])


  return (
    <View style={style.container}>
        
        {
          location ? (
            <MapView  style={style.maps}
        
            initialRegion={{
               latitude:location.coords.latitude,
               longitude: location.coords.longitude,
               latitudeDelta:0.0922,
               longitudeDelta: 0.04122
            }}
           >

            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude:location.coords.longitude
              }}
              title='Mi Ubicacion'
              description='Estoy aqui'
            >

            </Marker>
   
           </MapView>
          )
          :
          <Text>Cargando</Text>
        }
       
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  maps:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

})