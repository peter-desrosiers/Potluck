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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class HomeScreen extends Component<Props> {




  getPotlucks(){
    potlucks = []
    fetch('http://localhost:5000/potlucks/username/'+this.state.loggedInUser.username).then(function(response){
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
      username: 'intbrandon',
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

  changeScreenToPotluck(id){
    console.log(id)
    this.props.navigation.navigate('PotluckDetailScreen',{
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
        <KeyboardAwareScrollView>
          <View style={{alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight style = {{padding: 15}} onPress={() => this.props.navigation.navigate('AddPotluckScreen',{
              loggedInUser: this.state.loggedInUser
            })}>
              <Text style={{fontSize: 15, color: '#0000FF'}}>Add Potluck</Text>
            </TouchableHighlight>
          {this.state.potlucks.map((potluck)=> {
            return <TouchableHighlight key={potluck._id.$oid} style = {{padding: 15}} onPress={()=>this.changeScreenToPotluck(potluck._id.$oid)}>
              <Text style={{fontSize: 15}}>{potluck.potluckName}</Text>
              </TouchableHighlight>
          })}
          </View>
        </KeyboardAwareScrollView>
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
