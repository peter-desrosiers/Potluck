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
  potluckName: t.String,
  potluckDescription: t.String,
  dateDue: t.Date,
  showPercentage: t.Boolean,
  pricePerPerson: t.Number,
});

let myFormatFunction = (format,date) =>{
            return moment(date).format(format);
        }

const options = {
  fields: {
    potluckName: {
      label: 'Potluck Name',
    },
    potluckDescription:{
      label: 'Description'
    },
    isGroupPotluck:{
      label: 'Is this a group potluck?'
    },
    dateDue:{
      label: 'Due Date',
      mode: 'date',
      config:{
                format:(date) => myFormatFunction("DD MMM YYYY",date)
    },
    showPercentage:{
      label: 'Show percentage progress of each user?'
    },
    pricePerPerson:{
      label: 'How much is each person paying?'
    },
    }
  },
};

const Form = t.form.Form;


export default class AddPotluckPersonal extends Component<Props> {

  static defaultProps = {
  };

  constructor(props){
    super(props);
    this.state = {
      members:[{
        username: '',
        name: '',
        amount: 0,
        isAdmin: false

      }]
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

    loggedInUserMemberInfo = {
        username: this.props.loggedInUser.username,
        name: this.props.loggedInUser.name,
        amount: 0,
        isAdmin: true
      }

    memberList = this.state.members.concat(loggedInUserMemberInfo)
    var value = this.refs.form.getValue();
    if (value && this.validateMemberForm(memberList)) {

      values = {
        potluckName: value.potluckName,
        potluckDescription: value.potluckDescription,
        dateDue: value.dateDue,
        members: memberList,
        pricePerPerson: value.pricePerPerson,
        isGroupPotluck: true,
        showPercentage: value.showPercentage,

      }
      console.log(values)
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
        <Text style={styles.screenTitle}>Create a new Potluck</Text>
        <Form
        value={this.state.value}
        ref="form"
        type={Potluck}
        options = {options}
        onChange={(text) => this.onFormChange(text)}
        />
        <Text>Members:</Text>
        {this.state.members.map((member, idx)=>(
        <View key ={idx}>
        <TextInput type="text" placeholder={"Member\'s username"} onChangeText={ (text) => this.handleMemberChangeUsername(text,idx)}/>
        <TextInput type="text" placeholder={"Member\'s name"} onChangeText={ (text) => this.handleMemberChangeName(text,idx)}/>
        <TouchableHighlight onPress={this.handleDeleteMember.bind(this, idx)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Remove Member</Text>
        </TouchableHighlight>
        </View>
      ))}

      <TouchableHighlight onPress={this.handleAddMember.bind(this)} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Add Member</Text>
      </TouchableHighlight>

      <View style={styles.createPotluckButton}>
      <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
      <Text >Create Potluck</Text>
      </TouchableHighlight>
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
    paddingTop:10,
    backgroundColor: '#FFFFFF'

  },
  createPotluckButton:{
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
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
  }

});


AddPotluckPersonal.propTypes = {


};
