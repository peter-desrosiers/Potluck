/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  View, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';
import t from 'tcomb-form-native';


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
  creditCardNumber : t.Number,
  experationMonth : ExperationMonth,
  experationYear : ExperationYear
});


export default class AddPayment extends Component<Props> {

  onChange(value){
    t.setState({paymentInfo: value});
  }

  handleSubmit(){
    if(this.state.paymentInfo.creditCardNumber.toString().length != 16){
      alert('Invalid Credit Card number.');
    }
    else{
      this.setState({newPayment:{
        nameOnCard: this.state.paymentInfoData.nameOnCard,
        creditCardNumber: this.state.paymentInfoData.creditCardNumber,
        experationMonth: this.state.paymentInfoData.experationMonth,
        experationYear: this.state.paymentInfoData.experationYear}},
        function(){
          this.props.AddPayment.state.newPayment;
        });
    }
    e.preventDefault();
  }


  constructor(props){
    super(props);
    paymentInfoData = {nameOnCard: '', creditCardNumber: '', experationMonth : '', experationYear: ''},
    this.state = { paymentInfo : paymentInfoData};
  }

  render() {
    return (
      <View style={styles.container}>
        <Form type={NewPayment} />
        <Button
          title="Add Card"
          onPress={this.handleSubmit}
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
});
