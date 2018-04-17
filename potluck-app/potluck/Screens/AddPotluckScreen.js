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
import { StackNavigator } from 'react-navigation';
import moment from 'moment';
import { NavigationActions } from 'react-navigation';

import AddPotluckNewStep1 from '../Components/Potluck/AddPotluck/AddPotluckNewStep1';


export default class AddPotluckScreen extends Component<Props> {

  static defaultProps = {
  };

  static navigationOptions = {
  };

  constructor(props){
    super(props);
  }

  goBackToHome(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });
    this.props.navigation.dispatch(resetAction);

  }

  submitPotluck(potluckInfo){

		potluckName = potluckInfo.potluckName
		potluckDescription = potluckInfo.potluckDescription
    isGroupPotluck = potluckInfo.isGroupPotluck
    showPercentage = potluckInfo.showPercentage
    numberOfUsers = potluckInfo.numberOfUsers
    dateDue = moment(potluckInfo.dateDue).format("YYYY-MM-DD")
		adminUsername = this.props.navigation.state.params.loggedInUser.username,
    pricePerPerson = potluckInfo.pricePerPerson
    members = potluckInfo.members

    newPotluck = {
		"members": members,
		"potluckName": potluckName,
		"potluckDescription": potluckDescription,
		"isGroupPotluck": isGroupPotluck,
		"showPercentage": showPercentage,
		"pricePerPerson": pricePerPerson,
    "dateDue": dateDue,
		"adminUsername": adminUsername,
		"numberOfUsers": numberOfUsers
    }
    console.log(JSON.stringify(newPotluck))
    this.addPotluck(newPotluck)

  }

  addPotluck(newPotluck){
    fetch('http://localhost:5000/potlucks',{
      body: JSON.stringify(newPotluck),
      method: 'POST',
      headers: {
      'content-type': 'application/json'
      },
    }
  ).then((response) => {
    console.log(response)
      if(response.ok){
        this.goBackToHome()
      }
    })


  }

  render() {


      return (
        <View style = {styles.container}>
        <AddPotluckNewStep1 submitPotluck={this.submitPotluck.bind(this)} loggedInUser ={this.props.navigation.state.params.loggedInUser}/>
        </View>

        );
  }
}

const styles = StyleSheet.create({
  instructions:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 20

  },
  container:{
    alignItems: 'center',
    paddingBottom:10,
    paddingTop:10,
    backgroundColor: '#FFFFFF'


  },
  potluckTypeButton:{
    padding: 20,
    backgroundColor:'#0000FF',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop:10,
    borderRadius: 10
  },
  potluckTypeButtonText:{
    color: '#FFFFFF'
  }
});

AddPotluckScreen.propTypes = {


};
