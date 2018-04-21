// class contenant les graphes:
// FirstGraph
// SecondGraph
// ThirdGraph
// ForthGraph

$(document).ready(function()
{



	//var tab=[[5,3],[15,4],[3,10],[8,5],[20,8]];

  var table = new Array();
	var svg=d3.select(".SecondGraph").append("svg");

	var echelleX=d3.scale.linear()
	                .domain([0,100])
	                .range([30,370]);
	var echelleY=d3.scale.linear()
	                .domain([0,80])
	                .range([370,30]);
	var xAxe = d3.svg.axis()
	                  .scale(echelleX)
	                  .orient("bottom");
	var yAxe = d3.svg.axis()
	                  .scale(echelleY)
	                  .orient("left");
	//var svg=body.append("svg");
	svg.attr({"width":"700px","height":"560px"})//surface oh the graphe(perimeter)
	svg.style("border","1px solid red");// the border of the graphe
	
	//****************Dessin des cercles******************//
	
		
	for (var i = 0 ; i< 1500 ; i++) {
		
		table[i]=[i , i*i ];
		svg.selectAll("circle")
		    .data(table)
		    .enter()
		    .append("circle")
        //.duration(100)
		    .attr({"r":"1px","fill":"black","stroke":"black"})//coordonnées des cercles
		    .attr("cx",function(d,i){
		        return (echelleX(d[0]));
		    })
		    .attr("cy",function(d,i){
		        return (echelleY(d[1]));
		    })
		    ;
	}
	
	svg.append("g")

	    .style("font-family","sans-serif")
	    .style("font-size","10px")
	    .attr({"fill": "none","stroke": "black"})
      
	    .attr("transform","translate(0,370)")
	    .call(xAxe);
	svg.append("g")
	    .style("font-family","sans-serif")
	    .style("font-size", "11px")
	    .attr({"fill": "none","stroke": "black"})
	    .attr("transform","translate(30,0)")
	    .call(yAxe);




	    //**********************µSecondGraph**************************






		var margin = {top: 20, right: 20, bottom: 30, left: 50},
	    width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;
		// parse the date / time
		var parseTime = d3.timeParse("%Y");
		// set the ranges
		var x = d3.scaleTime().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);
		// define the line
		var valueline = d3.line()
		    .x(function(d) { return x(d.Date); })
		    .y(function(d) { return y(d.Imports); });
		// define the line
		var valueline2 = d3.line()
		    .x(function(d) { return x(d.Date); })
		    .y(function(d) { return y(d.Exports); });
		  
		// append the svg obgect to the body of the page
		// appends a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		var svg1 = d3.select(".SecondGraph").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform",
		          "translate(" + margin.left + "," + margin.top + ")");

		function draw(data, country) {

		  var data = data[country];
		  
		  // format the data
		  data.forEach(function(d) {
		      d.Date = parseTime(d.Date);
		      d.Imports = +d.Imports;
		      d.Exports = +d.Exports;
		  });
		  
		  // sort years ascending
		  data.sort(function(a, b){
		    return a["Date"]-b["Date"];
		  })
		 
		  // Scale the range of the data
		  x.domain(d3.extent(data, function(d) { return d.Date; }));
		  y.domain([0, d3.max(data, function(d) {
		    return Math.max(d.Imports, d.Exports); })]);
		  
		  // Add the valueline path.
		  svg1.append("path")
		      .data([data])
		      .attr("class", "line")
		      .attr("d", valueline);
		  // Add the valueline path.
		  svg1.append("path")
		      .data([data])
		      .attr("class", "line")
		      .attr("d", valueline2);  
		  // Add the X Axis
		  svg1.append("g")
		      .attr("transform", "translate(0," + height + ")")
		      .call(d3.axisBottom(x));
		  // Add the Y Axis
		  svg1.append("g")
		      .call(d3.axisLeft(y));
		  }
		// Get the data
		d3.json("data.json", function(error, data) {
		  
		  if (error) throw error;
		  
		  // trigger render
		  draw(data, "Afghanistan");
});
});