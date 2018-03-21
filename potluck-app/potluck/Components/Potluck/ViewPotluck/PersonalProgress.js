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
import * as Progress from 'react-native-progress';

export default class PersonalProgress extends Component<Props> {

  static defaultProps = {
    isGroupPotluck: false
  };

  calculateProgress(amount,pricePerPerson){
    return (amount/pricePerPerson)
  }

  roundPercent(number, precision){
    var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
  }


  render() {
    let memberName = this.props.userPotluckInfo.name;
    let accountID = this.props.userPotluckInfo.accountID;
    let amount = this.props.userPotluckInfo.amount;
    let pricePerPerson = this.props.pricePerPerson;
    var amountProgress = this.calculateProgress(amount,pricePerPerson);
    var amountLeft = pricePerPerson-amount;
    let completedGoal = (amount==pricePerPerson? "Yes" : "No");

      return (
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize:20}}>Your Progress:</Text>
            <Progress.Bar progress={amountProgress} width={300}/>
            <Text style={{fontSize:15}}>{this.roundPercent(amountProgress*100,2)}%</Text>
            <Text style={styles.details}>You've saved <Text style={{fontWeight: 'bold'}}>${amount}</Text>. You need <Text style={{fontWeight: 'bold'}}>${amountLeft}</Text> to complete your goal.</Text>

          </View>
        );
  }
}

const styles = StyleSheet.create({
  details:{
    paddingTop:10,
    fontSize:20
  }
});

PersonalProgress.propTypes = {
  userPotluckInfo: PropTypes.object,
  pricePerPerson: PropTypes.number
};
