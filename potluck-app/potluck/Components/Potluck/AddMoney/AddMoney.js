/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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



export default class AddMoney extends Component<Props> {

  static defaultProps = {
  };

  constructor(props){
    super(props);
    this.state = {
      newAmount: 0,
      amountAdded: '',
    }
  }

  onChanged(value){
    this.setState({amountAdded: value});

  }

  onSubmit(){
    var amountNeeded = this.props.pricePerPerson-Number.parseInt(this.props.userPotluckInfo.amount)
    var amountAdded = this.state.amountAdded?this.state.amountAdded:0
    let totalAfterAdding = Number.parseInt(amountAdded)+Number.parseInt(this.props.userPotluckInfo.amount);
    if(totalAfterAdding>this.props.pricePerPerson){
      Alert.alert(
        "Please enter an amount  less than or equal to " + amountNeeded
      )

    }else{
      this.setState({
        newAmount: (Number.parseInt(amountAdded)+Number.parseInt(this.props.userPotluckInfo.amount))
      },   ()=>{this.props.onAddMoney(this.state.newAmount, this.props.userID)});
      this.setState({
        amountAdded: ''
      })
      this.textInput.blur();



    }
  }



  render() {
      var defaultFieldValue = "$0";

      return (
        <View style = {styles.container}>

          <TextInput
  style={styles.textInput}
  keyboardType = 'numeric' placeholder ={defaultFieldValue}
  onChangeText = {(value)=> this.onChanged(value)}
  value={this.state.amountAdded}
  ref={(input) => { this.textInput = input; }}
  />

<TouchableHighlight style = {{padding: 15}} onPress={() => this.onSubmit() }>
            <Text style={styles.addButton}>Add</Text>
          </TouchableHighlight>

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
  }
});

AddMoney.propTypes = {
  pricePerPerson: PropTypes.number,
  member: PropTypes.object,
  onAddMoney: PropTypes.func

};
