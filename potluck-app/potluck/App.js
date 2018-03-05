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

let samplePotluck = {
  members :[
    {
      accountID: 0,
      name: "Brandon Cornel",
      amount: "0",
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
  isGroupPotluck: true,
  showPercentage: true,
  pricePerPerson: 2000,
  dateDue: "2018-05-18",
  adminID: 0


}

let sampleUser = {
  accountID: 0,
  name: "Brandon Cornel"
}


export default class App extends Component<Props> {
  constructor(){
    super();

  }


  render(){
  let platform = Platform.OS;
  let platformSpecificStyle = {}
  if(platform === 'ios') { platformSpecificStyle = {paddingTop: 20} }



    return (


      <View  style={platformSpecificStyle}>
        <ViewPotluck user = {sampleUser} potluck = {samplePotluck} />
      </View>
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
