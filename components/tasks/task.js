import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { TextInput, ToggleButton, FAB, HelperText } from "react-native-paper";

const color = {
  0: "rgba(162,213,242,0.5)",
  1: "rgba(147,181,225,0.5)",
  2: "rgba(64,168,196,0.5)",
  3: "rgba(7,104,159,0.5)",
  4: "rgba(18,1,54,0.5)",
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
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          label="Add Task"
          value={text}
          onChangeText={(text) => onChangeText(text)}
          style={{ backgroundColor: color[type] }}
          theme={{ colors: { text: "black" } }}
          autoFocus
        />
      </View>
      {error && <HelperText type="error">Name can not be empty!</HelperText>}

      <View style={styles.toggleBtnGroup}>
        <ToggleButton.Row
          onValueChange={(value) => onChangeType(value)}
          value={type}
          style={styles.toggleBtn}
        >
          <ToggleButton value="0" style={[styles.red]} />
          <ToggleButton value="1" style={[styles.blue]} />
          <ToggleButton value="2" style={[styles.green]} />
          <ToggleButton value="3" style={[styles.purple]} />
          <ToggleButton value="4" style={[styles.yellow]} />
        </ToggleButton.Row>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          onPress={() => onClickAdd()}
          style={styles.submitButton}
          activeOpacity={0.5}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  textInput: {
    paddingHorizontal: 20,
  },
  toggleBtn: {
    marginHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toggleBtnGroup: {
    marginTop: 30,
  },
  red: {
    backgroundColor: "rgba(162,213,242,0.5)",
  },
  blue: {
    backgroundColor: "rgba(147,181,225,0.5)",
  },
  green: {
    backgroundColor: "rgba(64,168,196,0.5)",
  },
  purple: {
    backgroundColor: "rgba(7,104,159,0.5)",
  },
  yellow: {
    backgroundColor: "rgba(18,1,54,0.5)",
  },
  submitButton: {
    height: 40,
    width: 150,
    marginTop: 40,
    backgroundColor: "#FECF63",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FECF63",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  buttonArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
});

export { TaskComponent };
