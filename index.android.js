
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';
import MainPage from './src/components/MainPage';
import MainShape from './src/components/shapes/MainShape';




class Navigation extends React.Component{
  render() {
    return (
      <Navigator
        initialRoute={{id: 'MainPage'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'MainPage':
        return (<MainPage navigator={navigator} title="mainPage"/>);
      case 'Shapes' : 
        return (<MainShape navigator={navigator} title="shapes"/>);
    }
  }
}
AppRegistry.registerComponent('reactNatiNati', () => Navigation);
