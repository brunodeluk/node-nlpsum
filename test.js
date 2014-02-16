var toolbox 	= require('toolbox');
var nlpsum		= require('nlpsum').main;

var sum = new nlpsum();

toolbox.file.read("example.txt", function(content) {
	var summary = sum.fractal(content, 5);
	console.log("summary data",JSON.stringify(summary.text, null, 4));
	toolbox.file.write("example-data.json", JSON.stringify(summary, null, 4));
	toolbox.file.write("example-summary.txt", summary.text);
	
});