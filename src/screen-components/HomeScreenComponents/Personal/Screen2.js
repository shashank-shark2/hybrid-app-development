import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class Screen2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextHere}>Screen 2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    TextHere: {
        textAlign: 'center',
    }
})