import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Example from '../screen-components/EventComponents/index'

export default class Events extends Component {
  render() {
    return (
      <Example />
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