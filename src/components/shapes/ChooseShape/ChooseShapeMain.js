import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';
import Global from '../.././consts/Global'
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
import ChooseShapeOption from './ChooseShapeOption'
export default class ChooseShape extends React.Component{
  constructor(props){
    super(props); 
    this.chooseShapeOptions = Global.chooseShapeOptions
    this.numOfShapesSelect = Global.chooseShapeLength;
  }
    render() {
       return (
      <View styles={this.props.style}>	
      	<View styles={styles.mainChooseShape}>	
      		{this.chooseShapeOptions.map( (item,index) => {
      			let optionItem = this.chooseShapeOptions[index] || '';
      			return <ChooseShapeOption style={styles.optionChooseShape} item={optionItem}/>
      	 	})}
      	</View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
	mainChooseShape:{
		flex:1,
		flexDirection:'column',
		backgroundColor:'#f2f2f2',
		borderColor :'black',
		borderWidth:1
	},
	optionChooseShape:{
		flex:2,
		borderBottomWidth:1,
		borderBottomColor:'black'
	}
});

