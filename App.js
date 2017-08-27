import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import {Pages, Operators} from 'mtrainer/app/components/constants';
import OperatorSelectPage from 'mtrainer/app/components/pages/operator_select';
import DigitSelectPage from 'mtrainer/app/components/pages/digit_select';
import CalculatorPage from 'mtrainer/app/components/pages/calculator';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: Pages.OperatorSelect,
      digitCount1: null,
      digitCount2: null,
      operator: null,
    };
  }

  selectOperator = (operator) => {
    this.setState({
      operator: operator,
      page: Pages.DigitSelect,
    });
  };

  selectNumberOfDigits = (digitCount1, digitCount2) => {
    this.setState({
      digitCount1: digitCount1,
      digitCount2: digitCount2,
      page: Pages.Calculator,
    });
  };

  render() {
    let Page;
    let extraProps = {};

    switch (this.state.page) {
      case Pages.OperatorSelect:
        Page = OperatorSelectPage;
        break;
      case Pages.DigitSelect:
        Page = DigitSelectPage;
        break;
      case Pages.Calculator:
        Page = CalculatorPage;
        extraProps = {
          operator: this.state.operator,
          digitCount1: this.state.digitCount1,
          digitCount2: this.state.digitCount2,
        };
        break;
    }

    return (
      <Page
        selectOperator={this.selectOperator}
        selectNumberOfDigits={this.selectNumberOfDigits}
        page={this.state.page}
        {...extraProps}
      />
    );
  }
}
