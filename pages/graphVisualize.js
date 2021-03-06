var parseTime = d3.timeParse("%Y");
var format = d3.format(",d");

// set the dimensions and margins of the graph
var boolModal=true;
var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
var graphTotal = new Array();
//var pos;
var axisAttributes = new Array();
var elapsed_time;
var timePause;
var timeStart;
var timePercentage;
var speed;
var LineNumb;
var checkboxArray;
var labelArray = new Array();
var pathGlobal = new Array();
var pathFiltering = new Array();
var filteringStatus = new Array();
var colorList = ["blue" , "red" , "green" , "black" , "orange" ];
var totalLenghts = new Array();
var xScale;
var gap;
var svg;
var positionArray = new Array();
var focus;
var timePerGraph = new Array();
var pausePerGraph = new Array();
var elapsed_timePerGraph = new Array();
var datum;

function organize(){
	$('.AgentEconomic').on('click' , function(){
			Agent();
	});
	$('.Graphs').on('click' , function(){
			Charts();
	});
	$('.balanceSheet').on('click' , function(){
			Balance();
	});
}

function Agent(){

		$('.ShowAgents').show();
		$('.ShowGraph').hide();
		$('.ShowBalanceSheet').hide();
}
function Charts(){
		$('.ShowAgents').hide();
		$('.ShowGraph').show();
		$('.ShowBalanceSheet').hide();
}
function Balance(){
		$('.ShowAgents').hide();
		$('.ShowGraph').hide();
		$('.ShowBalanceSheet').show();
}

