import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContextTarea } from '../../Provider/TareaProvider';

const AddTodoScreen = () => {
  const [text, setText] = useState('');
  const { agregarTarea } = useContextTarea();
  const navigation = useNavigation();

  const handleAddTodo = () => {
    if (text.trim()) {
      agregarTarea(text);
      setText('');
      navigation.navigate('Home' as never);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Agregar Tarea" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AddTodoScreen;
