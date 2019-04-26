import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import ProfileComponent from '../screen-components/ProfileComponent/ProfileComponent'
import ProfileComp from '../screen-components/ProfileComponent/screens/Profile1/index'

export default class Profile extends Component {
  render() {
    return (
      <ProfileComp />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  TextHere: {
    textAlign: 'center'
  }
})