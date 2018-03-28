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
import EditPotluckGroup from '../Components/Potluck/EditPotluck/EditPotluckGroup';
import EditPotluckPersonal from '../Components/Potluck/EditPotluck/EditPotluckPersonal';

export default class EditPotluckScreen extends Component<Props> {

  static navigationOptions = {
    header: null,
  };

  updatePotluck(){
    console.log("UPDATE")

  }

  cancelUpdatePotluck(){
    this.props.navigation.goBack()

  }

  render(){
    let platform = Platform.OS;
    let platformSpecificStyle = {}

    return(
      <View style={styles.container}>
      <EditPotluckPersonal cancelUpdatePotluck = {this.cancelUpdatePotluck.bind(this)} updatePotluck = {this.updatePotluck.bind(this)} />
      </View>
    )
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
