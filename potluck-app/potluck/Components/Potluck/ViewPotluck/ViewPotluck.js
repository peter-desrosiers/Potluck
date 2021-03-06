/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import PotluckProgressItemYN from './PotluckProgressItemYN';
import PersonalProgress from './PersonalProgress';
import AddMoney from '../AddMoney/AddMoney';
import PotluckProgressItemPercentage from './PotluckProgressItemPercentage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class ViewPotluck extends Component<Props> {

  static defaultProps = {
    isGroupPotluck: false
  };



  addMoney(newAmount, username){
    this.props.addMoney(newAmount,username)
  }

  constructor(props){
    super(props);
    this.state = {
      numberCompleted: 0
    }
  }



  render() {
    let isGroupPotluck = this.props.potluck.isGroupPotluck;
    let showPercentage = this.props.potluck.showPercentage;
    let members = this.props.potluck.members;
    let pricePerPerson = this.props.potluck.pricePerPerson;
    let dateDue = this.props.potluck.dateDue;
    let potluckName = this.props.potluck.potluckName;
    let potluckDescription = this.props.potluck.potluckDescription;
    let userUsername = this.props.user.username;
    let groupSize = members.length;
    let numberOfUsers = this.props.potluck.numberOfUsers

    let progressItems;
    let progressComponent;
    let progressYouComponent;

    let userPotluckInfo={
				"username": "placeholder",
				"name": "placeholder",
				"amount": 0,
				"isAdmin": true
			};

    members.map(member=>{
      if(member.username==userUsername)
        userPotluckInfo = member;
    })

    if(userPotluckInfo)
      if(isGroupPotluck){
        if(!showPercentage){
          progressItems = members.map(member=>{

            if(userUsername!=member.username){
              return(<PotluckProgressItemYN isUser={false}member={member} key={member.username} pricePerPerson={pricePerPerson}/>)
            }else{
              member.name = "You"
              progressYouComponent = <PotluckProgressItemYN isUser={true}  member={member} key={member.username} pricePerPerson={pricePerPerson}/>
            }

          })
          progressItems.push(progressYouComponent)
          progressComponent =
            <View style={styles.progress}>
              {progressItems}
            </View>


        }else{
          progressItems = members.map(member=>{

            if(userUsername!=member.username){
              return(<PotluckProgressItemPercentage   isUser={false}member={member} key={member.username} pricePerPerson={pricePerPerson}/>)
            }

          })
          progressComponent =
            <View style={styles.progress}>
            {progressItems}
            </View>

        }
      }else{
        progressComponent = [
          <View style={styles.progress} key="personalProgress">
            <Text>Personal Progress Screen</Text>
          </View>
        ]
      }

    return(
        <View style = {styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.main}>
          <Text style={styles.potluckName}>{potluckName}</Text>
          <Text style={styles.potluckDescription}>{potluckDescription}</Text>
          <Text style={styles.potluckDescription}>Due Date: {dateDue}</Text>
          <Text style={styles.potluckDescription}>Price per Person: ${pricePerPerson}</Text>

          {progressComponent}
          <PersonalProgress   userPotluckInfo={userPotluckInfo} pricePerPerson={pricePerPerson}/>
          <View style ={styles.addMoney}>
            <AddMoney onAddMoney={this.addMoney.bind(this)} username={userUsername}userPotluckInfo={userPotluckInfo} pricePerPerson={pricePerPerson}/>
          </View>
          </KeyboardAwareScrollView>

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
  },
  addMoney:{
    alignItems: 'center'
  },
  editButtonView:{
    flexDirection: 'row',
     flex: 1,
     justifyContent: 'space-between',
     paddingTop: 1
   },
   editButton:{
     color: "#00FF00"
   }


});

ViewPotluck.propTypes = {
  isGroupPotluck: PropTypes.bool
};
