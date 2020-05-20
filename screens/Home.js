import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Search from './Search';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageChat from './MessageChat';
import Post from './Post';
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>Home Screen</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} name={'ios-home'} size={25} />
          </View>
        ),
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} name={'ios-home'} size={25} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#F7C217' },
      }
    },
    Upload: {
      screen: Post,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} name={'ios-home'} size={25} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#B14297' },
      }
    },
    Chat: {
      screen: MessageChat,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} name={'ios-home'} size={25} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#F7C217' },
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} name={'ios-person'} size={25} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#B14297' },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#B14297' },
  }
);
export default createAppContainer(TabNavigator);