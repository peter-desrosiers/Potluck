/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import AddPayment from './AddPayment';

export default class ViewPaymentMethods extends Component<Props> {


  render() {
    var samplePayments = [
        {
          name: "Peter Desrosiers",
          cardNumber: 1234567812345678,
          month: 11,
          year: 19
        },
        {
          name: "Peter Desrosiers",
          cardNumber: 8765432112345678,
          month: 5,
          year: 22
        },
      ]

    return (
      <View style={styles.container}>
        {samplePayments.map(s => <Text key={s.name, s.cardNumber, s.month, s.year}>
          {s.name} {s.cardNumber} {s.month}/{s.year}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  potluckName: {
    fontSize: 25,
    textAlign: 'center',
  },
  container:{
    margin:30,
  },
  potluckDescription:{
    fontSize: 10,
    color: '#00000090'
  },
  progress:{
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30
  },
  addMoney:{
    alignItems: 'center'
  }
});
