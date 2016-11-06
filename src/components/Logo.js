import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';



export default class Logo extends React.Component{
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.logoText}>Sharing Math</Text>
      </View>
    );
  }
}


let styles = StyleSheet.create({
  logoText:{
    color:"#F5DE74",
    fontFamily:"sans-serif",
    fontSize:18,
    paddingTop:11,
    textAlign:"center"
  }
});