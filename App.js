/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from './data.json'
import VideoItem from './android/app/components/VideoItem';

export default class App extends Component {
render() {
  return (
    <View style = {styles.container}> 
    <View style = {styles.navbar}>
      <Image source = {require('./android/app/src/images/logo.png')} style = {{width: 98, height: 22}}/>
    <View style = {styles.rightNav}>
      <TouchableOpacity>
      <Icon style = {styles.navItem} name = "search" size = {25} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon style = {styles.navItem} name = "account-circle" size = {25} />
      </TouchableOpacity>

    </View>
    </View>
    <View style = {styles.body}>
       {/* <VideoItem video = {data.items[0]}/> */}
       <FlatList 
       data = {data.items}
       renderItem ={(video)=><VideoItem video = {video.item} />}
       keyExtractor = {(item) => item.id} />
    </View>
    <View style = {styles.tabBar}>
      <TouchableOpacity style = {styles.tabItem}>
        <Icon name = 'home' size = {25} />
        <Text style = {styles.tabTitle}>Home</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.tabItem}>
        <Icon name = 'whatshot' size = {25} />
        <Text style = {styles.tabTitle}>Trending</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.tabItem}>
        <Icon name = 'subscriptions' size = {25} />
        <Text style = {styles.tabTitle}>Subscriptions</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.tabItem}>
        <Icon name = 'folder' size = {25} />
        <Text style = {styles.tabTitle}>Library</Text> 
      </TouchableOpacity>

    </View>
    </View>

  );
}
}
const styles = StyleSheet.create({

container: {
  flex: 1
},
navbar: {
  height: 55,
  backgroundColor: 'white',
  elevation: 3,
  paddingHorizontal: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
},
rightNav: {
  flexDirection: 'row',
},
navItem: {
  marginLeft: 25
},
body: {
flex: 1
}, 
tabBar: {
backgroundColor: 'white',
height: 60,
borderTopWidth: 0.5,
borderColor: '#E5E5E5',
flexDirection: 'row',
justifyContent: 'space-around'
},
tabItem: {
  alignItems: "center",
  justifyContent: "center"
},
tabTitle: {
  fontSize: 11,
  color: '#3c3c3c',
  paddingTop: 4
} 

});

