/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import ViewPotluck from './Components/Potluck/ViewPotluck/ViewPotluck';
import Dashboard from './Components/Potluck/Dashboard/Dashboard';

export default class potluck extends Component<Props> {
  constructor(){
    super();
    let samplePotluck = {
      members :[
        {
          accountID: 0,
          name: "Brandon Cornel",
          amount: "1499",
          isAdmin: true
        },
        {
          accountID: 1,
          name: "Matthew Gallagher",
          amount: "2000",
          isAdmin: false
        },
        {
          accountID: 2,
          name: "Peter Desrosiers",
          amount: "1500",
          isAdmin: false
        },
        {
          accountID: 3,
          name: "Dan Sweetman",
          amount: "2000",
          isAdmin: false
        },


      ],
      potluckName: "Toronto Trip with the Debt Daddies",
      potluckDescription: "WE WANT TO GO TO CANADA SO WE CAN BUY MAPLE SYRUP AND EAT POUTINE.",
      isGroupPotluck: true,
      showPercentage: true,
      pricePerPerson: 2000,
      dateDue: "2018-05-18",
      adminID: 0


    }

    let sampleLoggedInUser = {
      accountID: 0,
      name: "Brandon Cornel"
    }
    this.state={
      sampleLoggedInUser,
      samplePotluck
    }

  }

  findUserInGroup(userID){
    for(var i = 0;i<this.state.samplePotluck.members.length;i++){
      if(this.state.samplePotluck.members[i].accountID === userID){
        return i;
      }
    }
  }

  handleAddMoney(newAmount, userID){
    console.log(newAmount,userID)
    var userIndexInPotluck = this.findUserInGroup(userID);
    var newSamplePotluck = this.state.samplePotluck;
    var members = newSamplePotluck.members;
    var newData = members[userIndexInPotluck]
    newData.amount = newAmount;
    //Need to find a way to change it
    this.setState({
      samplePotluck: newSamplePotluck
    });


  }




  render(){
  let platform = Platform.OS;
  let platformSpecificStyle = {}
  if(platform === 'ios') { platformSpecificStyle = {paddingTop: 20} }



    return (
        <Dashboard/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
