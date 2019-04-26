import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

// importing the navigation screens
// import PersonalNavigator from '../DeepNavigation/HomeScreenNavigators/PersonalNavigator' 
import MainNavigatorForAllGrid from '../DeepNavigation/HomeScreenNavigators/MainNavigatorForAllGrid'
export default class Home extends Component{
  render(){
    return (
      <MainNavigatorForAllGrid />
    )
  }
}