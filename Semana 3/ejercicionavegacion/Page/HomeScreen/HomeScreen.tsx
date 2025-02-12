import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useContextTarea } from '../../Provider/TareaProvider';

const HomeScreen = () => {
  const { tarea } = useContextTarea();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
      {tarea.length === 0 ? (
        <Text style={styles.emptyText}>No hay tareas aún.</Text>
      ) : (
        <FlatList
          data={tarea}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text style={styles.task}>{item.text}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
});

export default HomeScreen;
