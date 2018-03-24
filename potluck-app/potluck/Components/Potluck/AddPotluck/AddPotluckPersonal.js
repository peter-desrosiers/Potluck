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
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Potluck = t.struct({
  potluckName: t.String,
  potluckDescription: t.String,
  pricePerPerson: t.Number,
  dateDue: t.Date
});

const options = {
  fields: {
    potluckName: {
      label: 'Potluck Name',
    },
    potluckDescription:{
      label: 'Description'
    },
    pricePerPerson:{
      label: 'How much is the goal?'
    },
    dateDue:{
      label: 'Due Date'
    }
  },
};

const Form = t.form.Form;


export default class AddPotluckPersonal extends Component<Props> {

  static defaultProps = {
  };


  printSomething(){
    console.log("YOO")
  }

  constructor(props){
    super(props);
    this.state = {
      isHiddenGroupPotluckFields: true,
      randomText: "FALSE"
    }
  }

  onPress(){
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
      console.log("Logged in User:" + this.props.loggedInUser.name)
      newPotluck = {
		"members": [
        {
				"accountID": this.props.loggedInUser.accountID,
				"name": this.props.loggedInUser.name,
				"amount": 0,
				"isAdmin": true
			}
		],
		"potluckName": value.potluckName,
		"potluckDescription": value.potluckDescription,
		"isGroupPotluck": false,
		"showPercentage": false,
		"pricePerPerson": value.pricePerPerson,
		"dateDue": value.dateDue,
		"adminID": this.props.loggedInUser.accountID,
		"numberOfUsers": 1
      // clear all fields after submit
    }
  }
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
      if(response.ok){
        this.props.goBackToHome()
      }
    })


  }

  render() {

      return (
        <View style = {styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.main}>
        <Form
        ref="form"
        type={Potluck}
        options = {options}
        />
        <View style={styles.createPotluckButton}>
        <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Create Potluck</Text>
        </TouchableHighlight>
        </View>
        </KeyboardAwareScrollView>
        </View>

        );
  }
}

const styles = StyleSheet.create({
  name:{
    fontWeight: 'bold'

  },
  container:{
    alignItems: 'center',
    paddingBottom:10,
    paddingTop:10

  },
  addButton:{
    fontSize: 20,
    padding: 5,
    backgroundColor:'#00FF00'
  },
  textInput: {
    borderColor: 'black',
    width: 100,
    height:30,
    borderBottomWidth: 3
  },
  createPotluckButton:{
    alignItems: 'center',
    padding: 5,
    backgroundColor:'#00FF00'
  }
});

AddPotluckPersonal.propTypes = {


};
