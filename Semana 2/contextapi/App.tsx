import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SaludoComponents from './Componentes/SaludoComponents';
import Provider from './Provider/Provider';
import { SaludoContext } from './Context/SaludoContext';
import SaludoConsumer from './Consumer/SaludoConsumer';
import MostrarNombreContextCom from './Consumer/MostrarNombreContextCom';

export default function App() {
  return (
    <View style={styles.container}>
      
     {/* <SaludoComponents></SaludoComponents>*/}

     <Provider>
      <SaludoConsumer></SaludoConsumer>
      
     <MostrarNombreContextCom></MostrarNombreContextCom>
     </Provider>

   



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
