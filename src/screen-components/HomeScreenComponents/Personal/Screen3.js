import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Text } from 'react-native-elements'

export default class Screen3 extends Component {
    render() {
        return (
            <ScrollView>
                    <View style={{alignItems: 'center'}}>
                        <Text h4 style={{textAlign: 'center', color: 'black'}}>ADD YOUR PROGRESS</Text>
                    </View>
            </ScrollView>
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