import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {StyleSheet, Text, View,Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

import TechStackScreen1 from '../../screen-components/HomeScreenComponents/TechStack/TechStackScreen1'
import TechStackScreen2 from '../../screen-components/HomeScreenComponents/TechStack/TechStackScreen2'
import TechStackScreen3 from '../../screen-components/HomeScreenComponents/TechStack/TechStackScreen3'
import TechStackScreen4 from '../../screen-components/HomeScreenComponents/TechStack/TechStackScreen4'

const TabNavigatorGridTechStack = createMaterialBottomTabNavigator(
  {  
    TechStackScreen1: { screen: TechStackScreen1,  
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
      TechStackScreen2: { screen: TechStackScreen2,  
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
      TechStackScreen3: { screen: TechStackScreen3,  
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
      TechStackScreen4: {  
          screen: TechStackScreen4,  
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
    initialRouteName: "TechStackScreen1",  
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

export default createAppContainer(TabNavigatorGridTechStack);  