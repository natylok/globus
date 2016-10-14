import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';

export default class Second extends React.Component{
  navFirst(){
    this.props.navigator.push({id:'first'});
  }
  render() {
    return (
      <View >
        <ToolbarAndroid
                        title={this.props.title}
                        
                        titleColor={'#FFFFFF'}/>
        <TouchableHighlight onPress={this.navFirst.bind(this)}>
          <Text>Navigate to first screen</Text>
        </TouchableHighlight>
      </View>
    );
  }
};
