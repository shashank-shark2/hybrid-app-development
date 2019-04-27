import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {StyleSheet, Text, View,Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

import SubjectScreen1 from '../../screen-components/HomeScreenComponents/Subject/SubjectScreen1'
import SubjectScreen2 from '../../screen-components/HomeScreenComponents/Subject/SubjectScreen2'
import SubjectScreen3 from '../../screen-components/HomeScreenComponents/Subject/SubjectScreen3'
import SubjectScreen4 from '../../screen-components/HomeScreenComponents/Subject/SubjectScreen4'

const TabNavigatorGridSubject = createMaterialBottomTabNavigator(
  {  
    SubjectScreen1: { screen: SubjectScreen1,  
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
      SubjectScreen2: { screen: SubjectScreen2,  
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
      SubjectScreen3: { screen: SubjectScreen3,  
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
      SubjectScreen4: {  
          screen: SubjectScreen4,  
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
    initialRouteName: "SubjectScreen1",  
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

export default createAppContainer(TabNavigatorGridSubject);  