import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';
import Logo from './Logo'



export default class MainPage extends React.Component{
  render() {
    return (
      <View style={styles.mainPage}>
        <Logo style={styles.logo}/>
        <View style={styles.mainView}></View>
        <View style={styles.footerView}></View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  mainPage: {
    flex:1,
    backgroundColor:"#262626"
  },
  logo: {
    flex:0.8,
    borderBottomColor:"white",
    borderBottomWidth:1 
  },
  mainView: {
    flex:6
  },
  footerView:{
    flex:2
  }
});
