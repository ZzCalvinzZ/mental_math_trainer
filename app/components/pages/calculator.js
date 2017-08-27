import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import styles from 'app/styles';

export default class CalculatorPage extends React.Component {
  getInitialState = () => {
    return {
      revealAnswer: false,
      answer: false,
      number1: this.getRandomNumberFromDigits(this.props.digitCount1),
      number2: this.getRandomNumberFromDigits(this.props.digitCount2),
    };
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getRandomNumberFromDigits(digits) {
    const max = Math.pow(10, digits);
    const min = Math.pow(10, digits - 1);
    return Math.floor(Math.random() * (max - min) + min);
  }

  getAnswer() {
    let answer;
    let number1 = this.state.number1;
    let number2 = this.state.number2;

    switch (this.props.operator) {
      case '+':
        answer = number1 + number2;
        break;
      case '-':
        answer = number1 - number2;
        break;
      case 'x':
        answer = number1 * number2;
        break;
      //case '/':
        //answer = number1 / number2;
        //break;
    }

    return answer;

  }

  revealAnswer = () => {
    this.setState({
      revealAnswer: true,
      answer: this.getAnswer(),
    });

  };

  regenerate = () => {
    this.setState(this.getInitialState());
  };

  render() {
    return (
      <View style={[styles.container, styles.column]}>
        <View style={styles.calcContainer}>
          <Text style={styles.number}>{this.state.number1}</Text>
          <Text style={[styles.number, styles.lastNumber]}>
            {this.props.operator}
            {"    "}
            {this.state.number2}
          </Text>
          <Text style={[styles.number]}>
            {this.state.answer || " "}
          </Text>
        </View>
        <View>
          {!this.state.revealAnswer &&
            <TouchableOpacity
              onPress={this.revealAnswer}
              style={styles.ok}
            >
              <Text style={styles.btnText}>
                Reveal
              </Text>
            </TouchableOpacity>
          }
          {this.state.revealAnswer &&
            <TouchableOpacity
              onPress={this.regenerate}
              style={styles.ok}
            >
              <Text style={styles.btnText}>
                ReRoll
              </Text>
            </TouchableOpacity>

          }
        </View>
      </View>
    );
  }

}
