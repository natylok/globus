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
        <Text style={styles.logoText}>Globus Max</Text>
      </View>
    );
  }
}


let styles = StyleSheet.create({
  logoText:{
    color:"white",
    fontSize:24,
    textAlign:"center",
    paddingTop:10,
    textShadowColor:"black",
    textShadowOffset:{width:5, height: 5}
  }
});