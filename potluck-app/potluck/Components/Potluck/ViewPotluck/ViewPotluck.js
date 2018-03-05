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


export default class ViewPotluck extends Component<Props> {

  static defaultProps = {
    isGroupPotluck: false
  };

  render() {
    let isGroupPotluck = this.props.potluck.isGroupPotluck;
    let showPercentage = this.props.potluck.showPercentage;
    let members = this.props.potluck.members;
    let pricePerPerson = this.props.potluck.pricePerPerson;
    let dateDue = this.props.potluck.dateDue;
    let adminID = this.props.potluck.adminID;
    let progressItems;
    
    if(isGroupPotluck){
      if(showPercentage){
        progressItems = members.map(member=>{
          return(
            <PotluckProgressItemYN member={member}/>
          )

        })
        return (
            <View style={styles.container}>
              <Text>Group Potluck: Show percentage</Text>
              {progressItems}
            </View>
          );
      }else{
        return (
            <View style={styles.container}>
              <Text>Group Potluck: Dont show percentage</Text>
            </View>
          );
      }
    }else{
      return (
          <View style={styles.container}>
            <Text>Screen for personal potluck</Text>
          </View>
        );

    }
  }
}

const styles = StyleSheet.create({
  container: {

  },
});

ViewPotluck.propTypes = {
  isGroupPotluck: PropTypes.bool
};
