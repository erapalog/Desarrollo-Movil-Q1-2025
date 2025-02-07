import { NavigationContainer } from '@react-navigation/native';
import Navegacion from './Componentes/Navegacion';
import NavegacionTab from './Componentes/NavegacionTab';

export default function App() {
  /*return (
    
    <NavigationContainer>

        <Navegacion></Navegacion>

    </NavigationContainer>
  );*/

  return (
    
    <NavigationContainer>
      <NavegacionTab></NavegacionTab>

    </NavigationContainer>
  );
}


