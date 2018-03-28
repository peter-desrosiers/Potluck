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
import AddPotluckNewStep1 from '../Components/Potluck/AddPotluck/AddPotluckNewStep1';

export default class AddPotluckScreen extends Component<Props> {

  static defaultProps = {
  };

  static navigationOptions = {
  };

  constructor(props){
    super(props);
  }

  onPress(type){

  }

  goToNextStep(value){
    this.props.navigation.navigate('AddPotluckScreenStep2',{
      value: value,
      loggedInUser: this.props.navigation.state.params.loggedInUser
    })
  }

  render() {


      return (
        <View style = {styles.container}>
        <AddPotluckNewStep1 goToNextStep={this.goToNextStep.bind(this)}/>
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

AddPotluckScreen.propTypes = {


};
