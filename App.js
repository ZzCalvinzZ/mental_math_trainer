import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import {Pages, Operators} from 'mtrainer/app/components/constants';
import OperatorSelectPage from 'mtrainer/app/components/pages/operator_select';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: Pages.OperatorSelect,
      operator: null,
    };
  }

  selectOperator = (operator) => {
    console.log(operator);
    this.setState({
      operator: operator,
      page: Pages.DigitSelect,
    });
  };

  render() {
    let Page;

    switch (this.state.page) {
      case Pages.OperatorSelect:
        Page = OperatorSelectPage;
        break;
      case Pages.DigitSelect:
        Page = OperatorSelectPage;
        break;
    }

    return (
      <Page
        styles={styles}
        selectOperator={this.selectOperator}
        page={this.state.page}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
