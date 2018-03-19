/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Alert,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

export default class AddPayment extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {}
  }

  static defaultProps = {
    Month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    Year:  [18,19,20,21,22,23,24]
  };

  handleSubmit(e){
    if(this.refs.creditCardNumber.length != 16){
      alert('Invalid Credit Card number.');
    }
    else{
      this.setState({newPayment:{
        creditCardNumber: this.refs.creditCardNumber.value,
        nameOnCard: this.refs.nameOnCard,
        experationMonth: this.refs.experationMonth,
        experationYear: this.refs.experationYear}},
        function(){
          this.props.AddPayment.state.newPayment;
        });
    }
    e.preventDefault();
  }


  render() {

    let monthOptions = this.props.Month.map(experationMonth => {
      return <option key={experationMonth}
      value="Month">{experationMonth}</option>
    })

    let yearOptions = this.props.Year.map(experationYear => {
      return <option key={experationYear}
      value="Year">{experationYear}</option>
    })
    return (
      <div>
      <h3> Add Payment </h3>
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label> Name on Card </ label><br />
          <input type ="text" ref="nameOnCard" />
        </div>
        <div>
          <label> Card Number </label><br />
          <input type ="text" ref="nameOnCard" />
        </div>
        <div>
          <label>Month  </label><br />
          <select ref="experationMonth">
            {monthOptions}
          </select>
        </div>
        <div>
          <label>Year  </label><br />
          <select ref="experationYear">
            {yearOptions}
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
