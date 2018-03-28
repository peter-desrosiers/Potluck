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

import AddPotluckPersonalStep2 from '../Components/Potluck/AddPotluck/AddPotluckPersonalStep2';
import AddPotluckGroupStep2 from '../Components/Potluck/AddPotluck/AddPotluckGroupStep2';

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

		potluckName = this.props.navigation.state.params.value.potluckName,
		potluckDescription = this.props.navigation.state.params.value.potluckDescription,
    isGroupPotluck = this.props.navigation.state.params.value.isGroupPotluck,
    showPercentage = isGroupPotluck?potluckInfo.showPercentage:false
    pricePerPerson = 0
    numberOfUsers = isGroupPotluck?potluckInfo.numberOfUsers:1
    dateDue = moment(this.props.navigation.state.params.value.dateDue).format("YYYY-MM-DD")
		adminUsername = this.props.navigation.state.params.loggedInUser.username,
    pricePerPerson = potluckInfo.pricePerPerson
    members = potluckInfo.members
    if(this.props.navigation.state.params.value.isGroupPotluck){

    }else{



    }

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

    var isGroupPotluck = this.props.navigation.state.params.value.isGroupPotluck;
    const addPotluckOptions = isGroupPotluck?
    (
      <AddPotluckGroupStep2 submitPotluck={this.submitPotluck.bind(this)} loggedInUser = {this.props.navigation.state.params.loggedInUser}/>

    ):
    (
      <AddPotluckPersonalStep2 submitPotluck={this.submitPotluck.bind(this)} loggedInUser = {this.props.navigation.state.params.loggedInUser}/>
    )

      return (
        <View style = {styles.container}>
          {addPotluckOptions}
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
    paddingTop:10

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
