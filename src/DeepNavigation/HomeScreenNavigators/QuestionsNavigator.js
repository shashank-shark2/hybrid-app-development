import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {StyleSheet, Text, View,Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

// importing explicit screens
// import HomeNavigatorMain from '../../Views-navig/HomeNavigatorMain'
// import Screen1 from '../../screen-components/HomeScreenComponents/Personal/Screen1'
// import Screen2 from '../../screen-components/HomeScreenComponents/Personal/Screen2'
// import Screen3 from '../../screen-components/HomeScreenComponents/Personal/Screen3'
// import Screen4 from '../../screen-components/HomeScreenComponents/Personal/Screen4'

import QuestionsScreen1 from '../../screen-components/HomeScreenComponents/Questions/QuestionsScreen1'
import QuestionsScreen2 from '../../screen-components/HomeScreenComponents/Questions/QuestionsScreen2'
import QuestionsScreen3 from '../../screen-components/HomeScreenComponents/Questions/QuestionsScreen3'
import QuestionsScreen4 from '../../screen-components/HomeScreenComponents/Questions/QuestionsScreen4'


const TabNavigatorGridQuestions = createMaterialBottomTabNavigator(
  {  
    QuestionsScreen1: { screen: QuestionsScreen1,  
          navigationOptions:{  
              tabBarLabel:'SC1',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),
                  activeColor: '#000000',  
                  inactiveColor: '#ffffff',  
                  barStyle: { backgroundColor: '#ffffff' },    
          }  
      },  
      QuestionsScreen2: { screen: QuestionsScreen2,  
          navigationOptions:{  
              tabBarLabel:'SC2',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-calendar'}/>  
                  </View>),  
              activeColor: '#000000',  
              inactiveColor: '#ffffff',  
              barStyle: { backgroundColor: '#ffffff' },  
          }  
      },  
      QuestionsScreen3: { screen: QuestionsScreen3,  
          navigationOptions:{  
              tabBarLabel:'SC3',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                  </View>),  
              activeColor: '#000000',  
              inactiveColor: '#ffffff',  
              barStyle: { backgroundColor: '#ffffff' },  
          }  
      },  
      QuestionsScreen4: {  
          screen: QuestionsScreen4,  
          navigationOptions:{  
              tabBarLabel:'SC4',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                  </View>),
                  activeColor: '#000000',  
                  inactiveColor: '#ffffff',  
                  barStyle: { backgroundColor: '#ffffff' }, 
          }  
      },  
  },  
  {  
    shifting: false,
    tabBarPosition: 'bottom',
    initialRouteName: "QuestionsScreen1",  
    activeColor: '#000000',  
    inactiveColor: '#ffffff',  
    barStyle: { backgroundColor: '#3BAD87' },
    
  },  
);  

// const StackNavig = createStackNavigator({
//     MainHomeScreen : {
//         screen: HomeNavigatorMain,
//     },
//     YouGridNavigationScreen: TabNavigatorGridYou, 
// },
// {
//     initialRouteName: "MainHomeScreen",
//     headerMode: 'none',
//     navigationOptions: {
//       headerVisible: false,
//     }
// })

export default createAppContainer(TabNavigatorGridQuestions);  