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
import PersonalProgress from './PersonalProgress';


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
    let potluckName = this.props.potluck.potluckName;
    let potluckDescription = this.props.potluck.potluckDescription;
    let userID = this.props.user.accountID;

    let progressItems;
    let progressComponent;
    let progressYouComponent;

    let userPotluckInfo;
    members.map(member=>{
      if(member.accountID==userID)
      userPotluckInfo = member;
    })



    if(isGroupPotluck){
      if(showPercentage){
        progressItems = members.map(member=>{

          if(userID!=member.accountID){
            return(<PotluckProgressItemYN  isUser={false}member={member} key={member.accountID} pricePerPerson={pricePerPerson}/>)
          }else{
            member.name = "You"
            progressYouComponent = <PotluckProgressItemYN isUser={true}  member={member} key={member.accountID} pricePerPerson={pricePerPerson}/>
          }

        })
        progressItems.push(progressYouComponent)
        progressComponent =
          <View style={styles.progress}>
            {progressItems}
          </View>


      }else{
        progressComponent =
          <View style={styles.progress}>
            <Text>Show Percentage Progress Screen</Text>
          </View>

      }
    }else{
      progressComponent = [
        <View style={styles.progress}>
          <Text>Personal Progress Screen</Text>
        </View>
      ]
    }

    return(
        <View style = {styles.container}>
          <Text style={styles.potluckName}>{potluckName}</Text>
          <Text style={styles.potluckDescription}>{potluckDescription}</Text>

          {progressComponent}
          <PersonalProgress userPotluckInfo={userPotluckInfo} pricePerPerson={pricePerPerson}/>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  potluckName: {
    fontSize: 25,
    textAlign: 'center',
  },
  container:{
    margin:30,
  },
  potluckDescription:{
    fontSize: 10,
    color: '#00000090'
  },
  progress:{
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30

  }
});

ViewPotluck.propTypes = {
  isGroupPotluck: PropTypes.bool
};
