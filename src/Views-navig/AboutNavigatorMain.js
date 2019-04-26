import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TextHere}>About Screen</Text>
      </View>
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