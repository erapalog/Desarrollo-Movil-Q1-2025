import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useContextUsuario } from '../../Provider/ProviderUsuario';
import FlatlistUsuario from '../../Components/FlatlistUsuario';

export default function FormularioRegistro() {
    const { nombre, apellido, correo, telefono, setNombre, setApellido, setCorreo, setTelefono, agregarUsuario } = useContextUsuario();

    return (
        <View>
            <Text>Formulario para registrar usuario</Text>

            <TextInput placeholder='Nombre Usuario' value={nombre} onChangeText={setNombre} />
            <TextInput placeholder='Apellido Usuario' value={apellido} onChangeText={setApellido} />
            <TextInput placeholder='Correo Usuario' value={correo} onChangeText={setCorreo} />
            <TextInput placeholder='Teléfono Usuario' value={telefono} onChangeText={setTelefono} />

            <Button title='Agregar' onPress={agregarUsuario} />
            
            <FlatlistUsuario />
        </View>
    );
}
