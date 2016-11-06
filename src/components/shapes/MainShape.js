import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';
import ChooseShapeMain from './ChooseShape/ChooseShapeMain' 

export default class MainShape extends React.Component{
  constructor(props){
    super(props); 
  }
    render() {
       return (
      <View >	
      	<View>
      		<Text>Click on one of the shapes to create new shapre</Text>
      	</View>     	
      	<View>
      		<ChooseShapeMain style={styles.chooseShape}></ChooseShapeMain>
      	</View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
	mainShapeCreate:{
		flex:1,
		flexDirection:'row',
	},
	chooseShape:{
		flex:2,
		alignItems: 'flex-start'
	}
});

