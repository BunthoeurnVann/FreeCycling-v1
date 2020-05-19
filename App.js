import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';  
import Setting from './screens/Setting';
import MessageChat from './screens/MessageChat';
import Profile from './screens/Profile';

export default class App extends Component{
  render(){   
    return (  
      <View>  
        <Setting/>
      </View> 
    );
  }  
}
const styles = StyleSheet.create({  
  textHeader: {  
    fontSize: 25,  
    textAlign: 'center',  
    margin: 10,
    fontWeight: "bold",
    fontFamily: 'Montserrat',
    color: '#ffffff'
  },
  headerBar:{
    backgroundColor: '#F7C217',
    height: 65,
    alignItems: "center",
    justifyContent: "center"
  },
  inputSearch:{
    height: 36,
    borderRadius: 17,
    borderColor: '#707070',
    fontFamily: 'Montserrat',
    margin: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderWidth: 1
  }
});  