/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import AddPayment from '../AddPayment/AddPayment';

export default class ViewPotluck extends Component<Props> {


  addPayment(newPayment, userID){
    this.props.addPayment(newPayment,userID)
  }

  render() {

    let userID = this.props.user.accountID;
    let userPotluckInfo;
    let creditCardNumber;
    let nameOnCard;
    let experationMonth;
    let experationYear;

    //Get the member
    members.map(member=>{
      if(member.accountID==userID)
      userPotluckInfo = member;
    })

    //Return the cards the member has
        return(
            <View style = {styles.container}>
            //For ever credit card the member has
            //Display the last four digets and the  experation month/year
            
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

ViewPotluck.propTypes = {
  isGroupPotluck: PropTypes.bool
};
