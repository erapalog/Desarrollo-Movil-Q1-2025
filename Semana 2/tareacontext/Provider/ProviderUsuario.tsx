import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ContextUsuario } from '../Contex/ContextUsuario';

export default function ProviderUsuario({ children }) {
    const [listaUsuario, setListaUsuario] = useState([{n}]);

  return (
    <View>
      <ContextUsuario.Provider value={{ listaUsuario, setListaUsuario }}>
        {children}
      </ContextUsuario>
    </View>
  )
}