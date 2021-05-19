import {
  TapGestureHandler,
  State,
  Swipeable,
} from 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class PressBox extends Component {
  doubleTapRef = React.createRef();
  render() {
    const { children } = this.props;
    return (
      <TapGestureHandler
        onHandlerStateChange={this.props.onSingleTap}
        waitFor={this.doubleTapRef}>
        <TapGestureHandler
          ref={this.doubleTapRef}
          numberOfTaps={2}
          onHandlerStateChange={this.props.onDoubleTap}>
          {children}
        </TapGestureHandler>
      </TapGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});
