// screens/AddTaskScreen.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTaskScreen = ({ navigation, route }) => {
  const [taskText, setTaskText] = useState('');

  const saveTask = async () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: taskText,
        completed: false,
      };

      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        const tasks = storedTasks ? JSON.parse(storedTasks) : [];
        tasks.push(newTask);
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

        route.params.updateTaskList(tasks);
        navigation.goBack();
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, insira uma tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa..."
        value={taskText}
        onChangeText={setTaskText}
      />
      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={saveTask} color="#0000FF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#0000FF',
    borderRadius: 25,
    overflow: 'hidden', 
    marginTop: 10,
  },
});

export default AddTaskScreen;
