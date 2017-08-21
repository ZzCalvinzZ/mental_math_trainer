import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Pages, Operators} from 'app/components/constants';
import { OperatorButton } from 'app/components/buttons';

export default class OperatorSelectPage extends React.Component {
  selectAddition = () => {
    this.props.selectOperator(Operators.Addition);
  };

  selectSubtraction = () => {
    this.props.selectOperator(Operators.Subtraction);
  };

  render() {
    return (
      <View style={this.props.styles.container}>
        <OperatorButton
          text="+"
          onPress={this.selectAddition}
        />
        <OperatorButton
          text="-"
          onPress={this.selectSubtraction}
        />
      </View>
    );
  }
}
