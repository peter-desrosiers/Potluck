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
  TextInput,
  Alert,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';



export default class AddMoney extends Component<Props> {

  static defaultProps = {
  };

  constructor(){
    super();
    this.state = {
      newAmount: 0,
      amountAdded: 0,
      amountNeeded: 0
    }
  }

  onChanged(value){
    this.setState({amountAdded: value});
  }

  componentDidUpdate(){

  }

  onSubmit(){
    this.setState({
      amountNeeded: this.props.pricePerPerson-Number.parseInt(this.props.userPotluckInfo.amount)
    })
    let totalAfterAdding = Number.parseInt(this.state.amountAdded)+Number.parseInt(this.props.userPotluckInfo.amount);
    if(totalAfterAdding>this.props.pricePerPerson){
      Alert.alert(
        "Please enter an amount  less than or equal to " + this.state.amountNeeded
      )

    }else{
      this.setState({
        newAmount: Number.parseInt(this.state.amountAdded)+Number.parseInt(this.props.userPotluckInfo.amount)
      })
    }
  }

  render() {
      var amountAdded = 0;

      return (
        <View style = {styles.container}>
          <TextInput
  style={styles.textInput}
  keyboardType = 'numeric' placeholder ="$20"
  onChangeText = {(value)=> this.onChanged(value)}
  />
<TouchableHighlight style = {{padding: 15}}onPress={() => this.onSubmit() }>
            <Text style={styles.addButton}>Add</Text>
          </TouchableHighlight>

          <Text>{this.state.newAmount}</Text>

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
  member: PropTypes.object
};
