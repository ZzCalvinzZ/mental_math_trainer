import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import styles from 'app/styles';

export default class CalculatorPage extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.column]}>
        <View style={styles.calcContainer}>
          <Text style={styles.number}>{3488}</Text>
          <Text style={[styles.number, styles.lastNumber]}>{348}</Text>
        </View>
      </View>
    );
  }

}
