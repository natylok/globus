
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';
import MainPage from './src/components/MainPage';




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
    }
  }
}

AppRegistry.registerComponent('reactNatiNati', () => Navigation);
