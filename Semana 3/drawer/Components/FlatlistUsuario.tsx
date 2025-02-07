import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useContextUsuario } from '../Provider/ProviderUsuario';
import { Usuario } from '../Modelos/Usuario';

export default function FlatlistUsuario() {
    const { listaUsuario } = useContextUsuario();

    console.log("Lista actualizada:", listaUsuario); 

    return (

     
        <View>
            <Text style={styles.title}>Lista de Usuarios</Text>
            {listaUsuario.length === 0 ? (
                <Text style={styles.empty}>No hay usuarios registrados</Text>
            ) : (
              <FlatList
              data={listaUsuario}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                  <View style={styles.item}>
                      <Text style={styles.text}>Nombre: {item.nombre}</Text>
                      <Text style={styles.text}>Apellido: {item.apellido}</Text>
                      <Text style={styles.text}>Correo: {item.correo}</Text>
                      <Text style={styles.text}>Teléfono: {item.telefono}</Text>
                  </View>
              )}
          />
          
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    empty: { fontSize: 16, color: 'gray' },
    item: { padding: 10, marginVertical: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
    text: { fontSize: 14 },
});
