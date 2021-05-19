import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { PressBox } from '../../utils/index';
import { State } from 'react-native-gesture-handler';
import {
  FAB,
  List,
  Badge,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  getAchievement,
  plusOne,
  onDelete,
} from '../../redux/actions/achieved';
import GmailStyleSwipeableRow from '../../utils/swipeableBox';

const pushAction = StackActions.push('AddTaskScreen');

const color = {
  0: '#F6416C',
  1: '#40BAD5',
  2: '#00B8A9',
  3: '#A6B1E1',
  4: '#FFDE7D',
};

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAchievement());
  }

  onDoubleTap = (event, index) => {
    // if (event.nativeEvent.state === State.ACTIVE) {
    //   this.props.navigation.push('EditTaskScreen', {
    //     id: index,
    //     updateData: this.updateData,
    //   });
    // }
  };

  onEdit = (id) => {
    this.props.navigation.push('EditTaskScreen', {
      id: id,
      updateData: this.updateData,
    });
  };
  onSingleTap = (event, id) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      this.plusOne(id);
    }
  };

  updateData = () => {
    this.props.dispatch(getAchievement());
  };

  plusOne = (id) => {
    this.props.dispatch(plusOne(id, this.updateData));
  };

  onDelete = (id) => {
    this.props.dispatch(onDelete(id, this.updateData));
  };

  render() {
    const { achievements, navigation, isLoading } = this.props;
    if (isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          color={Colors.red800}
          size="large"
        />
      );
    }

    return (
      <View
        style={{
          flex: 1,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <ScrollView
          style={{
            flex: 1,
          }}>
          {achievements.map((achievement, index) => (
            <GmailStyleSwipeableRow
              delete={() => this.onDelete(achievement._id)}
              edit={() => this.onEdit(achievement._id)}>
              <PressBox
                key={index}
                onDoubleTap={(evt) => this.onDoubleTap(evt, achievement._id)}
                onSingleTap={(evt) => this.onSingleTap(evt, achievement._id)}>
                <View>
                  <List.Item
                    title={achievement.name}
                    style={[
                      styles.list,
                      { backgroundColor: color[achievement.color] },
                    ]}
                    titleStyle={styles.listTitle}
                  />
                  <View style={styles.number}>
                    <Badge size={30} style={{ backgroundColor: 'gray' }}>
                      {achievement.achievedTimes}
                    </Badge>
                  </View>
                </View>
              </PressBox>
            </GmailStyleSwipeableRow>
          ))}
        </ScrollView>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() =>
            navigation.push('AddTaskScreen', { updateData: this.updateData })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  list: {
    backgroundColor: 'red',
    marginBottom: 10,
    height: 50,
    borderRadius: 10,
  },
  listTitle: {
    color: 'white',
  },
  number: {
    height: 20,
    width: 30,
    position: 'absolute',
    right: 10,
    bottom: 25,
    zIndex: 20,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: 'white',
  },
});

const HomePage = connect((state) => {
  return {
    achievements: state.achieved.achievements,
    isLoading: state.achieved.isLoading,
  };
})(HomeScreen);

export { HomePage };
