import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Pages, Operators} from 'app/components/constants';
import { OperatorButton } from 'app/components/buttons';
import styles from 'app/styles';

export default class OperatorSelectPage extends React.Component {
  selectAddition = () => {
    this.props.selectOperator(Operators.Addition);
  };

  selectSubtraction = () => {
    this.props.selectOperator(Operators.Subtraction);
  };

  render() {
    return (
      <View style={[styles.container, styles.column]}>
        <Text>Select an operator to practice</Text>
        <View style={styles.row}>
          <OperatorButton
            text="+"
            onPress={this.selectAddition}
          />
          <OperatorButton
            text="-"
            onPress={this.selectSubtraction}
          />
        </View>
      </View>
    );
  }
}
