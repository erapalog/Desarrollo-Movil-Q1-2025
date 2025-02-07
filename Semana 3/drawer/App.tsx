import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import NavegacionDrawer from './Components/NavegacionDrawer';
import ProviderUsuario from './Provider/ProviderUsuario';

export default function App() {
  return (
    <ProviderUsuario>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <NavegacionDrawer></NavegacionDrawer>
        </View>

      </NavigationContainer>
    </ProviderUsuario>

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
