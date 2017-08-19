import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export class OperatorButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.operatorButton}
      >
        <Text style={styles.operatorBtnText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  operatorButton: {
    width: 60,
    height: 60,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  operatorBtnText: {
    fontSize: 30,
    color: 'white',
  }

});
