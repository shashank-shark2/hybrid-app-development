import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ExampleList from '../screen-components/ProjectComponents/ExampleList'

export default class Projects extends Component {
  render() {
    return (
      <ExampleList />
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