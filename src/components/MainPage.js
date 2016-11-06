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
import SelectCategoreis from './selectCategoreis'
import Global from './consts/Global'


export default class MainPage extends React.Component{
  constructor(props){
    super(props); 
  }
    render() {
   
    return (
      <View style={styles.mainPage}>
        <Logo style={styles.Logo}/>
        <SelectCategoreis navigator={this.props.navigator} style={styles.SelectCategoreis} categoriesList={Global.categoriesList}/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  mainPage: {
    flex:1,
    backgroundColor:"#F1F1F1"
  },
  Logo:{
    flex:0.7,
    backgroundColor:"#1E1E1E"
  },
  SelectCategoreis:{
    flex:8
  }
});

