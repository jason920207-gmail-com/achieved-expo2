import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { TextInput, ToggleButton, FAB } from 'react-native-paper';
import { TaskComponent } from '../../components/tasks/task';
import { editAchievement } from '../../redux/actions/achieved';

class EditTaskScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      color: '',
      id: '',
      error: false,
    };
  }

  componentDidMount() {
    const { route, achievements } = this.props;
    const id = route.params.id;
    const task = achievements.filter((achievement) => achievement._id === id);
    this.setState({
      name: task[0].name,
      color: task[0].color,
      id: id,
    });
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

  onClickEdit = () => {
    const { name, color, id } = this.state;
    const { achievements } = this.props;
    if (!name) {
      this.setState({ error: true });
      return;
    }
    this.props.dispatch(
      editAchievement(name, color, id, this.props.navigation, this.props.route)
    );
  };

  render() {
    const { name, color, error } = this.state;
    return (
      <TaskComponent
        onChangeText={this.onChangeText}
        onChangeType={this.onChangeType}
        onClickAdd={this.onClickEdit}
        text={name}
        type={color}
        error={error}
      />
    );
  }
}

const EditTaskPage = connect((state) => {
  return {
    achievements: state.achieved.achievements,
  };
})(EditTaskScreen);

const styles = StyleSheet.create({});

export { EditTaskPage };
