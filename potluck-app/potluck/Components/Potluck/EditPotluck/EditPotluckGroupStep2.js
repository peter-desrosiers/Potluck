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
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from 'moment';

const Potluck = t.struct({
  showPercentage: t.Boolean,
  pricePerPerson: t.Number,
});

let myFormatFunction = (format,date) =>{
            return moment(date).format(format);
        }

const options = {
  fields: {
    showPercentage:{
      label: 'Show percentage progress of each user?'
    },
    pricePerPerson:{
      label: 'How much is each person paying?'
    },

  },
};

const Form = t.form.Form;


export default class AddPotluckGroup extends Component<Props> {

  static defaultProps = {
  };

  constructor(props){
    super(props);

    potluck = {} = this.props.potluck

    value = {
      pricePerPerson: potluck.pricePerPerson,
      showPercentage: potluck.showPercentage

    }
    this.state = {
      isHiddenGroupPotluckFields: true,
      randomText: "FALSE",
      value: value
    }

    this.state = {
      members: potluck.members,
      value
    }
  }

  validateMemberForm(memberList){
    for(var i = 0;i<memberList.length;i++){
      if(memberList[i].username.length==0 || memberList[i].name.length==0){
        Alert.alert(
          'Missing value for member',
          'Please add name and username for member',
          {cancelable: true}
        )
        return false;
      }
    }
    return true;

  }

  onPress(){

    memberList = this.state.members
    var value = this.refs.form.getValue();
    if (value && this.validateMemberForm(memberList)) {

      values = {
        members: memberList,
        pricePerPerson: value.pricePerPerson,
        isGroupPotluck: true,
        showPercentage: value.showPercentage
      }
      this.props.submitPotluck(values)
    }

  }

  handleDeleteMember(memberID){
    this.setState({
      members: this.state.members.filter((s, sidx) => memberID !== sidx)
    });
  }

  handleMemberChangeUsername(text,idx) {
    const newMembers = this.state.members.map((member, midx) => {
      if (idx !== midx) return member;
      return { ...member, username: text };
    });

    this.setState({ members: newMembers });
  }

  handleMemberChangeName(text,idx) {
    const newMembers = this.state.members.map((member, midx) => {
      if (idx !== midx) return member;
      return { ...member, name: text };
    });

    this.setState({ members: newMembers });
  }




  handleAddMember(){
    this.setState({
      members: this.state.members.concat([{
        username: '',
        name: '',
        amount: 0,
        isAdmin: false
      }])
    });
  }

  onFormChange(value) {
    this.setState({value});
  }



  render() {

      return (
        <View style = {styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.main}>
          <Text style={styles.screenTitle}>Add a Group Potluck</Text>
        <Form
          value={this.state.value}
        ref="form"
        type={Potluck}
        options = {options}
        onChange={(text) => this.onFormChange(text)}
        />
      <Text>Members:</Text>
      {this.state.members.map((member, idx)=>{
        console.log(member.username != this.props.loggedInUser.username)
        if(member.username != this.props.loggedInUser.username){
          return(
        <View key ={idx}>
        <TextInput type="text" placeholder={`Member's #${idx + 1} username`} value={member.username} onChangeText={ (text) => this.handleMemberChangeUsername(text,idx)}/>
          <TextInput type="text" placeholder={`Member's #${idx + 1} name`}         value={member.name} onChangeText={ (text) => this.handleMemberChangeName(text,idx)}/>
          <TouchableHighlight onPress={this.handleDeleteMember.bind(this, idx)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>-</Text>
          </TouchableHighlight>
        </View>)
      }
    })}

          <TouchableHighlight onPress={this.handleAddMember.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Add Member</Text>
          </TouchableHighlight>

        <View style={styles.potluckActionButtons}>
        <View style={styles.updatePotluckButton}>
        <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Update Potluck</Text>
        </TouchableHighlight>
        </View>
        <View style={styles.cancelPotluckButton}>
        <TouchableHighlight onPress={this.props.cancelUpdatePotluck.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
        </View>
        </View>
        </KeyboardAwareScrollView>
        </View>

        );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    paddingBottom:10,
    paddingTop:10

  },
  createPotluckButton:{
    alignItems: 'center',
    padding: 5,
    backgroundColor:'#00FF00'
  },
  textInput: {
    borderColor: 'black',
    width: 100,
    height:30,
    borderBottomWidth: 3
  },
  screenTitle:{
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
  },
  potluckActionButtons:{
    flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20
  }

});

AddPotluckGroup.propTypes = {


};
