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



export default class PotluckProgressItemPercentage extends Component<Props> {

  constructor(props){
    super(props);

  }
  static defaultProps = {
  };

  calculateProgress(amount,pricePerPerson){
    return (amount/pricePerPerson)
  }

  roundPercent(number, precision){
    var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
  }





  render() {
    let memberName = this.props.member.name;
    let accountID = this.props.member.accountID;
    let amount = this.props.member.amount;
    let pricePerPerson = this.props.pricePerPerson;
    var amountProgress = this.calculateProgress(amount,pricePerPerson);


      return (

          <View style={styles.container}>
            <Text style={styles.name}>{this.props.member.name}:</Text>
            <Progress.Bar progress={amountProgress} width={300}/>
            <View style ={styles.progressMetrics}>
            <Text style={styles.progressMetricText}>{this.roundPercent(amountProgress*100,2)}%</Text>
            <Text style={styles.progressMetricText}>${amount}/<Text style={{fontWeight: 'bold'}}>${pricePerPerson}</Text></Text>
            </View>
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

  },
  progressMetrics:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressMetricText:{
    fontSize:15
  }
});

PotluckProgressItemPercentage.propTypes = {
  pricePerPerson: PropTypes.number,
  member: PropTypes.object
};
