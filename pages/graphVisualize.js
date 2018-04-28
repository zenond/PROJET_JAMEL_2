var parseTime = d3.timeParse("%Y");
var  formatValue = d3.format(",.2f");
var formatCurrency = function(d) { return formatValue(d); };
// set the dimensions and margins of the graph
var boolModal=true;
var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
var elapsed_time;
var timePause;
var timeStart;
var timePercentage;
var speed;
var LineNumb;
var checkboxArray;
var labelArray = new Array();
var pathFiltering = new Array();
var filteringStatus = new Array();
var colorList = ["blue" , "red" , "green" , "black" , "orange" , "orange"];
var totalLenghts = new Array();
var xScale;
var gap;
var svg;
class Graphs{
		constructor(classGraph  , id){
			this.x = null;
			this.y= null;
			//this.valueLine = null;
			this._data = null;
			this._paths = new Array();
			this._progress = null;
			this._duration = null;
			this._delay = null;
			this._svg = null;
			this._valueLine = new Array();
			this._id=id;
			this.classGraph = classGraph;
			this._totalLength=new Array();
			this._timeStart=null;
			this._xG=null;
			this._yG=null;
			this.xAxis = null;
			this.yAxis = null;
			this._originalScale = null;		
		}
		
		
		setAxis(){
			this.x = d3.scaleTime().range([0 , width]);
			this.y = d3.scaleLinear().range([height , 0]);
			
		};
		
		setFrame(){
		// append the svg object to the class we want to draw in
  		// appends a 'group' element to 'svg'
  		// moves the 'group' element to the top left margin
			this._svg = d3.selectAll(this.classGraph).append("svg")
			.attr("width", width + margin.left + margin.right)
     		.attr("height", height + margin.top + margin.bottom)
    		.append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

            //********************************
		};
		start ( axisAttributes){			
			//sorting data ascending
			
			for (var i = 0; i< axisAttributes.length; i++) {
			
				this._data.sort(function(a , b )
				{
					return a[(axisAttributes[i][0])]-b[(axisAttributes[i][0])];
				})

				//creating the drawn valueLine
				
				 this._valueLine.push((d3.line()
				 	.x(d => this.x(d[(axisAttributes[i][0])]))
					.y(d => this.y(d[(axisAttributes[i][1])]))));


				//Scale the range of data
				this.x.domain(d3.extent(this._data, function(d) { return d[(axisAttributes[i][0])]; }));
				this.y.domain([0, d3.max(this._data, function(d) {
	    			return Math.max(d[(axisAttributes[i][0])], d[(axisAttributes[i][1])]); })]);

				this._originalScale = this.x;
				//add the valueLine path.
				this._paths.push(( this._svg.append("path")
				.data([this._data])
				.attr("class" , "line")
				.style("stroke" , colorList[i])
				.attr("id" , "p"+i)
				.attr("d" , this._valueLine[i])));

				pathFiltering.push(document.getElementById("p"+i));
				filteringStatus.push(true);
				
				this._totalLength.push( this._paths[i].node().getTotalLength());
				totalLenghts.push(this._totalLength[i]);
			}



			//trying zooming
			this.xAxis = d3.axisBottom(this.x);
			this.yAxis = d3.axisLeft(this.y) 
			//add the X axis
		  	this._xG = this._svg.append("g")
      		.attr("transform", "translate(0," + height + ")")
      		.call(this.xAxis);
 			// Add the Y Axis
  			this._yG = this._svg.append("g")
      		.call(this.yAxis);
			
            svg=this._svg;
		};

		animate(LineNumber, duration , delay , startingPoint){
			this._duration=duration;
			this._delay=delay;
			timeStart = new Date();
			//console.log(timeStart);
				
			for (var i=0; i < LineNumber; i++) {
				
				
				this._paths[i].attr("stroke-dasharray", this._totalLength[i] + " " + this._totalLength[i])
				.attr("stroke-dashoffset", this._totalLength[i])
				.transition()
				.delay(this._delay)
				.duration(this._duration)
				.ease(d3.easeLinear)
				.attr("stroke-dashoffset" , startingPoint)
				/*.transition()
				.delay(delay)
				.duration(this._duration)
				.ease(d3.easeLinear)
				.attr("stroke-dashoffset" , endingPoint)*/;
			}

		};
		
		resume(LineNumber , duration , delay , startingPoint , endingPoint){

			for (var i=0; i < LineNumber; i++) {
				
				this._paths[i].attr("stroke-dasharray", this._totalLength[i] + " " + this._totalLength[i])
				.attr("stroke-dashoffset", endingPoint[i])
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
				//console.log(this._paths[i].stroke-dasharray);
			}
		};

		pauseAll(){
			var c=d3.selectAll("path");
			c.transition().duration(0);
			
		};

		createFilteringNode(axisAttributes){
			checkboxArray = new Array();
			var myDiv = document.getElementById(this._id);
			var checkbox;
			var text; 
			for (var i =0; i <axisAttributes.length; i++) {
				var label = document.createElement("label");
				checkbox = document.createElement("input");


				text = document.createTextNode(axisAttributes[i][1]);

				checkbox.setAttribute("type", "checkbox");
				checkbox.setAttribute("value" , true);
				
				label.setAttribute("class" , "checkbox-inline btn-default active");
				label.setAttribute("id" , "l"+i);
				label.style.color=colorList[i];

				checkboxArray.push(checkbox);

				label.appendChild(text);
				label.appendChild(checkbox);
				myDiv.appendChild(label); 
				labelArray.push(label); 

				//do this after you append it
				checkbox.checked = true; 
				
				
			}
			
		};


