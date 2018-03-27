/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';



export default class PotluckProgressItemYN extends Component<Props> {

  static defaultProps = {
  };

  progressStyling(completedGoal){
    if(completedGoal==='Yes'){
      return{
        color: 'green'
      }
    }
    return{
      color: 'red'

    }

  }

  render() {
    let memberName = this.props.member.name;
    let accountID = this.props.member.accountID;
    let amount = this.props.member.amount;
    let pricePerPerson = this.props.pricePerPerson;
    let completedGoal = (amount==pricePerPerson? "Yes" : "No");

      return (
          <View style={styles.container}>
            <Text style={styles.name}>{this.props.member.name}:</Text>
             <Text> <Text style={this.progressStyling(completedGoal)}>{completedGoal}</Text></Text>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  name:{
    fontWeight: 'bold'

  },
  container:{
    paddingBottom:10,
    paddingTop:10

  }
});

PotluckProgressItemYN.propTypes = {
  pricePerPerson: PropTypes.number,
  member: PropTypes.object
};
