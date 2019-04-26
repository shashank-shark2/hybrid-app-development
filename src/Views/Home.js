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
import PersonalNavigator from '../DeepNavigation/HomeScreenNavigators/PersonalNavigator' 

export default class Home extends Component{
  render(){
    return (
      <PersonalNavigator />
    )
  }
}