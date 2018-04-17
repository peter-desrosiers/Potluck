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
  pricePerPerson: t.Number,
});

let myFormatFunction = (format,date) =>{
            return moment(date).format(format);
        }

const options = {
  fields: {
    pricePerPerson:{
      label: 'How much is your goal?'
    }
    }
};

const Form = t.form.Form;


export default class AddPotluckPersonal extends Component<Props> {

  static defaultProps = {
  };

  constructor(props){
    super(props);

    potluck = {} = this.props.potluck

    value = {
      pricePerPerson: potluck.pricePerPerson

    }
    console.log(this.props.indexInGroup)
    console.log(this.props.potluck.members[0])
    this.state = {
      isHiddenGroupPotluckFields: true,
      randomText: "FALSE",
      value: value
    }
  }

  onPress(){
    memberList = [
        {
        "username": this.props.loggedInUser.username,
        "name": this.props.loggedInUser.name,
        "amount": this.props.potluck.members[this.props.indexInGroup].amount,
        "isAdmin": true
      }
    ]
    var value = this.refs.form.getValue();
    if (value) {
      values = {
        members: memberList,
        pricePerPerson: value.pricePerPerson,
        isGroupPotluck: false
      }
      this.props.updatePotluck(values)
    }

  }

  render() {

      return (
        <View style = {styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.main}>
          <Text style={styles.screenTitle}>Edit Potluck</Text>
        <Form
        ref="form"
        type={Potluck}
        options = {options}
        value = {this.state.value}
        />

        <View style={styles.potluckActionButtons}>
        <View style={styles.updatePotluckButton}>
        <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Update Potluck</Text>
        </TouchableHighlight>
        </View>
        <View style={styles.cancelPotluckButton}>
        <TouchableHighlight onPress={this.props.cancelUpdatePotluck.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
        </View>
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
    padding: 10,
    marginTop: 20,
    backgroundColor:'#00FF00'
  },
  screenTitle:{
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
  },
  potluckActionButtons:{
    flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20
  }
});

AddPotluckPersonal.propTypes = {


};
