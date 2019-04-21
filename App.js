import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Dimensions } from 'react-native';

import firebase from 'react-native-firebase';
import FadingSlides from 'react-native-fading-slides'

const { width, height } = Dimensions.get('window');


const slides = [
  {
    image: require('./assets/sapphire.png'),
    imageWidth: 250,
    imageHeight: 250,
    title: 'Sapphire Coders',
    subtitle: 'SSCW - SVIT',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
  {
    image: require('./assets/sapphire1.png'),
    imageWidth: 250,
    imageHeight: 250,
    title: 'Shashank J',
    subtitle: 'sscw',
    titleColor: '#fff',
    subtitleColor: '#fff',
  }
]

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <FadingSlides slides={slides} fadeDuration={900} stillDuration={1700} height={height} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});