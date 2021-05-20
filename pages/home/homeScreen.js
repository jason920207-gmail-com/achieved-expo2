import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { PressBox } from "../../utils/index";
import { State } from "react-native-gesture-handler";
import {
  FAB,
  List,
  Badge,
  ActivityIndicator,
  Colors,
  Chip,
} from "react-native-paper";
import { connect } from "react-redux";

import {
  getAchievement,
  plusOne,
  onDelete,
} from "../../redux/actions/achieved";
import GmailStyleSwipeableRow from "../../utils/swipeableBox";

const pushAction = StackActions.push("AddTaskScreen");

const color = {
  0: "#a2d5f2",
  1: "#93b5e1",
  2: "#40a8c4",
  3: "#07689f",
  4: "#120136",
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
    this.props.navigation.push("EditTaskScreen", {
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
        }}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Hello, Achiever</Text>
            <Text style={styles.headerSubtitle}>Welcome Back</Text>
          </View>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              margin: 10,
            }}
          >
            {achievements.map((achievement, index) => (
              <GmailStyleSwipeableRow
                delete={() => this.onDelete(achievement._id)}
                edit={() => this.onEdit(achievement._id)}
              >
                <PressBox
                  key={index}
                  onDoubleTap={(evt) => this.onDoubleTap(evt, achievement._id)}
                  onSingleTap={(evt) => this.onSingleTap(evt, achievement._id)}
                >
                  <View>
                    <Chip
                      style={{
                        backgroundColor: color[achievement.color],
                        margin: 3,
                      }}
                    >
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                          paddingTop: 5,
                        }}
                      >
                        <View>
                          <Text
                            style={{
                              fontSize: 20,
                              color: "white",
                              paddingRight: 5,
                            }}
                          >
                            {achievement.name}
                          </Text>
                        </View>
                        <View>
                          <Badge style={{ backgroundColor: "lightgray" }}>
                            {achievement.achievedTimes}
                          </Badge>
                        </View>
                      </View>
                    </Chip>
                  </View>
                </PressBox>
              </GmailStyleSwipeableRow>
            ))}
          </View>
        </ScrollView>
        <FAB
          style={styles.fab}
          small
          color="black"
          theme={{ colors: { accent: "#FECF63" } }}
          icon="plus"
          onPress={() =>
            navigation.push("AddTaskScreen", { updateData: this.updateData })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 100,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#c8c2bc",
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#c8c2bc",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const HomePage = connect((state) => {
  return {
    achievements: state.achieved.achievements,
    isLoading: state.achieved.isLoading,
  };
})(HomeScreen);

export { HomePage };
