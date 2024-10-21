// components/TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.checkboxContainer}>
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          onPress={() => onToggle(task.id)}
          color="#28a745"
        />
        <Text style={[styles.taskText, task.completed && styles.completed]}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
    fontFamily: 'sans-serif', 
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskItem;
