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
import PotluckProgressItemYN from './PotluckProgressItemYN';
import * as Progress from 'react-native-progress';

export default class PersonalProgress extends Component<Props> {

  static defaultProps = {
    isGroupPotluck: false
  };

  calculateProgress(amount,pricePerPerson){
    return (amount/pricePerPerson)
  }
  render() {
    let memberName = this.props.userPotluckInfo.name;
    let accountID = this.props.userPotluckInfo.accountID;
    let amount = this.props.userPotluckInfo.amount;
    let pricePerPerson = this.props.pricePerPerson;
    var amountProgress = this.calculateProgress(amount,pricePerPerson);
    var amountLeft = pricePerPerson-amount;
      return (
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize:20}}>Your Progress:</Text>
            <Progress.Bar progress={amountProgress} width={300} />
            <Text style={{fontSize:15}}>{amountProgress*100}%</Text>
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
  isGroupPotluck: PropTypes.bool
};
