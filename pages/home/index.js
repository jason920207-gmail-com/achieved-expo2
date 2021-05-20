import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from './homeScreen';
import { DetailScreen } from '../index';
import { EditTaskPage, AddTaskPage } from '../task/index';

const Stack = createStackNavigator();

export function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{ title: 'Achieved',headerShown:false }}
        component={HomePage}
      />
      <Stack.Screen
        name="AddTaskScreen"
        options={{ title: 'Add Task' }}
        component={AddTaskPage}
      />
      <Stack.Screen
        name="EditTaskScreen"
        options={{ title: 'Edit Task' }}
        component={EditTaskPage}
      />
    </Stack.Navigator>
  );
}
