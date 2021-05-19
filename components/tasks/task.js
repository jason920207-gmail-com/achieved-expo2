import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { TextInput, ToggleButton, FAB, HelperText } from 'react-native-paper';

const color = {
  0: '#F6416C',
  1: '#40BAD5',
  2: '#00B8A9',
  3: '#A6B1E1',
  4: '#FFDE7D',
};

function TaskComponent({
  text,
  type,
  onChangeText,
  onChangeType,
  onClickAdd,
  error,
}) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TextInput
        label="Add Task"
        value={text}
        onChangeText={(text) => onChangeText(text)}
        style={[styles.textInput, { backgroundColor: color[type] }]}
        theme={{ colors: { text: 'white' } }}
        autoFocus
      />
      {error && <HelperText type="error">Name can not be empty!</HelperText>}

      <View style={{ marginTop: 30 }}>
        <ToggleButton.Row
          onValueChange={(value) => onChangeType(value)}
          value={type}
          style={styles.toggleBtn}>
          <ToggleButton value="0" style={[styles.red]} />
          <ToggleButton value="1" style={[styles.blue]} />
          <ToggleButton value="2" style={[styles.green]} />
          <ToggleButton value="3" style={[styles.purple]} />
          <ToggleButton value="4" style={[styles.yellow]} />
        </ToggleButton.Row>
      </View>
      <View style={styles.bottom}>
        <FAB
          style={styles.fab}
          meduim
          icon="plus"
          onPress={() => onClickAdd()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },
  toggleBtn: {
    margin: 10,
    display: 'flex',
    justifyContent: 'space-around',
  },
  red: {
    backgroundColor: '#F6416C',
  },
  blue: {
    backgroundColor: '#40BAD5',
  },
  green: {
    backgroundColor: '#00B8A9',
  },
  purple: {
    backgroundColor: '#A6B1E1',
  },
  yellow: {
    backgroundColor: '#FFDE7D',
  },
  bottom: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
  },
  fab: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export { TaskComponent };
