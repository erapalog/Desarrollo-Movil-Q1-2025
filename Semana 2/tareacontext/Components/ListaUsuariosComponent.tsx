import { View, Text } from 'react-native'
import React from 'react'
import { useContext, useEffect } from "react";
import { ContextUsuario } from "../Contex/ContextUsuario";

export default function ListaUsuariosComponent() {
    const context = useContext(ContextUsuario);
    if (!context) {
      throw new Error("ListaUsuarios debe estar dentro de un ContextUsuarioProvider");
    }

    const { listaUsuario, setListaUsuario } = context;

    useEffect(() => {
        setTimeout(() => {
          setListaUsuario([
            { id: 1, name: "Juan" },
            { id: 2, name: "María" },
            { id: 3, name: "Carlos" },
          ]);
        }, 3000);
      }, [setListaUsuario]);

  return (
    <View>
      <Text>
      <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {listaUsuario.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
      </Text>
    </View>
  )
}