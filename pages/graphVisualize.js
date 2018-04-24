//var parseTime = d3.timeParse("%Y");
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
var elapsed_time;
var timePause;
var timeStart;
var timePercentage;
var speed;
class Graphs{
		constructor(classGraph ){
			this.x = null;
			this.y= null;
			//this.valueLine = null;
			this._data = null;
			this._paths = null;
			this._progress = null;
			this._duration = null;
			this._delay = null;
			this._svg = null;
			this._valueLine = null;
			this.classGraph = classGraph;
			this._totalLength=null;
			this._timeStart=null;
		
		}
		
		
		setAxis(){
			this.x = d3.scaleTime().range([0 , width]);
			this.y = d3.scaleLinear().range([height , 0]);
		};
		
		setFrame(){
		// append the svg object to the class we want to draw in
  		// appends a 'group' element to 'svg'
  		// moves the 'group' element to the top left margin
			this._svg = d3.select(this.classGraph).append("svg")
			.attr("width", width + margin.left + margin.right)
     		.attr("height", height + margin.top + margin.bottom)
    		.append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

            //********************************
		};
		start (data , title , period, YValues){
			
			this._data = data[title];
			
			//sorting data ascending
			this._data.sort(function(a , b )
			{
				return a[period]-b[period];
			})

			//creating the drawn valueLine
			this._valueLine = d3.line().x(d => this.x(d[period]))
			.y(d => this.y(d[YValues]));


			


			//Scale the range of data
			this.x.domain(d3.extent(this._data, function(d) { return d[period]; }));
			this.y.domain([0, d3.max(this._data, function(d) {
    			return Math.max(d[period], d[YValues]); })]);

			//add the valueLine path.
			this._paths = this._svg.append("path")
			.data([this._data])
			.attr("class" , "line")
			.attr("d" , this._valueLine);

			//add the X axis
		  	this._svg.append("g")
      		.attr("transform", "translate(0," + height + ")")
      		.call(d3.axisBottom(this.x));
 			// Add the Y Axis
  			this._svg.append("g")
      		.call(d3.axisLeft(this.y));
			
		};

		animate(duration , delay , startingPoint , endingPoint){
			this._duration=duration;
			timeStart = new Date();
			//console.log(timeStart);
			this._totalLength = this._paths.node().getTotalLength();
			this._paths.attr("stroke-dasharray", this._totalLength + " " + this._totalLength)
			.attr("stroke-dashoffset", endingPoint)
			.transition()
			.delay(delay)
			.duration(this._duration)
			.ease(d3.easeLinear)
			.attr("stroke-dashoffset" , startingPoint)
			/*.transition()
			.delay(delay)
			.duration(this._duration)
			.ease(d3.easeLinear)
			.attr("stroke-dashoffset" , endingPoint)*/;
		};
		
		pause(){
			var c = d3.select("path");
			c.transition().duration(0);
		};


		pauseAll(){};
		filter(){};
		changeColor(){};
		changePeriod(){};
		changeSpeed(){};
		mouseOver(){};
		zoomGraph(){};
		showDetail(){};
		
		timeReset(){
			timePercentage= elapsed_time/this._duration;		
		};


};
$(document).ready(function()
{
	$('.Lancer').on('click' , function(){
		
		var g = new Graphs(".graphic");
		

		var periodsOfGraph= new Array();

		speed = document.getElementById("speed").value;
		console.log(speed);

		d3.json("dataTest.json" , function(error, data){
			if (error) {
				//console.log("error while recovering");
				return;
			}
			else {
					//we recover the vertex containing periods.
				data["periods"].forEach(function(d){
					periodsOfGraph.push( d['period']);
				});
				
				g.setAxis();
				g.setFrame();
				g.start(data , "periods" , 'period' , 'nbNoJob');
				g.animate(speed , 500 ,0, 1739.0411376953125);
				
			}

	
		});

		$('.Pause').on('click', function(){
			
			timePause = new Date();
			elapsed_time= timePause - timeStart;
			g.timeReset();
			//console.log("elapsed_time "+elapsed_time+" pourcentage "+ timePercentage);
			g.pause();
			//console.log(g._paths.node().getPointAtLength(g._totalLength*timePercentage));
		});


		$('.Resume').on('click', function(){
			//console.log("elapsed_time "+elapsed_time+" pourcentage "+ timePercentage);
			var startingPoint = (g._totalLength*(1-timePercentage));
			//console.log(startingPoint);
			g.animate(g._duration, 0  , 0 ,startingPoint);
		});


	
	});

var p = d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .text(function(d) { return d; });

});




