//le boolean qui control le pause de tous les graphes
var bool = true;


var family1 = {
	paused :'.onePause', 
	bout : '.oneOne',
    classe: "path#aa",
    boolPause : true,
    elemePaused : d3.select(".path#aa").append(".path#bb"),
    boolColor: true
    }
var family2 = {
	paused :'.onePause',
	bout : '.oneTwo',
    classe: "path#bb",
    boolPause : true,
    elemePaused : d3.select(".path#aa").append(".path#bb"),
    boolColor: true
    }
var family3 = {
	paused :'.twoPause',
	bout : '.twoOne',
    classe: "path#cc",
    boolPause : true,
    elemePaused : d3.select(".path#cc").append(".path#dd"),
    boolColor: true
    }
var family4 = {
	paused :'.twoPause',
	bout : '.twoTwo',
    classe: "path#dd",
    boolPause : true,
    elemePaused : d3.select(".path#cc").append(".path#dd"),
    boolColor: true
    }
var family5 = {
	paused :'.threePause',
	bout : '.threeOne',
    classe: "path#ee",
    boolPause : true,
    elemePaused : d3.select(".path#ee").append(".path#ff"),
    boolColor: true
    }
var family6 = {
	paused :'.threePause',
	bout : '.threeTwo',
    classe: "path#ff",
    boolPause : true,
    elemePaused : d3.select(".path#ee").append(".path#ff"),
    boolColor: true
    }
var family7 = {
	paused :'.fourPause',
	bout : '.fourOne',
    classe: "path#gg",
    boolPause : true,
    elemePaused : d3.select(".path#hh").append(".path#gg"),
    boolColor: true
    }
var family8 = {
	paused :'.fourPause',
	bout : '.fourTwo',
    classe: "path#hh",
    boolPause : true,
    elemePaused : d3.select(".path#hh").append(".path#gg"),
    boolColor: true
    }


// console.log(family2.bout);
// console.log(family2.classe);
// console.log(family2.boolColor);


//*******************detail****************************************
// function detail1()
// {
// 	$('.empl1').show();
// 	$('.empl2').hide();
// 	$('.empl3').hide();
// 	$('.empl4').hide();
// 	$('.retourner').show();
// }
// function detail2()
// {
// 	$('.empl1').hide();
// 	$('.empl2').show();
// 	$('.empl3').hide();
// 	$('.empl4').hide();
// 	$('.retourner').show();
// }
// function detail3()
// {
// 	$('.empl1').hide();
// 	$('.empl2').hide();
// 	$('.empl3').show();
// 	$('.empl4').hide();
// 	$('.retourner').show();
// }
// function detail4()
// {
// 	$('.empl1').hide();
// 	$('.empl2').hide();
// 	$('.empl3').hide();
// 	$('.empl4').show();
// 	$('.retourner').show();
// }



//***************************************filtre***********************
function filter ( family)
{
	$(family.bout).on('click' , function()

	{
		
		if(family.boolColor === true)
		{
			var colo= d3.select(family.classe);
			colo.style("opacity" , 0);
			family.boolColor= false;
		}
		else if(family.boolColor === false)
		{
			var colo= d3.select(family.classe);
			colo.style("opacity" , 1);
			family.boolColor= true;					
		}
		// console.log("couleur trois" + colorThree);
	}
);
}

// function pause ()
// {
// 	$('.pauseTout').on('click' , function(){
// 		var p = d3.selectAll("path");
// 		p.transition().duration(0);
// 	});

// }

