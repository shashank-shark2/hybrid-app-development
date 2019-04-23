import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Loading from './src/authscreens/Loading'
import SignUp from './src/authscreens/SignUp'
import Login from './src/authscreens/Login'
import Main from './src/authscreens/Main'

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
