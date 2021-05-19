import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScoreScreen } from './scoreScreen';
import { DetailScreen } from '../index';

const Stack = createStackNavigator();

export function Score() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{ title: 'Achieved' }}
        component={ScoreScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        options={{ title: 'Achieved' }}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}
