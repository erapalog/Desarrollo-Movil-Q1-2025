import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TareaProvider from './Provider/TareaProvider';
import Navegacion from './Components/Navegacion';

export default function App() {
  return (
    <TareaProvider>
          <Navegacion>
          
          </Navegacion>
    </TareaProvider>
     
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
