import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';
import dictionary from './Database'
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
  
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen
})

const AppContainer = createAppContainer(AppNavigator)
