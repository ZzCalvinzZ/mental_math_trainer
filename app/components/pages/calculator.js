import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import styles from 'app/styles';

export default class CalculatorPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      revealAnswer: false,
      answer: false,
      number1: null,
      number2: null,
    };
  }

  getRandomNumberFromDigits(digits) {
    const tenthPower = Math.pow(10, digits);
    return Math.floor(Math.random() * tenthPower);
  }

  render() {
    return (
      <View style={[styles.container, styles.column]}>
        <View style={styles.calcContainer}>
          <Text style={styles.number}>{this.getRandomNumberFromDigits(this.props.digitCount1)}</Text>
          <Text style={[styles.number, styles.lastNumber]}>
            {this.props.operator}
            {"    "}
            {this.getRandomNumberFromDigits(this.props.digitCount2)}
          </Text>
          {this.state.revealAnswer &&
            <Text style={[styles.number]}>{this.state.answer}</Text>
          }
        </View>
      </View>
    );
  }

}
