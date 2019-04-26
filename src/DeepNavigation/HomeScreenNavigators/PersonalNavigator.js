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


const TabNavigator = createMaterialBottomTabNavigator(  
  {  
    Screen1: { screen: Screen1,  
          navigationOptions:{  
              tabBarLabel:'SC1',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }  
      },  
      Screen2: { screen: Screen2,  
          navigationOptions:{  
              tabBarLabel:'SC2',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-calendar'}/>  
                  </View>),  
              activeColor: '#f60c0d',  
              inactiveColor: '#f65a22',  
              barStyle: { backgroundColor: '#f69b31' },  
          }  
      },  
      Screen3: { screen: Screen3,  
          navigationOptions:{  
              tabBarLabel:'SC3',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                  </View>),  
              activeColor: '#615af6',  
              inactiveColor: '#46f6d7',  
              barStyle: { backgroundColor: '#67baf6' },  
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
          }  
      },  
  },  
  {  
    shifting: false,
    tabBarPosition: 'bottom',
    initialRouteName: "Screen1",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },
    
  },  
);  

const StackNavig = createStackNavigator({
    MainHomeScreen : {
        screen: HomeNavigatorMain,
    },
    deepFlow: TabNavigator,
},
{
    initialRouteName: "MainHomeScreen",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})

export default createAppContainer(StackNavig);  