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
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewPotluck from '../Components/Potluck/ViewPotluck/ViewPotluck';


export default class PotluckDetailScreen extends Component<Props> {

  static navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity style={ [{paddingHorizontal:15}] }
                    onPress={() => navigation.navigate('EditPotluckScreen',{
                      potluckID: navigation.state.params.potluckID,
                      potluck: navigation.state.params.potluck,
                      loggedInUser: navigation.state.params.loggedInUser
                    })}>
                    <Text>Edit</Text>
                  </TouchableOpacity>,
  }
};



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
      })

      this.props.navigation.setParams({
        potluck: response[0]
       });



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
          username: "",
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
      adminUsername: "intbrandon",
      numberOfUsers: 4


    }



    this.state = {
      potluck: samplePotluck
    }

  }

  findUserInGroup(username){
    for(var i = 0;i<this.state.potluck.members.length;i++){
      if(this.state.potluck.members[i].username === username){
        return i;
      }
    }
  }

  handleAddMoney(newAmount, username){
    var userIndexInPotluck = this.findUserInGroup(username);
    var newPotluck = this.state.potluck;
    var members = newPotluck.members;
    console.log(newPotluck)
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
