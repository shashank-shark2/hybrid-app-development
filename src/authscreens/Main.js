import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'react-native-firebase'
import BottomTabNavigator from '../MainNavigators/BottomTabNavigator'

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <BottomTabNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})