function pauseElement(elementGraph)
{
	if ((elementGraph.paused) == ('.onePause'))
	{

		alert("firs");
		$(elementGraph.paused).on('click' , function()
			{
				if (elementGraph.boolPause == true)
				{
					console.log("pausing")
					var c = d3.select("path#aa");
	    			c.transition()
	        		.duration( 0 );
	        		var b = d3.select("path#bb");
	    			b.transition()
	        		.duration( 0 );
	        		elementGraph.boolPause = false;
	        	}
	        	else
	        	{
	        		console.log("before resuming");
	        		var e = d3.select("path#aa");
	        		e.attr("T" , 0);
	        		e.transition().duration(5000)
	        		.ease(d3.easeLinear)
	        		.attr("T" , 1);
	        		console.log("after resuming");
	        	}
		});

	}
	else
	{
		console.log("ça marche pas");
	}

	/* else if((elementGraph.paused) === ('.twoPause'))
	{
		$(elementGraph.paused).on('click' , function()
			{
				if (elementGraph.boolPause === true)
				{
					var c = d3.select("path#cc");
	    			c.transition()
	        		.duration( 0 );
	        		var b = d3.select("path#dd");
	    			b.transition()
	        		.duration( 0 );
	        		elementGraph.boolPause = false;
	        	}
		});
	}
	else if((elementGraph.paused) === ('.threePause'))
	{
		$(elementGraph.paused).on('click' , function()
			{
				if (elementGraph.boolPause === true)
				{
					var c = d3.select("path#ee");
	    			c.transition()
	        		.duration( 0 );
	        		var b = d3.select("path#ff");
	    			b.transition()
	        		.duration( 0 );
	        		elementGraph.boolPause = false;
	        	}
		});
	}

		else if((elementGraph.paused) === ('.twoPause'))
	{
		$(elementGraph.paused).on('click' , function()
			{
				if (elementGraph.boolPause === true)
				{
					var c = d3.select("path#gg");
	    			c.transition()
	        		.duration( 0 );
	        		var b = d3.select("path#hh");
	    			b.transition()
	        		.duration( 0 );
	        		elementGraph.boolPause = false;
	        	}
		});
	}	*/

}


//****************************************************************************
$(document).ready(function()
	{
		
		

		// console.log(family2.boolColor);
		
		

	// var tab = d3.selectAll("path");
	// console.log(tab);
	
		// $('.one').on('click' , function()

		// 	{
				
		// 		if(colorOne === true)
		// 		{
		// 			var colo= d3.select("path#ooo");
		// 			colo.style("opacity" , 0);
		// 			colorOne= false;
		// 		}
		// 		else if(colorOne === false)
		// 		{
		// 			var colo= d3.select("path#ooo");
		// 			colo.style("opacity" , 1);
		// 			colorOne= true;					
		// 		}
		// 	console.log("couleur une" + colorOne);
		// 	}
		// );
					// $('.two').on('click' , function()

					// 	{
							
					// 		if(colorTwo === true)
					// 		{
					// 			var colo= d3.select("path#ttt");
					// 			colo.style("opacity" , 0);
					// 			colorTwo= false;
					// 		}
					// 		else if(colorTwo === false)
					// 		{
					// 			var colo= d3.select("path#ttt");
					// 			colo.style("opacity" , 1);
					// 			colorTwo= true;					
					// 		}
					// 		console.log("couleur deux" + colorTwo);
					// 	}
					// );
					// $('.three').on('click' , function()

					// 	{
							
					// 		if(colorThree === true)
					// 		{
					// 			var colo= d3.select("path#thr");
					// 			colo.style("opacity" , 0);
					// 			colorThree= false;
					// 		}
					// 		else if(colorThree === false)
					// 		{
					// 			var colo= d3.select("path#thr");
					// 			colo.style("opacity" , 1);
					// 			colorThree= true;					
					// 		}
					// 		console.log("couleur trois" + colorThree);
					// 	}
					// );
					$('.retourner').hide();
					filter(family1);
					filter(family2);
					filter(family3);
					filter(family4);
					filter(family5);
					filter(family6);
					filter(family7);
					filter(family8);
					pause();
					pauseElement(family1);
					pauseElement(family2);
					pauseElement(family3);
					pauseElement(family4);
					pauseElement(family5);
					pauseElement(family6);
					pauseElement(family7);
					pauseElement(family8);
					
					// $('.emplOne').on('click' ,function()
					// 	{
					// 		detail1();
					// 	});
					// $('.emplTwo').on('click' ,function(){detail2();});
					// $('.emplThree').on('click' ,function(){detail3();});
					// $('.emplFour').on('click' ,function(){detail4();});

					// $('.retourner').on('click' , function()
					// {
					// 	$('.empl1').show();
					// 	$('.empl2').show();
					// 	$('.empl3').show();
					// 	$('.empl4').show();
					// 	$('.retourner').hide();	
					// });

					

		
	});





 // console.log(classe);
              // if (classe===".graphisme")
              // {
              //   var jobOffers = d.jobOffers;
              //   var nbNoJob = d.nbNoJob;
              // }

              // else if (classe === ".graphisme2")
              // {
              //   var jobOffers = d.maxOfferWage;
              //   var nbNoJob = d.maxAskWage;
              // }

              // else if (classe === ".graphisme2")
              // {
              //   var jobOffers = d.minWage;
              //   var nbNoJob = d.oneW_minWage;
              // }

              // else
              // {
              //   var jobOffers = d.oneFiCash;
              //   var nbNoJob = d.oneFiSumLoans;  






