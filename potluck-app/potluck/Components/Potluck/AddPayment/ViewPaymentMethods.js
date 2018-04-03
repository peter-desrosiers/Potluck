/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View , Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import AddPayment from './AddPayment';


export default class ViewPaymentMethods extends Component<Props> {


  render() {
    var samplePayments = [
        {
          name: "Peter Desrosiers",
          cardNumber: "1234567812345678",
          month: 11,
          year: 19
        },
        {
          name: "Peter Desrosiers",
          cardNumber: "8765432112345678",
          month: 5,
          year: 22
        },
      ]

    return (
      <View>
        <View style={styles.container}>

            {samplePayments.map(s => <Text key={s.name, s.cardNumber, s.month, s.year}>
            {s.name} {s.cardNumber.substring(12)} {s.month}/{s.year}</Text>)}
        </View>

        <View style={styles.Button}>
          <Button
            title="Add Payment"
            onPress={() => this.props.navigation.navigate('AddPaymentScreen')}
            />
          <Button
            title="Delete Payment"
            onPress={() => this.props.navigation.navigate('DeletePaymentScreen')}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
},
  Button:{
    justifyContent: 'center',
    marginTop: 400,
    padding: 10,
    backgroundColor: '#ffffff',
  }
});
