// class contenant les graphes:
// FirstGraph
// SecondGraph
// ThirdGraph
// ForthGraph

$(document).ready(function()
{

		


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
    .x(function(d) { return x(d.period); })
    .y(function(d) { return y(d.nbFirms); });
// define the line
var valueline2 = d3.line()
    .x(function(d) { return x(d.period); })
    .y(function(d) { return y(d.nbNoJob); });
  
// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(".FirstGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

function draw(data, periods) {

  var data = data[periods];
 // console.log(data);
  // format the data
  data.forEach(function(d) {
      d.period = parseTime(d.period);
      d.nbFirms = +d.nbFirms;
      d.nbNoJob = +d.nbNoJob;
         //console.log(d);
  });
  
  // console.log(data);
  // sort years ascending
  data.sort(function(a, b){
    return a["period"]-b["period"];
  })
 
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.period; }));
  y.domain([0, d3.max(data, function(d) {
    return Math.max(d.nbFirms, d.nbNoJob); })]);
  
  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);
  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline2);  
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));
  }
// Get the data
d3.json("data.json", function(error, data) {
  
  if (error) throw error;
  
  // trigger render
  draw(data, "periods");
});
});