import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SaludoComponent from './Componentes/Props/SaludoComponent';
import SaludoComponentPropI from './Componentes/Props/SaludoComponentPropI';
import { Persona } from './Modelos/Persona';
import ContadorComponent from './Componentes/Contador/ContadorComponent';

export default function App() {

  let nombrePersona:string='Ana';
  let apeliidoPersona:string='Perez';
  let edadPersona:number=35;

  let persona:Persona={
    nombrePersona:'Juan',
    apellidoPersona:'Garcia',
    edadPersona:56
  }
  
  return (
    <View style={styles.container}>
      <Text>Aplicacion utilizada para hooks</Text>

      {/*<SaludoComponent nombre={nombrePersona} 
                        apellido={apeliidoPersona} 
                        edad={edadPersona}></SaludoComponent>
        <SaludoComponentPropI nombrePersona={nombrePersona} apellidoPersona={apeliidoPersona} edadPersona={edadPersona}></SaludoComponentPropI>
        <SaludoComponentPropI  nombrePersona={persona.nombrePersona} apellidoPersona={persona.apellidoPersona} edadPersona={persona.edadPersona} ></SaludoComponentPropI>
      */
      }

<ContadorComponent></ContadorComponent>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
