import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { TextInput, ToggleButton, FAB } from "react-native-paper";
import { TaskComponent } from "../../components/tasks/task";
import { addAchievement } from "../../redux/actions/achieved";

class AddTaskScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      color: "0",
      error: false,
    };
  }

  onChangeText = (name) => {
    this.setState({
      name,
    });
  };

  onChangeType = (color) => {
    this.setState({
      color,
    });
  };

  onClickAdd = () => {
    const { name, color } = this.state;
    if (!name) {
      this.setState({ error: true });
      return;
    }
    this.props.dispatch(
      addAchievement(name, color, this.props.navigation, this.props.route)
    );
  };

  render() {
    const { name, color, error } = this.state;
    return (
      <TaskComponent
        onChangeText={this.onChangeText}
        onChangeType={this.onChangeType}
        onClickAdd={this.onClickAdd}
        text={name}
        type={color}
        error={error}
      />
    );
  }
}

const AddTaskPage = connect((state) => {
  return {
    achievements: state.achieved.achievements,
  };
})(AddTaskScreen);

const styles = StyleSheet.create({});

export { AddTaskPage };
