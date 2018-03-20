/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewPotluck from '../Components/Potluck/ViewPotluck/ViewPotluck';


export default class PotluckDetailScreen extends Component<Props> {



  getPotluck(potluckID){
    fetch('http://localhost:5000/potlucks/potluckID/'+potluckID).then(function(response){
      if(response.ok){
        return response.json();
      }
    }).then(response=>{
      this.setState({
        potluckName: response[0].potluckName,
        potluck: response[0]
      },function(){
        console.log(this.state.potluck)

      })



    })

  }
  getParams(){
    if(this.props.navigation.state.params.potluckID)
      this.getPotluck(this.props.navigation.state.params.potluckID);
  }

  updatePotluck(newPotluck){
    potluckID = this.props.navigation.state.params.potluckID
    fetch('http://localhost:5000/potlucks/potluckID/'+potluckID,{
      body: JSON.stringify(newPotluck),
      method: 'PUT',
      headers: {
      'content-type': 'application/json'
      },
    }
  ).then(function(response){
      if(response.ok){
        console.log(response)
      }
    })

  }

  componentDidMount(){
    this.getParams()
  }

  constructor(props){
    super(props)
    let samplePotluck = {
      members :[
        {
          accountID: 0,
          name: "",
          amount: 0,
          isAdmin: true
        }


      ],
      potluckName: "",
      potluckDescription: "",
      isGroupPotluck: true,
      showPercentage: true,
      pricePerPerson: 2000,
      dateDue: "",
      adminID: 0,
      numberOfUsers: 4


    }



    this.state = {
      potluck: samplePotluck
    }

  }

  findUserInGroup(userID){
    for(var i = 0;i<this.state.potluck.members.length;i++){
      if(this.state.potluck.members[i].accountID === userID){
        return i;
      }
    }
  }

  handleAddMoney(newAmount, userID){
    var userIndexInPotluck = this.findUserInGroup(userID);
    var newPotluck = this.state.potluck;
    var members = newPotluck.members;

    var newData = members[userIndexInPotluck]
    newData.amount = newAmount;
    //Need to find a way to change it
    this.setState({
      potluck: newPotluck
    });

    this.updatePotluck(newPotluck)

  }

  render(){
    let platform = Platform.OS;
    let platformSpecificStyle = {}
    let loggedInUser = this.props.navigation.state.params.loggedInUser
    if(platform === 'ios') { platformSpecificStyle = {paddingTop: 20} }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ViewPotluck addMoney={this.handleAddMoney.bind(this)} user = {loggedInUser} potluck = {this.state.potluck} />
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
