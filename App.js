import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import { OperatorButton } from './app/components/buttons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
