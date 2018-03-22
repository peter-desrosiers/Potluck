/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import AddPayment from './Components/Potluck/AddPayment/AddPayment';

export default class ViewPaymentMethods extends Component<Props> {


    viewPayments(){
      for (var i = 0; i < this.state.samplePayments.payments.length; i++){
      <View>
      <Text>  this.state.samplePayments.payments.name </Text>
      <Text>  this.state.samplePayments.payments.cardNumber </Text>
      <Text>  this.state.samplePayments.payments.month /</Text>
      <Text>this.state.samplePayments.payments.year </Text>
      </View>
      }
    }


  render() {
    let samplePayments = {
      payments:[
        {
          name: "Peter Desrosiers",
          cardNumber: 1234567812345678,
          month: 11,
          year: 19
        },
        {
          name: "Peter Desrosiers",
          cardNumber: 8765432187654321,
          month: 12,
          year: 22
        },
        {
          name: "Peter Desrosiers",
          cardNumber: 9999111122223333,
          month: 8,
          year: 20
        },
      ],
    }

    return (
      <View style={styles.container}>
        viewPayments();
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
