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


export default class AddPotluckStep1 extends Component<Props> {

  static defaultProps = {
  };

  constructor(props){
    super(props);
  }

  onPress(type){

  }

  render() {

      return (
        <View style = {styles.container}>
        <Text style = {styles.instructions}>Which type of potluck would you like to create?</Text>
        <View style = {styles.potluckTypeButton}>
        <TouchableHighlight onPress={this.onPress.bind(this, 'personal')} underlayColor='#99d9f4'>
          <Text style={styles.potluckTypeButtonText}>Group</Text>
        </TouchableHighlight>
        </View>
        <View style = {styles.potluckTypeButton}>
        <TouchableHighlight onPress={this.onPress.bind(this,'group')} underlayColor='#99d9f4'>
          <Text style={styles.potluckTypeButtonText}>Personal</Text>
        </TouchableHighlight>
        </View>
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

AddPotluckStep1.propTypes = {


};
