import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';
import Global from '~/consts/Global'
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
export default class ChooseShapeOption extends React.Component{
  constructor(props){
    super(props); 
    
  }
    render() {
       return (
      <View styles={this.props.style}>	
          <Svg
              height="100"
              width="100"
          >
             <Circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="blue"
                  strokeWidth="2.5"
                  fill="green"
                />
          </Svg>
      </View>
    );
  }
}

let styles = StyleSheet.create({

});

