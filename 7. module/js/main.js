// alert('success!');

require.config({
　　　　paths: {
　　　　　　"jquery": "../bower_components/jquery/dist/jquery.min",
　　　　　　"underscore": "../bower_components/underscore/underscore-min",
　　　　　　"backbone": "../bower_components/backbone/backbone-min"
　　　　}
　　});

require(['jquery', 'underscore', 'backbone', 'math'], function ($, _, Backbone, math){
　　　　// some code here
	alert(math.multiple(1,2,4));
　　});