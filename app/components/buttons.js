import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import styles from 'app/styles';

export class OperatorButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.operatorButton}
      >
        <Text style={styles.btnText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
