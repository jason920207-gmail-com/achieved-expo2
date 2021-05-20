import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Score } from "./pages/index";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/Feather";
import { Provider } from "react-redux";
import store from "./redux/store";

const Tab = AnimatedTabBarNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeColor: 'c8c2bc',
              inactiveTintColor: "grey",
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                    name="home"
                    size={size ? size : 24}
                    color={focused ? color : "#000"}
                    focused={focused}
                    color={color}
                  />
                )
              }}
            />
            <Tab.Screen
              name="Score"
              component={Score}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Icon
                    name="activity"
                    size={size ? size : 24}
                    color={focused ? color : "#000"}
                    focused={focused}
                    color={color}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
const styles = StyleSheet.create({});
