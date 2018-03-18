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
  TouchableHighlight,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends Component<Props> {





  getPotlucks(){
    potlucks = []
    fetch('http://localhost:5000/potlucks/accountID/0').then(function(response){
      if(response.ok){
        return response.json();
      }
    }).then(response=>{
      for (var i = 0; i < response.length; i++) {
        potlucks.push(response[i])
      }
      this.setState({
        potlucks: potlucks
      })

    })
  }

  constructor(props){
    super(props)
    let loggedInUser = {
      accountID: 0,
      name: "Brandon Cornel"
    }
    potlucks = []
    this.getPotlucks = this.getPotlucks.bind(this)
    this.state={
      potlucks,
      loggedInUser
    }
  }





  componentDidMount(){
    this.getPotlucks()
  }

  changeScreen(id){
    console.log(id)
    this.props.navigation.navigate('RandomScreen',{
      potluckID: id,
      loggedInUser: this.state.loggedInUser
    })
  }


  render(){
    let platform = Platform.OS;
    let platformSpecificStyle = {}
    if(platform === 'ios') { platformSpecificStyle = {paddingTop: 20} }


    return (
      <View>
          <View style={{alignItems: 'center', justifyContent: 'center' }}>
          {this.state.potlucks.map((potluck)=> {
            return <TouchableHighlight key={potluck._id.$oid} style = {{padding: 15}} onPress={()=>this.changeScreen(potluck._id.$oid)}>
              <Text style={{fontSize: 15}}>{potluck.potluckName}</Text>
              </TouchableHighlight>
          })}
          </View>
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
