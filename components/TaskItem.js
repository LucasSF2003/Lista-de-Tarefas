import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.container}>
      <View style={[styles.checkbox, task.completed && styles.checked]}>
        {task.completed && <MaterialCommunityIcons name="check" size={18} color="#fff" />}
      </View>
      <Text style={[styles.text, task.completed && styles.completed]}>
        {task.text}
      </Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <MaterialCommunityIcons name="trash-can" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  checked: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default TaskItem;