		filter(i){
			var color;
				
				if ( filteringStatus[i] == true){
					color = d3.select(pathFiltering[i]);
					color.style("opacity" , 0);
					filteringStatus[i] = false;

				}

				else {
					color = d3.select(pathFiltering[i]);
					color.style("opacity" , 1);
					filteringStatus[i] = true;
				}
			
		};

		mouseOver(axisAttributes){
			/*for (var k = 0 ; k<axisAttributes.length ; k++) {*/
			    var focus = this._svg.append("g")
			      	.attr("class", "focus")
			      	.style("display", "none");

			  	focus.append("circle")
			      	.attr("r", 4.5);

			  	focus.append("text")
			      	.attr("x", 9)
			      	.attr("dy", ".35em");

			  	this._svg.append("rect")
			    	.attr("class", "overlay")
			      	.attr("width", width)
			      	.attr("height", height)
			      	.on("mouseover", function() { focus.style("display", null); })
			      	.on("mouseout", function() { focus.style("display", "none"); })
			      	.on("mousemove", this.mousemove(focus , axisAttributes));

			//}
		};
	  	mousemove(focus , axisAttributes) {
	    	
	    	//for (var s = 0; s< axisAttributes.length; s++) {
	    		
			  	var  formatValue = d3.format(",.2f");
			  	var formatCurrency = function(d) { return formatValue(d); };
			  	var bisectDate = d3.bisector(function(d){return d[(axisAttributes[0][0])];}).left;
	    		var x0 = (this.x).invert(d3.mouse(this)[0]),
	        	i = bisectDate(this._data, x0 , 1),
	        	d0 = this._data[i - 1],
	        	d1 = this._data[i],
	        	d = d0;
	    		focus.attr("transform", "translate(" + this.x(d[(axisAttributes[0][0])]) + "," + this.y(d[(axisAttributes[0][1])]) + ")");
	   			focus.select("text").text(formatCurrency(d[(axisAttributes[0][1])]));
	    	//}
		};	
		
		changeColor(){};
		changePeriod(){};
		//changeSpeed(){};
		zoomGraph(){};
		showDetail(){};
		
		timeReset(){
			timePercentage= elapsed_time/this._duration;		
		};


};



$(document).ready(function()
{
	
	$('.Detail').on('click' , function(){
		$('.myModal').show();
	});
	$('.Lancer').on('click' , function(){
		

		var g = new Graphs(".graphic" , "graphic");
		var axisAttributes = new Array();

		//To ommit var periodsOfGraph= new Array();

		speed = document.getElementById("speed").value;
		

		d3.json("dataTest.json" , function(error, data){
			if (error) {
				//console.log("error while recovering");
				return;
			}
			else {
					//To ommit we recover the vertex containing periods.
				/*data["periods"].forEach(function(d){
					periodsOfGraph.push( d['period']);
				});*/
				//tstCheck();
				g._data=data["periods"]
				//axisAttributes.push(new Array('period' , 'oneFiRawsNb'));
				axisAttributes.push(new Array('period' , 'nbHumans'));
				axisAttributes.push(new Array('period' , 'oneFi_price'));
				axisAttributes.push(new Array('period' , 'jobDeals'));
				//axisAttributes.push(new Array('period' , 'avgPrice'));

				
				g.setAxis();
				g.setFrame();
				g.start(axisAttributes);
				g.createFilteringNode(axisAttributes);
				g.animate(axisAttributes.length, speed , 500 ,0);
				//g.mouseOver(axisAttributes);
				
				p = 4;

				for (m = 0 ; m<labelArray.length ; m++) 
				{
					console.log(m);
					
					$("#"+labelArray[m].id).on('click' , function(){
						
						//console.log("vous avez cliqué " + p);
						var str = "" + this.id;						
						console.log(str);
						var arr = str.split('');
						console.log(arr[1]);
						g.filter(arr[1]);
					});
					
					
				}
			}

	
		});
		/*
			Xscale = this.x
			origScale = this.x
			axisG = this._xG
		*/
		/*var zoom = d3.zoom().scaleExtent([1 , 10]).on('zoom', zoomed);
		svg.call(zoom);

		function zoomed(){
			console.log("zoomed fuckkk");
			g._originalScale = d3.event.transform.rescaleX(g.x);
			g._xG.call(g.xAxis.scale(d3.event.transform.rescaleX(g.x)));
			for (var i= 0; i <labelArray.length; i++) {
					total = g._paths[i].node().getTotalLength();
					g._paths.attr('stroke-dasharray', total + ' ' + total)
              		.attr('stroke-dashoffset', total)
              		.attr('stroke-dashoffset', 0);
				g._paths[i].attr('d' , g._valueLine[i]);
				g._paths[i].attr('clip-path' , 'url(#clip');

			}
		}*/

		$('.Pause').on('click', function(){
			
			
			timePause = new Date();
			gap = new Date();
			elapsed_time= timePause - timeStart- g._delay;
			g.timeReset();
			g.pauseAll();
			console.log("time start "+timeStart);
			console.log("time pause "+timePause);
			console.log("time elapsed "+ elapsed_time);
			console.log("time percentage "+ timePercentage);
		});


		$('.Resume').on('click', function(){

			speed = document.getElementById("speed").value;
			var newSpeed = new Array(); 
			var startingPoint =new Array();
			for (var i = 0; i < axisAttributes.length; i++) {
			 	startingPoint.push((g._totalLength[i]*(1-timePercentage)));
			 	newSpeed.push(startingPoint[i]*speed /totalLenghts[i]);
			 } 
			g.resume(axisAttributes.length ,newSpeed[i], g._delay  , 0 ,startingPoint);
		});




	});






	console.log("end of document");

		

});




 