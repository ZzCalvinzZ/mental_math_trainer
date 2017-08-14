import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export default class App extends React.Component {
  selectAddition() {
    console.log('addition');

  }

  selectSubtraction() {
    console.log('substraction');
  }

  render() {
    return (
      <View style={styles.container}>
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

class OperatorButton extends React.Component {
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
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
