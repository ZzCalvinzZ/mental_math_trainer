import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Pages, Operators} from 'app/components/constants';
import { OperatorButton } from 'app/components/buttons';
import update from 'immutability-helper';

export default class DigitSelectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digitCount1: 1,
      digitCount2: 1,
    };
  }

  changeDigits = (mod, id) => {
    let count = this.state[id] + mod;

    this.setState({
      [id]: count
    });
  };

  render() {
    return (
      <View style={[this.props.styles.container, styles.digitSelect]}>
        <DigitSelector id="digitCount1" digitCount={this.state.digitCount1} maxDigits={3} changeDigits={this.changeDigits}></DigitSelector>
        <DigitSelector id="digitCount2" digitCount={this.state.digitCount2} maxDigits={3} changeDigits={this.changeDigits}></DigitSelector>
      </View>
    );
  }
}

class DigitSelector extends React.Component {
  addDigit = () => {
    this.props.changeDigits(1, this.props.id);
  };

  removeDigit = () => {
    this.props.changeDigits(-1, this.props.id);
  };

  render() {
    return (
      <View style={styles.row}>
        {this.props.digitCount < this.props.maxDigits &&
          <OperatorButton
            text="+"
            onPress={this.addDigit}
          />
        }
        <Text>{this.props.digitCount}</Text>
        {this.props.digitCount > 1 &&
          <OperatorButton
            text="-"
            onPress={this.removeDigit}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  digitSelect: {
    flexDirection: 'column',
  }
});
