import React, { Component } from 'react';  
import {Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';  
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EachMessageChat from './EachMessageChat';
class MessageChat extends Component{ 
  state = { people: [
    { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '1'},
    { name: 'Monaco Runka', date: '03 Jan 2019', title: 'Hate you so much', image: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq", id: '2'},
    { name: 'emelie johnson', date: '10 Apr 2020', title: 'Klean by', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '3'},
    { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '4'},
    { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '5'},
    { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '6'},
    { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '7'},
    { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '8'},
    { name: 'emelie johnson', date: '10 Apr 2018', title: 'I love you', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '9'},
 ]} 
  render(){
    return (  
      <View>  
        <View style={styles.headerBar}>
          <Text style={styles.textHeader}>Chat</Text>
        </View>
        <View>
          <TextInput style={styles.inputSearch} placeholder="Search"/>
        </View>
        <ScrollView>
        <View>
          <FlatList
          keyExtractor = {(item)=>item.id}
          data = {this.state.people}
          renderItem={({ item }) =>(
          <TouchableOpacity onPress={() => this.props.navigation.navigate('EachMessageChat')}>
            <View style={styles.container}>
              <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text  style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
          )}
          />
        </View>
        </ScrollView>
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
  },
  container:{
    marginLeft:20,
    marginRight: 20,
    marginBottom: 20
  },
  itemName:{
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: "bold",
    color: '#707070'
  },
  itemTitle:{
    fontFamily: 'Regular',
    fontSize: 14,
    color: '#707070'
  },
  itemDate:{
    marginTop: 20,
    fontFamily: 'Regular',
    fontSize: 11,
    color: '#707070'
  }
});
const AppNavigator = createStackNavigator(  
  { 
      MessageChat:{
        screen: MessageChat,
        navigationOptions:{
          header: null,
        }
      },
      EachMessageChat:{
        screen: EachMessageChat,
        navigationOptions:{
          header: null
        }
      }
  },  
  {  
      initialRouteName: "MessageChat"  
  }  
);    
export default createAppContainer(AppNavigator);