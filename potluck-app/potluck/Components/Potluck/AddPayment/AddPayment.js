/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  View, StyleSheet, Button, Text, Alert} from 'react-native';
import PropTypes from 'prop-types';
import t from 'tcomb-form-native';
import { StackNavigator } from 'react-navigation';


const Form = t.form.Form;

var ExperationMonth = t.enums({
1: '01',
2: '02',
3: '03',
4: '04',
5: '05',
6: '06',
7: '07',
8: '08',
9: '09',
10: '10',
11: '11',
12: '12'
});

var ExperationYear = t.enums({
18: '2018',
19: '2019',
20: '2020',
21: '2021',
22: '2022'
});

const NewPayment = t.struct({
  nameOnCard : t.String,
  creditCardNumber : t.String,
  experationMonth : ExperationMonth,
  experationYear : ExperationYear
});


export default class AddPayment extends Component<Props> {


  constructor(props){
    super(props);
    paymentInfo = {nameOnCard: '', creditCardNumber: '', experationMonth : '', experationYear: ''},
    this.state = {paymentInfo};
  }

  onChange(value){
    this.setState({paymentInfo: value});
  }

  handleSubmit(event){

    var cardValue = this.state.paymentInfo.creditCardNumber.value

    if(cardValue.length != 16){
          Alert.alert(
            "Invalid Credit Card Number"
          )
      }

      this.setState({newPaymentMethod:{
        nameOnCard: this.state.paymentInfo.nameOnCard.value,
        creditCardNumber: this.state.paymentInfo.creditCardNumber.value,
        experationMonth: this.state.paymentInfo.experationMonth,
        experationYear: this.state.paymentInfo.experationYear}},
        );

      event.preventDefault();
    }

  render() {
    return (
      <View style={styles.container}>
        <Form type={NewPayment} />
        <Button title="Add Card"
          onPress={this.handleSubmit.bind(this)}
          />
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

  addButton:{
  fontSize: 20,
  padding: 5,
  backgroundColor:'#00FF00'
},

});