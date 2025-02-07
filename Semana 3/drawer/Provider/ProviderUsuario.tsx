import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Usuario } from '../Modelos/Usuario'
import { ContextUsuario } from '../Context/ContextUsuairo'

interface NodoReact {
    children: ReactNode
}

export default function ProviderUsuario(props: NodoReact) {

    const [nombre, setNombre] = useState<string>('')
    const [apellido, setApellido] = useState<string>('')
    const [correo, setCorreo] = useState<string>('')
    const [telefono, setTelefono] = useState<string>('')

    const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);

    const agregarUsuario = () => {

        let usuario: Usuario = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono
        }

        setListaUsuario([...listaUsuario, usuario])

        setNombre('')
        setApellido('')
        setCorreo('')
        setTelefono('')

        console.log(listaUsuario)

    }

    return (

            <ContextUsuario.Provider value={{
                nombre,
                apellido,
                correo,
                telefono,
                setNombre,
                setApellido,
                setCorreo,
                setTelefono,
                listaUsuario,
                agregarUsuario

            }}>

            {props.children}
            </ContextUsuario.Provider>
    )
}

export const useContextUsuario = () => {
    return useContext(ContextUsuario);
}