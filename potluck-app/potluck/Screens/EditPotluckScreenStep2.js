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

import EditPotluckGroupStep2 from '../Components/Potluck/EditPotluck/EditPotluckGroupStep2';
import EditPotluckPersonalStep2 from '../Components/Potluck/EditPotluck/EditPotluckPersonalStep2';

export default class EditPotluckScreenStep2 extends Component<Props> {

  static defaultProps = {
  };

  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    indexInGroup = this.findUserInGroup(this.props.navigation.state.params.loggedInUser)
    this.state={
      indexInGroup
    }

  }

  goBackToHome(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });
    this.props.navigation.dispatch(resetAction);

  }

  submitPotluck(potluckInfo){
    var newPotluck = this.props.navigation.state.params.oldPotluck;


		newPotluck.potluckName = this.props.navigation.state.params.value.potluckName
		newPotluck.potluckDescription = this.props.navigation.state.params.value.potluckDescription
    newPotluck.isGroupPotluck = this.props.navigation.state.params.value.isGroupPotluck
    newPotluck.showPercentage = this.props.navigation.state.params.value.isGroupPotluck?potluckInfo.showPercentage:false
    newPotluck.pricePerPerson = 0
    newPotluck.numberOfUsers = this.props.navigation.state.params.value.isGroupPotluck?potluckInfo.numberOfUsers:1
    newPotluck.dateDue = moment(this.props.navigation.state.params.value.dateDue).format("YYYY-MM-DD")
		newPotluck.adminUsername = this.props.navigation.state.params.loggedInUser.username,
    newPotluck.pricePerPerson = potluckInfo.pricePerPerson
    newPotluck.members = potluckInfo.members
    this.updatePotluck(newPotluck)

  }

  cancelUpdatePotluck(){
    this.props.navigation.goBack()

  }

  findUserInGroup(user){
    var potluck = this.props.navigation.state.params.oldPotluck;
    for(var i = 0;i<potluck.members.length;i++){
      if(potluck.members[i].username === user.username){
        console.log(i)
        return i;
      }
    }
  }

  updatePotluck(newPotluck){
    potluckID = this.props.navigation.state.params.potluckID
    fetch('http://localhost:5000/potlucks/potluckID/'+this.props.navigation.state.params.potluckID,{
      body: JSON.stringify(newPotluck),
      method: 'PUT',
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


    var potluck = this.props.navigation.state.params.oldPotluck;

    var isGroupPotluck = potluck.isGroupPotluck
    const addPotluckOptions = isGroupPotluck?
    (
      <EditPotluckGroupStep2 indexInGroup ={this.state.indexInGroup} potluck = {potluck}submitPotluck={this.submitPotluck.bind(this)} cancelUpdatePotluck = {this.cancelUpdatePotluck.bind(this)} loggedInUser = {this.props.navigation.state.params.loggedInUser}/>

    ):
    (
      <EditPotluckPersonalStep2 indexInGroup ={this.state.indexInGroup} potluck = {potluck} submitPotluck={this.submitPotluck.bind(this)} cancelUpdatePotluck = {this.cancelUpdatePotluck.bind(this)} loggedInUser = {this.props.navigation.state.params.loggedInUser}/>
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

EditPotluckScreenStep2.propTypes = {


};
