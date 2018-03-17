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
    fetch('http://localhost:5000/potlucks/0').then(function(response){
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
    potlucks = []
    this.getPotlucks = this.getPotlucks.bind(this)
    this.state={
      potlucks
    }
  }





  componentDidMount(){
    this.getPotlucks()
  }

  changeScreen(id){
    console.log(id)
    this.props.navigation.navigate('RandomScreen')
  }


  render(){
    let platform = Platform.OS;
    let platformSpecificStyle = {}
    if(platform === 'ios') { platformSpecificStyle = {paddingTop: 20} }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          {this.state.potlucks.map((potluck)=> {
            return <TouchableHighlight key={potluck._id.$oid} style = {{padding: 15}} onPress={()=>this.changeScreen(potluck._id.$oid)}>
              <Text >{potluck.potluckName}</Text>
              </TouchableHighlight>
          })}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('RandomScreen')}
        />
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
