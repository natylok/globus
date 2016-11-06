import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';
import Global from './consts/Global'
import DrawOption from './Draws/DrawOption'
import Icon from 'react-native-vector-icons/Ionicons';


export default class SelectCategoreis extends React.Component{
  constructor(props){
    super(props)
    this.leftOption = Global.constOptionLeft;
    this.rightOption = Global.constOptionRight;
    this.firstOptionsHeight = 100
    this.diffDistanceBetweenOptions = 150;
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.mainText}>Select a Category:</Text>
         {this.props.categoriesList.map((item,index) => {
            let posX = index % 2 != 0 ? this.leftOption:this.rightOption; 
            let posY;
            if(index == 0 || index == 1){
              posY = this.firstOptionsHeight;
            }  
            else{
              posY = index % 2 != 0 ? (index-1)*this.diffDistanceBetweenOptions : index*this.diffDistanceBetweenOptions;
            }
            return (<DrawOption navigator={this.props.navigator} text={item.text} key={index} x={posX} y={posY} index={index} icon={item.icon}/> ); })}         
      </View>
    );
  }
}


let styles = StyleSheet.create({
    mainText:{
    fontSize: 23,
    textAlign :'center',
    paddingTop:25,
    textShadowOffset:{width:1,height:1}
  }
});