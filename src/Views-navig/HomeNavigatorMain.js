import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

// importing the navigation screens
import PersonalScreen from '../DeepNavigation/HomeScreenNavigators/PersonalNavigator'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "You",      color:"#FFFFFF", members:8,  image:"https://img.icons8.com/color/70/000000/name.png", navigName:'Screen1'},
        {id:1, title: "Questions",     color:"#FFFFFF", members:6,  image:"https://img.icons8.com/office/70/000000/home-page.png", navigName:'QuestionsScreen1'},
        {id:2, title: "Subject",     color:"#FFFFFF", members:12, image:"https://img.icons8.com/color/70/000000/two-hearts.png", navigName:'SubjectScreen1'} ,
        {id:3, title: "Tech-Stack",   color:"#FFFFFF", members:5,  image:"https://img.icons8.com/color/70/000000/family.png", navigName:''} ,
        {id:4, title: "Research",  color:"#FFFFFF", members:6,  image:"https://img.icons8.com/color/70/000000/groups.png", navigName:''} ,
        {id:5, title: "Your Projects",   color:"#FFFFFF", members:7,  image:"https://img.icons8.com/color/70/000000/classroom.png", navigName:''} ,
        {id:6, title: "Quick notes",   color:"#FFFFFF", members:8,  image:"https://img.icons8.com/dusk/70/000000/checklist.png", navigName:''} ,
        {id:8, title: "Team members",    color:"#FFFFFF", members:23, image:"https://img.icons8.com/dusk/70/000000/globe-earth.png", navigName:''} ,
        {id:9, title: "Code Links", color:"#FFFFFF", members:45, image:"https://img.icons8.com/color/70/000000/to-do.png", navigName:''} ,
        {id:10, title: "Achievements",     color:"#FFFFFF", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png", navigName:'AchieveScreen1'} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.props.navigation.navigate(item.navigName)}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/>
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members} members</Text>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#000000",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#000000",
    fontWeight:'bold'
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     