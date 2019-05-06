import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Loading from './src/authscreens/Loading'
import SignUp from './src/authscreens/SignUp'
import Login from './src/authscreens/Login'
import Main from './src/authscreens/Main'
import SplashScreen from 'react-native-splash-screen'

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default createAppContainer(App);