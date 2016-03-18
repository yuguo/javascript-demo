// math.js
　　define(function (){
	// var
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
		var multiple = function(x,y,z){
			return x*y*z;
		};
　　　　return {
　　　　　　add: add,
			multiple: multiple
　　　　};
　　});