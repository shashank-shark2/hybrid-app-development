import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {StyleSheet, Text, View,Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

// importing explicit screens
import HomeNavigatorMain from '../../Views-navig/HomeNavigatorMain'
import Screen1 from '../../screen-components/HomeScreenComponents/Personal/Screen1'
import Screen2 from '../../screen-components/HomeScreenComponents/Personal/Screen2'
import Screen3 from '../../screen-components/HomeScreenComponents/Personal/Screen3'
import Screen4 from '../../screen-components/HomeScreenComponents/Personal/Screen4'


const TabNavigatorGridYou = createMaterialBottomTabNavigator(
  {  
    Screen1: { screen: Screen1,  
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
      Screen2: { screen: Screen2,  
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
      Screen3: { screen: Screen3,  
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
      Screen4: {  
          screen: Screen4,  
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
    initialRouteName: "Screen1",  
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

export default createAppContainer(TabNavigatorGridYou);  