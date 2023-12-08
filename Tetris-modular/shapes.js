
// Modify shape and color of game pieces here
// SHAPES is an array in JS,an array holds groups of items or elements
// you can tell it's an array because each element is surrounded with 
// square backets '[]' & each element is seperated by a comma ','
// SHAPES is an array of nested arrays. 
// the ones and zeros are the elements in the innermost array.
// then they are group together to form the shape array
// then all the shapes are listed in the SHAPES array.
var SHAPES = [ //an array
	[ // <-- opening bracket of a nested array
		[0, 1, 0, 0], //<-- a nested array of numbers
		[0, 1, 0, 0], // notice that each has an opening '[' & closing ']' and comma.
		[0, 1, 0, 0],// the ones and zeros draw the shape
		[0, 1, 0, 0]
	], // < -- closing bracket and comma of nested array
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	[
		[1, 1],
		[1, 1] 
   //you can add a new shape.      
	]  //< ---comma goes there,  
    // just add a comma after the above closing bracket ']'
    // and add square brackets like '[]'
    //   then inside the square brackets put the numbers
    // seperated by commas in more square brackets. like:
    // [
    // [0, 1, 0], this pattern would form a cross
    // [1, 1, 1],
    // [0, 1, 0]
    // ]  < -- no comma necessary after last bracket last bracket
];
// color of SHAPES
var COLORS = [
	"#fff", // white
	"#0000ff", //blue
	"#00ff00", // green
	"#ffff00", // yellow
	"#9900ff", // purple
	"#ff9902", //orange
	"#ff33cc", // pink
	"#ff0000" //red
];
/* To change the colors 
	user the W3C color picker to find the color you want
	and replace the one you want to change with the #XXXXX that you
	want. for example #fff is the code for white but if you wanted
	to replace it with yellow you could use #ffff00 instead. Here
	is the link to the color picker : https://www.w3schools.com/colors/colors_picker.asp
	check it out! */
	
	//be careful to not overwrite the quotes " " or the commas , 