const Global = {};

//Main options : 
Global.categoriesList = [{icon:"md-add-circle",text:"Shapes"},
						{icon:"md-analytics",text:"Equations"},
						{icon:"md-cloud-upload",text:"Upload"},
						{icon:"md-contact",text:"Contact"}];
						
Global.constOptionSize = 40;
Global.constOptionLeft = 80;
Global.constOptionRight = 250;
Global.constOptionStorke = "black";


//Choose shape:
Global.chooseShapeOptions = [{name:'Rectangle'},
							 {name:'Square'},	
							 {name:'Circle'}];
Global.chooseShapeLength = 	Global.chooseShapeOptions.length;
Global.chooseShapeWidth = 100;						 
export default Global;


