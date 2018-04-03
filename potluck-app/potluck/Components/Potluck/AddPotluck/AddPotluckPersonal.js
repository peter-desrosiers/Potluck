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
import moment from 'moment';

const Potluck = t.struct({
  potluckName: t.String,
  potluckDescription: t.String,
  pricePerPerson: t.Number,
  dateDue: t.Date
});

let myFormatFunction = (format,date) =>{
            return moment(date).format(format);
        }

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
      label: 'Due Date',
      mode: 'date',
      config:{
                format:(date) => myFormatFunction("DD MMM YYYY",date)
    }
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
      newPotluck = {
		"members": [
        {
				"username": this.props.loggedInUser.username,
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
    "dateDue": moment(value.dateDue).format("YYYY-MM-DD"),
		"adminUsername": this.props.loggedInUser.username,
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
          <Text style={styles.screenTitle}>Add a Personal Potluck</Text>
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
  container:{
    alignItems: 'center',
    paddingBottom:10,
    paddingTop:10

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
  },
  screenTitle:{
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
  }
});

AddPotluckPersonal.propTypes = {


};
