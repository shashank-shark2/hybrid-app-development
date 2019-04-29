import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, TextInput, Platform, AppRegistry } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Text } from 'react-native-elements'
import { Kaede } from 'react-native-textinput-effects';
import { Madoka } from 'react-native-textinput-effects';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Screen3 extends Component {
    render() {
        return (
            <ScrollView style={{padding: 4}}>
                    <View style={{alignItems: 'center', paddingBottom: 50, paddingTop: 20}}>
                        <Text h4 style={{textAlign: 'center', color: 'black'}}>ADD YOUR PROGRESS</Text>
                    </View>

                    <View style={{paddingBottom: 30, paddingLeft: 10, paddingRight: 10}}>
                        <Kaede
                            label={'REPO NAME'}
                            inputPadding={16}
                        />
                    </View>

                    <View style={{paddingBottom: 30, paddingLeft: 10, paddingRight: 10}}> 
                        <Madoka
                            label={'Title'}
                            // this is used as active and passive border color
                            borderColor={'#aee2c9'}
                            inputPadding={16}
                            labelHeight={24}
                            labelStyle={{ color: '#008445'}}
                            inputStyle={{ color: '#000000' }}
                        />
                    </View>
                    
                    <View>
                        <Text style={{color: 'black', textAlign: 'center', paddingBottom: 10, paddingLeft: 10, paddingRight: 10}}>Few lines about your progress</Text>
                    </View>

                    <View style={{paddingBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                        <AutoGrowingTextInput 
                            minHeight={40}
                            maxHeight={200}
                            placeholder={'Enter your progress ...'}
                            placeholderTextColor='#C7C7CD'
                            style={styles.textInput}
                        />
                    </View>


                    <View style={{paddingBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                        <Button
                            title="POST YOUR PROGRESS"
                            type="outline"
                            raised
                            />
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
    },
    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start"
      },
      textInput: {
        paddingLeft: 10,
        fontSize: 17,
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 0,
    },
})