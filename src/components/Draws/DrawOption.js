import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ToolbarAndroid,
  TouchableHighlight,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Global from '../consts/Global';
let propsStyle = {};
export default class DrawOption extends React.Component{
  constructor(props){
    super(props); 
  }
  renderScene(){
    let option = this.props.text || '';
    if(!option || option == ''){
      return;
    }
    this.props.navigator.push({
      id:'Shapes'
    });
  }

  render() {
    return (
        <View>
          <Icon onPress={this.renderScene.bind(this)} name={this.props.icon} size={45} style={{top:this.props.y , left:this.props.x, position:'absolute'}}/>
          <Text style={{top:this.props.y - 20 , left:this.props.x-8, position:'absolute'}}>{this.props.text}</Text>
        </View>
    );
  }
}


let styles = StyleSheet.create({
});