class Graphs{
		constructor(titleGraph, classGraph  , id , one , position){
			this.x = null;
			this.y= null;
			this._titleGraph = titleGraph;
			this._data = null;
			this._position = position;
			this._spaceName = one;
			this._paths = new Array();
			this._progress = null;
			this._duration = null;
			this._delay = null;
			this._svg = null;
			this._valueLine = new Array();
			this._id=id;
			this.classGraph = classGraph;
			this._totalLength = new Array();
			this._timeStart=null;
			this._xG=null;
			this._yG=null;
			this.xAxis = null;
			this.yAxis = null;
			this._originalScale = null;		
		}
		
		
		setAxis(){
			this.x = d3.scaleLinear().range([0 , width]);
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
		start (pos){			
			//sorting data ascending
			
			//positionArray.push(this._position);	
			pathGlobal[pos]= new Array();
			totalLenghts[pos] = new Array();
			pathFiltering[pos] = new Array();
			filteringStatus[pos] = new Array();
			datum=this._data;
			for (var i = 0; i< axisAttributes[pos].length; i++) {
			
				this._data.sort(function(a , b )
				{
					return a[(axisAttributes[pos][i][0])]-b[(axisAttributes[pos][i][0])];
				})

				//creating the drawn valueLine
				
				 this._valueLine.push((d3.line()
				 	.x(d => this.x(d[(axisAttributes[pos][i][0])]))
					.y(d => this.y(d[(axisAttributes[pos][i][1])]))));


				//Scale the range of data
				xScale = this.x.domain([0, 600]);
				this.y.domain([0, d3.max(this._data, function(d) {
					return d[(axisAttributes[pos][i][1])]; })]);

			
				//add the valueLine path.
				this._paths.push(( this._svg.append("path")
				.data([this._data])
				.attr("class" , "line")
				.style("stroke" , colorList[i])
				.attr("id" , this._spaceName+"p"+i)
				.attr("d" , this._valueLine[i])));

				pathGlobal[pos].push(this._paths[i]);
				
				pathFiltering[pos].push(document.getElementById(this._spaceName+"p"+i));				

				filteringStatus[pos].push(true);
				
				this._totalLength.push( this._paths[i].node().getTotalLength());
				
				totalLenghts[pos].push(this._paths[i].node().getTotalLength());
			}



			//trying zooming
			this.xAxis = d3.axisBottom(this.x);
			this.yAxis = d3.axisLeft(this.y) 
			//add the X axis
		  	this._svg.append("g")
      		.attr("transform", "translate(0," + height + ")")
      		.call(this.xAxis);
 			// Add the Y Axis
  			this._svg.append("g")
      		.call(this.yAxis);
			
            svg=this._svg;


            
            
				    var  formatValue = d3.format(",.2f");
				  	var formatCurrency = function(d) { return formatValue(d); };
				  	var bisectDate = d3.bisector(function(d){return d[(axisAttributes[pos][0][0])];}).left;
				    var focus = svg.append("g")
				      .attr("class", "focus")
				      .style("display", "none");

				  	focus.append("circle")
				      .attr("r", 4.5);

				  	focus.append("text")
				      .attr("x", 9)
				      .attr("dy", ".35em")
				      .attr("stroke" , colorList[i]);



				  	svg.append("rect")
				      .attr("class", "overlay")
				      .attr("width", width)
				      .attr("height", height)
				      .on("mouseover", function() { focus.style("display", null); })
				      .on("mouseout", function() { focus.style("display", "none"); })
				      .on("mousemove", mousemove);

				  	function mousemove() {
				   	 var x0 = (xScale).invert(d3.mouse(this)[0]),
				   	     i = bisectDate(datum, x0, 1),
				        d0 = datum[i - 1],
				   
				        d1 = datum[i];
				        var d = x0 - d0[(axisAttributes[pos][0][0])] > d1[(axisAttributes[pos][0][0])] - x0 ? d1 : d0;

				    focus.attr("transform", "translate(" + d[(axisAttributes[pos][0][0])] + "," + d[(axisAttributes[pos][0][1])] + ")");
				    focus.select("text").text(formatCurrency(d[(axisAttributes[pos][0][1])]));

				  	
					}

            
			this._svg.attr("id" , "sv");

		};

		animate(pos, LineNumber, duration , delay , startingPoint){
			this._duration=duration;
			this._delay=delay;
			timeStart = new Date();
			timePerGraph.push(new Date());

			for (var i=0; i < LineNumber; i++) {
				
				
				pathGlobal[pos][i].attr("stroke-dasharray", this._totalLength[i] + " " + this._totalLength[i])
				.attr("stroke-dashoffset", this._totalLength[i])
				.transition()
				.delay(this._delay)
				.duration(this._duration)
				.ease(d3.easeLinear)
				.attr("stroke-dashoffset" , startingPoint);

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
			
			}
		};

		pauseGraph(){
			var c=d3.selectAll("path");
			c.transition().duration(0);
			
		};

		createFilteringNode(pos){
			checkboxArray = new Array();
			var myDiv = document.getElementById(this._id);
			var checkbox;
			var text; 
			labelArray[pos] = new Array();
			for (var i =0; i <axisAttributes[pos].length; i++) {
				var label = document.createElement("label");
				checkbox = document.createElement("input");


				text = document.createTextNode(axisAttributes[this._position][i][1]+"   ");

				checkbox.setAttribute("type", "checkbox");
				checkbox.setAttribute("value" , true);
				
				label.setAttribute("class" , "checkbox-inline btn-default active");
				label.setAttribute("id" , pos+this._spaceName+"l"+i);
				label.style.color=colorList[i];

				checkboxArray.push(checkbox);

				label.appendChild(text);
				label.appendChild(checkbox);
				myDiv.appendChild(label); 
				labelArray[pos].push(label); 

				//do this after you append it
				checkbox.checked = true; 
				
				
			}
			
		};


		filter(i , j){
			var color;
			
				if ( (filteringStatus[i][j]) == true){

					color = d3.select("path#"+pathFiltering[i][j].id);	
					color.style("opacity" , 0);
					filteringStatus[i][j] = false;

				}

				else {
					color = d3.select("path#"+pathFiltering[i][j].id);
					color.style("opacity" , 1);
					filteringStatus[i][j] = true;
				}
			
		};
		
		
		
		timeReset(){
			timePercentage= elapsed_time/this._duration;		
		};

		pauseElement(){

		};


};

function resumeElement(indice){
	var startingPintPerGraph = new Array();	
	for (var t = 0 ; t< totalLenghts[indice].length ; t++) {
		startingPintPerGraph.push(totalLenghts[indice][t] *(1 - (elapsed_timePerGraph[indice] / graphTotal[indice]._duration)) );
	}

			
		
	for (var i=0; i < totalLenghts[indice].length; i++) {
		graphTotal[indice]._paths[i].attr("stroke-dasharray", graphTotal[indice]._totalLength[i] + " " + graphTotal[indice]._totalLength[i])
		.attr("stroke-dashoffset", startingPintPerGraph[i])
		.transition()
		.delay(graphTotal[indice]._delay)
		.duration(graphTotal[indice]._duration)
		.ease(d3.easeLinear)
		.attr("stroke-dashoffset" , 0);
	
	}		
}

function pauseElement(indice){
	pausePerGraph[indice]=new Date()
	elapsed_timePerGraph[indice] = pausePerGraph[indice] - timePerGraph[indice] - graphTotal[0]._delay;
	for (var k = 0 ; k<pathFiltering[indice].length ; k++) {
		c=d3.select("path#"+pathFiltering[indice][k].id );
		c.transition().duration(0);
	}
}

/*function animate( endingPoint, speed)
{
d3.select("#perioding")
  .transition()
    .duration(speed)
    .on("start", function repeat() {
      d3.active(this)
          .tween("text", function() {
            var that = d3.select(this),
                i = d3.interpolateNumber(that.text().replace(/,/g, ""), endingPoint);
            return function(t) { that.text(format(i(t))); };
          })
        .transition();
    });
}*/
function download(indice){
		var svgData = $("svg")[indice].outerHTML;
		var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
		var svgUrl = URL.createObjectURL(svgBlob);
		var downloadLink = document.createElement("a");
		downloadLink.href = svgUrl;
		downloadLink.download = graphTotal[indice]._titleGraph+".svg";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
}

$(document).ready(function()
{
	$('.ShowBalanceSheet').hide();
		$('.ShowGraph').hide();
	$('.Lancer').on('click' , function(){
		
		$('.ShowGraph').show();
		$('.ShowAgents').hide();
		
		$('.ShowBalanceSheet').hide();	
		
		$('.restartAll').hide();


		
		var choice =document.getElementById("Agents").value;
		speed = document.getElementById("speed").value;


		//var donnee = JSON.parse("dataGenerator.php");
		//d3.json(donnee , function(error , data))

		d3.json("dataTest.json" , function(error, data){
			
			if (error) {
				console.log("error while recovering");
				return;
			}
			else {

				if (choice == "KeyFigures") {
					graphTotal.push(new Graphs("GDP indices" ,".FirstGraph" , "FirstGraph", "one" , 0));
					graphTotal.push(new Graphs("Real Consumption" , ".SecondGraph" , "SecondGraph" , "two" , 1));
					graphTotal.push(new Graphs("Net national income" , ".ThirdGraph" , "ThirdGraph" , "thr" , 2));
					graphTotal.push(new Graphs("Money holdings" , ".ForthGraph" , "ForthGraph" , "fou" , 3));
					graphTotal.push(new Graphs("Total Production and Sales" , ".FifthGraph" , "FifthGraph" , "fiv" , 4));
					graphTotal.push(new Graphs("Price Levels" , ".SixthGraph" , "SixthGraph" , "six" , 5));
					graphTotal.push(new Graphs("Employment" , ".SeventhGraph" , "SeventhGraph" , "sev" , 6));
					graphTotal.push(new Graphs("Interest rates(asked)" , ".EighthGraph" , "EighthGraph" , "eig" , 7));
					graphTotal.push(new Graphs("Firms:Net Profit/revenue" , ".NinethGraph" , "NinethGraph" , "nin" , 8));






					axisAttributes[0] = new Array();
					axisAttributes[0].push(new Array('period' , 'jobOffers'));
					axisAttributes[0].push(new Array('period' , 'avgPrice'));
					axisAttributes[0].push(new Array('period' , 'oneFi_price'));

					axisAttributes[1] = new Array();
					axisAttributes[1].push(new Array('period' , 'valueRaw'));
					axisAttributes[1].push(new Array('period' , 'bankCapitalCash'));
					axisAttributes[1].push(new Array('period' , 'valueStock'));

					axisAttributes[2] = new Array();
					axisAttributes[2].push(new Array('period' , 'oneFiWorkersTarget'));
					//axisAttributes[2].push(new Array('period' , 'avgWorkersNB'));
					//axisAttributes[2].push(new Array('period' , 'twoFiWorkersNB'));
					axisAttributes[2].push(new Array('period' , 'twoFiWorkersTarget'));


					axisAttributes[3] = new Array();
					axisAttributes[3].push(new Array('period' , 'workersNB'));
					axisAttributes[3].push(new Array('period' , 'oneFi_price'));
					axisAttributes[3].push(new Array('period' , 'nbHumans'));

					axisAttributes[4] = new Array();
					axisAttributes[4].push(new Array('period' , 'bankDividend'));
					axisAttributes[4].push(new Array('period' , 'bank_sumLoansNormal'));
					axisAttributes[4].push(new Array('period' , 'oneFiNewLoan'));
					axisAttributes[4].push(new Array('period' , 'oneW_minWage'));

					axisAttributes[5] = new Array();
					axisAttributes[5].push(new Array('period' , 'loans'));
					axisAttributes[5].push(new Array('period' , 'valueStock'));
					axisAttributes[5].push(new Array('period' , 'valueRaw'));

					axisAttributes[6] = new Array();
					axisAttributes[6].push(new Array('period' , 'oneW_avgIncome'));
					axisAttributes[6].push(new Array('period' , 'oneFiOfferWage'));
					axisAttributes[6].push(new Array('period' , 'firmsDividend'));
					axisAttributes[6].push(new Array('period' , 'minOfferWage'));
					axisAttributes[6].push(new Array('period' , 'minWage'));

					axisAttributes[7] = new Array();
					axisAttributes[7].push(new Array('period' , 'wageIncomeShare'));
					axisAttributes[7].push(new Array('period' , 'avgVacancyRate'));
					axisAttributes[7].push(new Array('period' , 'dividendIncomeShare'));

					axisAttributes[8] = new Array();
					axisAttributes[8].push(new Array('period' , 'inflation'));


				}
					else if (choice == "HouseHolds") {
											graphTotal.push(new Graphs("GDP indices" ,".FirstGraph" , "FirstGraph", "one" , 0));
					graphTotal.push(new Graphs("Real Consumption" , ".SecondGraph" , "SecondGraph" , "two" , 1));
					graphTotal.push(new Graphs("Net national income" , ".ThirdGraph" , "ThirdGraph" , "thr" , 2));
					graphTotal.push(new Graphs("Money holdings" , ".ForthGraph" , "ForthGraph" , "fou" , 3));
					graphTotal.push(new Graphs("Total Production and Sales" , ".FifthGraph" , "FifthGraph" , "fiv" , 4));
					graphTotal.push(new Graphs("Price Levels" , ".SixthGraph" , "SixthGraph" , "six" , 5));
					graphTotal.push(new Graphs("Employment" , ".SeventhGraph" , "SeventhGraph" , "sev" , 6));
					graphTotal.push(new Graphs("Interest rates(asked)" , ".EighthGraph" , "EighthGraph" , "eig" , 7));
					graphTotal.push(new Graphs("Firms:Net Profit/revenue" , ".NinethGraph" , "NinethGraph" , "nin" , 8));
					




					axisAttributes[0] = new Array();
					axisAttributes[0].push(new Array('period' , 'workersNB'));
					axisAttributes[0].push(new Array('period' , 'oneFi_price'));
					axisAttributes[0].push(new Array('period' , 'nbHumans'));

					axisAttributes[1] = new Array();
					axisAttributes[1].push(new Array('period' , 'bankDividend'));
					axisAttributes[1].push(new Array('period' , 'bank_sumLoansNormal'));
					axisAttributes[1].push(new Array('period' , 'oneFiNewLoan'));
					axisAttributes[1].push(new Array('period' , 'oneW_minWage'));

					axisAttributes[2] = new Array();
					axisAttributes[2].push(new Array('period' , 'loans'));
					axisAttributes[2].push(new Array('period' , 'valueStock'));
					axisAttributes[2].push(new Array('period' , 'valueRaw'));

					axisAttributes[3] = new Array();
					axisAttributes[3].push(new Array('period' , 'jobOffers'));
					axisAttributes[3].push(new Array('period' , 'avgPrice'));
					axisAttributes[3].push(new Array('period' , 'oneFi_price'));

					axisAttributes[4] = new Array();
					axisAttributes[4].push(new Array('period' , 'valueRaw'));
					axisAttributes[4].push(new Array('period' , 'bankCapitalCash'));
					axisAttributes[4].push(new Array('period' , 'valueStock'));

					axisAttributes[5] = new Array();
					axisAttributes[5].push(new Array('period' , 'oneFiWorkersTarget'));
					//axisAttributes[2].push(new Array('period' , 'avgWorkersNB'));
					//axisAttributes[2].push(new Array('period' , 'twoFiWorkersNB'));
					axisAttributes[5].push(new Array('period' , 'twoFiWorkersTarget'));

					axisAttributes[6] = new Array();
					axisAttributes[6].push(new Array('period' , 'oneW_avgIncome'));
					axisAttributes[6].push(new Array('period' , 'oneFiOfferWage'));
					axisAttributes[6].push(new Array('period' , 'firmsDividend'));
					axisAttributes[6].push(new Array('period' , 'minOfferWage'));
					axisAttributes[6].push(new Array('period' , 'minWage'));

					axisAttributes[7] = new Array();
					axisAttributes[7].push(new Array('period' , 'wageIncomeShare'));
					axisAttributes[7].push(new Array('period' , 'avgVacancyRate'));
					axisAttributes[7].push(new Array('period' , 'dividendIncomeShare'));

					axisAttributes[8] = new Array();
					axisAttributes[8].push(new Array('period' , 'inflation'));

					}
						else if ("Prodution") {
					graphTotal.push(new Graphs("GDP indices" ,".FirstGraph" , "FirstGraph", "one" , 0));
					graphTotal.push(new Graphs("Real Consumption" , ".SecondGraph" , "SecondGraph" , "two" , 1));
					graphTotal.push(new Graphs("Net national income" , ".ThirdGraph" , "ThirdGraph" , "thr" , 2));
					graphTotal.push(new Graphs("Money holdings" , ".ForthGraph" , "ForthGraph" , "fou" , 3));
					graphTotal.push(new Graphs("Total Production and Sales" , ".FifthGraph" , "FifthGraph" , "fiv" , 4));
					graphTotal.push(new Graphs("Price Levels" , ".SixthGraph" , "SixthGraph" , "six" , 5));
					graphTotal.push(new Graphs("Employment" , ".SeventhGraph" , "SeventhGraph" , "sev" , 6));
					graphTotal.push(new Graphs("Interest rates(asked)" , ".EighthGraph" , "EighthGraph" , "eig" , 7));
					graphTotal.push(new Graphs("Firms:Net Profit/revenue" , ".NinethGraph" , "NinethGraph" , "nin" , 8));
					


					axisAttributes[0] = new Array();
					axisAttributes[0].push(new Array('period' , 'oneW_avgIncome'));
					axisAttributes[0].push(new Array('period' , 'oneFiOfferWage'));
					axisAttributes[0].push(new Array('period' , 'firmsDividend'));
					axisAttributes[0].push(new Array('period' , 'minOfferWage'));
					axisAttributes[0].push(new Array('period' , 'minWage'));

					axisAttributes[1] = new Array();
					axisAttributes[1].push(new Array('period' , 'wageIncomeShare'));
					axisAttributes[1].push(new Array('period' , 'avgVacancyRate'));
					axisAttributes[1].push(new Array('period' , 'dividendIncomeShare'));

					axisAttributes[2] = new Array();
					axisAttributes[2].push(new Array('period' , 'inflation'));

					axisAttributes[6] = new Array();
					axisAttributes[6].push(new Array('period' , 'jobOffers'));
					axisAttributes[6].push(new Array('period' , 'avgPrice'));
					axisAttributes[6].push(new Array('period' , 'oneFi_price'));

					axisAttributes[7] = new Array();
					axisAttributes[7].push(new Array('period' , 'valueRaw'));
					axisAttributes[7].push(new Array('period' , 'bankCapitalCash'));
					axisAttributes[7].push(new Array('period' , 'valueStock'));

					axisAttributes[8] = new Array();
					axisAttributes[8].push(new Array('period' , 'oneFiWorkersTarget'));
					//axisAttributes[2].push(new Array('period' , 'avgWorkersNB'));
					//axisAttributes[2].push(new Array('period' , 'twoFiWorkersNB'));
					axisAttributes[8].push(new Array('period' , 'twoFiWorkersTarget'));


					axisAttributes[3] = new Array();
					axisAttributes[3].push(new Array('period' , 'workersNB'));
					axisAttributes[3].push(new Array('period' , 'oneFi_price'));
					axisAttributes[3].push(new Array('period' , 'nbHumans'));

					axisAttributes[4] = new Array();
					axisAttributes[4].push(new Array('period' , 'bankDividend'));
					axisAttributes[4].push(new Array('period' , 'bank_sumLoansNormal'));
					axisAttributes[4].push(new Array('period' , 'oneFiNewLoan'));
					axisAttributes[4].push(new Array('period' , 'oneW_minWage'));

					axisAttributes[5] = new Array();
					axisAttributes[5].push(new Array('period' , 'loans'));
					axisAttributes[5].push(new Array('period' , 'valueStock'));
					axisAttributes[5].push(new Array('period' , 'valueRaw'));


						}
							else if ("ProfilAndLoss") {
					graphTotal.push(new Graphs("GDP indices" ,".FirstGraph" , "FirstGraph", "one" , 0));
					graphTotal.push(new Graphs("Real Consumption" , ".SecondGraph" , "SecondGraph" , "two" , 1));
					graphTotal.push(new Graphs("Net national income" , ".ThirdGraph" , "ThirdGraph" , "thr" , 2));
					graphTotal.push(new Graphs("Money holdings" , ".ForthGraph" , "ForthGraph" , "fou" , 3));
					graphTotal.push(new Graphs("Total Production and Sales" , ".FifthGraph" , "FifthGraph" , "fiv" , 4));
					graphTotal.push(new Graphs("Price Levels" , ".SixthGraph" , "SixthGraph" , "six" , 5));
					graphTotal.push(new Graphs("Employment" , ".SeventhGraph" , "SeventhGraph" , "sev" , 6));
					graphTotal.push(new Graphs("Interest rates(asked)" , ".EighthGraph" , "EighthGraph" , "eig" , 7));
					graphTotal.push(new Graphs("Firms:Net Profit/revenue" , ".NinethGraph" , "NinethGraph" , "nin" , 8));
							




					axisAttributes[6] = new Array();
					axisAttributes[6].push(new Array('period' , 'jobOffers'));
					axisAttributes[6].push(new Array('period' , 'avgPrice'));
					axisAttributes[6].push(new Array('period' , 'oneFi_price'));

					axisAttributes[4] = new Array();
					axisAttributes[4].push(new Array('period' , 'valueRaw'));
					axisAttributes[4].push(new Array('period' , 'bankCapitalCash'));
					axisAttributes[4].push(new Array('period' , 'valueStock'));

					axisAttributes[2] = new Array();
					axisAttributes[2].push(new Array('period' , 'oneFiWorkersTarget'));
					//axisAttributes[2].push(new Array('period' , 'avgWorkersNB'));
					//axisAttributes[2].push(new Array('period' , 'twoFiWorkersNB'));
					axisAttributes[2].push(new Array('period' , 'twoFiWorkersTarget'));


					axisAttributes[3] = new Array();
					axisAttributes[3].push(new Array('period' , 'workersNB'));
					axisAttributes[3].push(new Array('period' , 'oneFi_price'));
					axisAttributes[3].push(new Array('period' , 'nbHumans'));

					axisAttributes[1] = new Array();
					axisAttributes[1].push(new Array('period' , 'bankDividend'));
					axisAttributes[1].push(new Array('period' , 'bank_sumLoansNormal'));
					axisAttributes[1].push(new Array('period' , 'oneFiNewLoan'));
					axisAttributes[1].push(new Array('period' , 'oneW_minWage'));

					axisAttributes[5] = new Array();
					axisAttributes[5].push(new Array('period' , 'loans'));
					axisAttributes[5].push(new Array('period' , 'valueStock'));
					axisAttributes[5].push(new Array('period' , 'valueRaw'));

					axisAttributes[0] = new Array();
					axisAttributes[0].push(new Array('period' , 'oneW_avgIncome'));
					axisAttributes[0].push(new Array('period' , 'oneFiOfferWage'));
					axisAttributes[0].push(new Array('period' , 'firmsDividend'));
					axisAttributes[0].push(new Array('period' , 'minOfferWage'));
					axisAttributes[0].push(new Array('period' , 'minWage'));

					axisAttributes[7] = new Array();
					axisAttributes[7].push(new Array('period' , 'wageIncomeShare'));
					axisAttributes[7].push(new Array('period' , 'avgVacancyRate'));
					axisAttributes[7].push(new Array('period' , 'dividendIncomeShare'));

					axisAttributes[8] = new Array();
					axisAttributes[8].push(new Array('period' , 'inflation'));

							}
								else if ("LaborMarket") {
														graphTotal.push(new Graphs("GDP indices" ,".FirstGraph" , "FirstGraph", "one" , 0));
					graphTotal.push(new Graphs("Real Consumption" , ".SecondGraph" , "SecondGraph" , "two" , 1));
					graphTotal.push(new Graphs("Net national income" , ".ThirdGraph" , "ThirdGraph" , "thr" , 2));
					graphTotal.push(new Graphs("Money holdings" , ".ForthGraph" , "ForthGraph" , "fou" , 3));
					graphTotal.push(new Graphs("Total Production and Sales" , ".FifthGraph" , "FifthGraph" , "fiv" , 4));
					graphTotal.push(new Graphs("Price Levels" , ".SixthGraph" , "SixthGraph" , "six" , 5));
					graphTotal.push(new Graphs("Employment" , ".SeventhGraph" , "SeventhGraph" , "sev" , 6));
					graphTotal.push(new Graphs("Interest rates(asked)" , ".EighthGraph" , "EighthGraph" , "eig" , 7));
					graphTotal.push(new Graphs("Firms:Net Profit/revenue" , ".NinethGraph" , "NinethGraph" , "nin" , 8));
								}
									else if ("CreditAndEquityMarkets") {
															graphTotal.push(new Graphs("GDP indices" ,".FirstGraph" , "FirstGraph", "one" , 0));
					graphTotal.push(new Graphs("Real Consumption" , ".SecondGraph" , "SecondGraph" , "two" , 1));
					graphTotal.push(new Graphs("Net national income" , ".ThirdGraph" , "ThirdGraph" , "thr" , 2));
					graphTotal.push(new Graphs("Money holdings" , ".ForthGraph" , "ForthGraph" , "fou" , 3));
					graphTotal.push(new Graphs("Total Production and Sales" , ".FifthGraph" , "FifthGraph" , "fiv" , 4));
					graphTotal.push(new Graphs("Price Levels" , ".SixthGraph" , "SixthGraph" , "six" , 5));
					graphTotal.push(new Graphs("Employment" , ".SeventhGraph" , "SeventhGraph" , "sev" , 6));
					graphTotal.push(new Graphs("Interest rates(asked)" , ".EighthGraph" , "EighthGraph" , "eig" , 7));
					graphTotal.push(new Graphs("Firms:Net Profit/revenue" , ".NinethGraph" , "NinethGraph" , "nin" , 8));
									}
										else if ("NationalAccounting") {
																graphTotal.push(new Graphs("GDP indices" ,".FirstGraph" , "FirstGraph", "one" , 0));
					graphTotal.push(new Graphs("Real Consumption" , ".SecondGraph" , "SecondGraph" , "two" , 1));
					graphTotal.push(new Graphs("Net national income" , ".ThirdGraph" , "ThirdGraph" , "thr" , 2));
					graphTotal.push(new Graphs("Money holdings" , ".ForthGraph" , "ForthGraph" , "fou" , 3));
					graphTotal.push(new Graphs("Total Production and Sales" , ".FifthGraph" , "FifthGraph" , "fiv" , 4));
					graphTotal.push(new Graphs("Price Levels" , ".SixthGraph" , "SixthGraph" , "six" , 5));
					graphTotal.push(new Graphs("Employment" , ".SeventhGraph" , "SeventhGraph" , "sev" , 6));
					graphTotal.push(new Graphs("Interest rates(asked)" , ".EighthGraph" , "EighthGraph" , "eig" , 7));
					graphTotal.push(new Graphs("Firms:Net Profit/revenue" , ".NinethGraph" , "NinethGraph" , "nin" , 8));
										}
											


				document.getElementById("lFirstGraph").innerHTML=graphTotal[0]._titleGraph;
				document.getElementById("lSecondGraph").innerHTML=graphTotal[1]._titleGraph;
				document.getElementById("lThirdGraph").innerHTML=graphTotal[2]._titleGraph;
				document.getElementById("lForthGraph").innerHTML=graphTotal[3]._titleGraph;
				document.getElementById("lFifthGraph").innerHTML=graphTotal[4]._titleGraph;
				document.getElementById("lSixthGraph").innerHTML=graphTotal[5]._titleGraph;
				document.getElementById("lSeventhGraph").innerHTML=graphTotal[6]._titleGraph;
				document.getElementById("lEighthGraph").innerHTML=graphTotal[7]._titleGraph;
				document.getElementById("lNinethGraph").innerHTML=graphTotal[8]._titleGraph;


				for (var t=0 ; t<graphTotal.length ; t++) {
					document.getElementById("ChoosedGraphs").innerHTML+=graphTotal[t]._titleGraph+"<br/>";
				}

					
				for (var i = 0 ; i < graphTotal.length ; i++) {
				
					positionArray.push(i);
					graphTotal[i]._data=data["periods"];
					graphTotal[i].setAxis();
					graphTotal[i].setFrame();

					graphTotal[i].start(positionArray[i]);
					graphTotal[i].createFilteringNode(positionArray[i]);
					graphTotal[i].animate(positionArray[i] , axisAttributes[i].length, speed , 500 ,0);
				
				}
			/*	animate(600 , speed);*/

			
				for (var i = 0; i<labelArray.length ; i++) {
					for (var j = 0; j<labelArray[i].length; j++) {
						$("#"+labelArray[i][j].id).on('click' , function(){
							var str = ""+this.id;
							var arr = str.split('');				
							graphTotal[arr[0]].filter(arr[0] , arr[5]);
						});
					}	
				}
				
				for (var t = 1; t< (graphTotal.length)+1; t++) {
							
					$('.Pause'+t).on('click' , function(){
						var clicked = ""+this.id;
						var c = clicked.split('');
						pauseElement((c[5])-1);
					});		
				}

				for (var t = 1; t< (graphTotal.length)+1; t++) {
							
					$('.Resume'+t).on('click' , function(){
						var clicked = ""+this.id;
						var c = clicked.split('');
						
						resumeElement((c[6])-1);
					});		
				}

				for (var t = 1; t< (graphTotal.length)+1; t++) {
							
					$('.Stop'+t).on('click' , function(){
						var clicked = ""+this.id;
						var c = clicked.split('');
						alert("Stop graph  "+graphTotal[c[4]-1]._titleGraph);
						$('.empl'+(c[4]-1)).hide();
					});		
				}
				for (var t = 1; t< (graphTotal.length)+1; t++) {
							
					$('.download'+t).on('click' , function(){
						var clicked = ""+this.id;
						var c = clicked.split('');
						download(c[8]-1);
						
						
					});		
				}


		
			//else
			}

	//D3.json
		});
		
		$('.pauseAll').on('click', function(){
			
			timePause = new Date();
			gap = new Date();
			elapsed_time= timePause - timeStart- graphTotal[0]._delay;
			graphTotal[0].timeReset();
			graphTotal[0].pauseGraph();
					
			$('.restartAll').show();
		});


		$('.resumeAll').on('click', function(){
			$('.restartAll').hide();
			speed = document.getElementById("speed").value;
			var newSpeed = new Array(); 
			var startingPoint =new Array();
			
			
			for (var k = 0; k <axisAttributes.length; k++) {
				startingPoint[k]=new Array();
				newSpeed[k] = new Array();
				

				for (var i = 0; i < axisAttributes[k].length; i++) {
			 		startingPoint[k].push((graphTotal[k]._totalLength[i]*(1-timePercentage)));
			 		newSpeed[k].push(startingPoint[k][i]*speed /totalLenghts[k][i]);
			 } 
			graphTotal[k].resume(axisAttributes[k].length ,newSpeed[k][i], graphTotal[0]._delay  , 0 ,startingPoint[k]);
			}
		});

		$('.restartAll').on('click' , function(){
			graphTotal[0].pauseGraph();
			for (var i =0 ; i< graphTotal.length ; i++) {
				graphTotal[i].animate(positionArray[i] , axisAttributes[i].length, speed , 500 ,0);
			}
		});



	});

		organize();
});




 