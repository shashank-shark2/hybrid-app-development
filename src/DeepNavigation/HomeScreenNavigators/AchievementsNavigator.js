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

import AchieveScreen1 from '../../screen-components/HomeScreenComponents/Achievements/AchieveScreen1'
import AchieveScreen2 from '../../screen-components/HomeScreenComponents/Achievements/AchieveScreen2'
import AchieveScreen3 from '../../screen-components/HomeScreenComponents/Achievements/AchieveScreen3'
import AchieveScreen4 from '../../screen-components/HomeScreenComponents/Achievements/AchieveScreen4'

const TabNavigatorGridAchievement = createMaterialBottomTabNavigator(
  {  
    AchieveScreen1: { screen: AchieveScreen1,  
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
      AchieveScreen2: { screen: AchieveScreen2,  
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
      AchieveScreen3: { screen: AchieveScreen3,  
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
      AchieveScreen4: {  
          screen: AchieveScreen4,  
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
    initialRouteName: "AchieveScreen1",  
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

export default createAppContainer(TabNavigatorGridAchievement);  