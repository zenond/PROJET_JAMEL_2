
alert("pause");

function draw(data, periods , classe) {
              

  // set the dimensions and margins of the graph
  // d3.select("body").transition().duration(4000).style("background-color", "yellow");
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  // parse the date / time
  var parseTime = d3.timeParse("%Y");
  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  // define the line
  var valueline = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.jobOffers); });
  // define the line
  var valueline2 = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.nbNoJob); });
    
  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select(classe).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  var data = data[periods];
 // console.log(data);
  // format the data
            // data.forEach(function(d) {despacito
            //     d.period = parseTime(d.period);
            //     d.jobOffers = +d.jobOffers;
            //     d.nbNoJob = +d.nbNoJob;
            //        //console.log(d);
            // });
  
  // console.log(data);
  // sort years ascending
  data.sort(function(a, b){
    return a["period"]-b["period"];
  })
 
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.period; }));
  y.domain([0, d3.max(data, function(d) {
    return Math.max(d.jobOffers, d.nbNoJob); })]);
  
  // Add the valueline path.

  var pathi=  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id" , "bb")
      .attr("d", valueline);
      
  // Add the valueline path.

  var path = svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id", "aa")
      .attr("d", valueline2);


  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

  
  var totalLength = path.node().getTotalLength();
  console.log(totalLength);
  path.attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", 0)
  .attr("opacity" , 0)
  .transition()
  .delay(1000)
  .duration(2000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , totalLength);

  
   

  pathi.attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .delay(4000)
  .duration(4000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , totalLength*0.5)
  .transition()
  .delay(4000)
  .duration(4000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , 0)
  ;

  console.log(pathi.node().getPointAtLength(totalLength*0.5));

    var  formatValue = d3.format(",.2f");
  var formatCurrency = function(d) { return formatValue(d); };
  var bisectDate = d3.bisector(function(d){return d.period;}).left;
    var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.period) + "," + y(d.jobOffers) + ")");
    focus.select("text").text(formatCurrency(d.jobOffers));
  }
  
  

  }



  function draw2(data, periods , classe) {
              // console.log(classe);
              // if (classe===".graphisme")
              // {
              //   var jobOffers = d.jobOffers;
              //   var nbNoJob = d.nbNoJob;
              // }

              // else if (classe === ".graphisme2")
              // {
              //   var jobOffers = d.maxOfferWage;
              //   var nbNoJob = d.maxOfferWage;
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
              // }

  // set the dimensions and margins of the graph
  // d3.select("body").transition().duration(4000).style("background-color", "yellow");
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  // parse the date / time
  var parseTime = d3.timeParse("%Y");
  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  // define the line
  var valueline = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.maxOfferWage); });
  // define the line
  var valueline2 = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.maxWage); });
    
  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select(classe).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  var data = data[periods];
 // console.log(data);
  // format the data
            // data.forEach(function(d) {
            //     d.period = parseTime(d.period);
            //     d.jobOffers = +d.jobOffers;
            //     d.nbNoJob = +d.nbNoJob;
            //        //console.log(d);
            // });
  
  // console.log(data);
  // sort years ascending
  data.sort(function(a, b){
    return a["period"]-b["period"];
  })
 
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.period; }));
  y.domain([0, d3.max(data, function(d) {
    return Math.max(d.maxOfferWage, d.maxWage); })]);
  
  // Add the valueline path.

  var pathh=  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id" , "cc")
      .attr("d", valueline);
  // Add the valueline path.

  var path = svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id" , "dd")
      .attr("d", valueline2);  
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

  
  var totalLength = path.node().getTotalLength();

  path.attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(2000)
  .delay(1000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , 0); 

   

  pathh.attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(20000)
  .delay(1000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , 0);

  //********************Mouse Over***********************

    var  formatValue = d3.format(",.2f");
  var formatCurrency = function(d) { return formatValue(d); };
  var bisectDate = d3.bisector(function(d){return d.period;}).left;
    var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.period) + "," + y(d.maxOfferWage) + ")");
    focus.select("text").text(formatCurrency(d.maxOfferWage));
  }
  
  

  }



  function draw3(data, periods , classe) {
         

  // set the dimensions and margins of the graph
  // d3.select("body").transition().duration(4000).style("background-color", "yellow");
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  // parse the date / time
  var parseTime = d3.timeParse("%Y");
  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  // define the line
  var valueline = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.minWage); });
  // define the line
  var valueline2 = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.oneW_minWage); });

    
    
  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select(classe).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  var data = data[periods];

  data.sort(function(a, b){
    return a["period"]-b["period"];
  })
 
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.period; }));
  y.domain([0, d3.max(data, function(d) {
    return Math.max(d.minWage, d.oneW_minWage); })]);
  
  // Add the valueline path.

  var pathi=  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id" , "ee")
      .attr("d", valueline);
  // Add the valueline path.

  var path = svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id" , "ff")
      .attr("d", valueline2);  
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

  
  var totalLength = pathi.node().getTotalLength();

  path.attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(20000)
  .delay(1000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , 0); 

   

  pathi.attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(20000)
  .delay(1000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , 0);



   var  formatValue = d3.format(",.2f");
  var formatCurrency = function(d) { return formatValue(d); };
  var bisectDate = d3.bisector(function(d){return d.period;}).left;
    var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.period) + "," + y(d.minWage) + ")");
    focus.select("text").text(formatCurrency(d.minWage));
  } 
  
  

  }



  function draw4(data, periods , classe) {
              

  // set the dimensions and margins of the graph
  // d3.select("body").transition().duration(4000).style("background-color", "yellow");
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  // parse the date / time
  var parseTime = d3.timeParse("%Y");
  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);
  // define the line
  var valueline = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.oneFiCash); });
  // define the line
  var valueline2 = d3.line()
      .x(function(d) { return x(d.period); })
      .y(function(d) { return y(d.oneFiSumLoans); });
    
  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select(classe).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  var data = data[periods];
 // console.log(data);
  // format the data
            // data.forEach(function(d) {
            //     d.period = parseTime(d.period);
            //     d.jobOffers = +d.jobOffers;
            //     d.nbNoJob = +d.nbNoJob;
            //        //console.log(d);
            // });
  
  // console.log(data);
  // sort years ascending
  data.sort(function(a, b){
    return a["period"]-b["period"];
  })
 
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.period; }));
  y.domain([0, d3.max(data, function(d) {
    return Math.max(d.oneFiCash, d.oneFiSumLoans); })]);
  
  // Add the valueline path.

  var pathi=  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id" , "gg")

      .attr("d", valueline);
  // Add the valueline path.

  var path = svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("id" , "hh")
      .attr("d", valueline2);  
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

  //var time = ease(time)
  var totalLength = path.node().getTotalLength();
  //var time = d3.ease("linear")(time);


  var point = path.node().getPointAtLength(totalLength);
  console.log(point.x);


  path.attr("stroke-dasharray", (totalLength-200) + " " + totalLength)
  .attr("stroke-dashoffset", totalLength-200)
  .transition()
  .duration(5000)
  .delay(1000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , 0); 

   

  pathi.attr("stroke-dasharray", totalLength-200 + " " + totalLength)
  .attr("stroke-dashoffset", totalLength-200)
  .transition()
  .duration(14000)
  .delay(1000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset" , 0);
//*************************************************************************************
  var  formatValue = d3.format(",.2f");
  var formatCurrency = function(d) { return formatValue(d); };
  var bisectDate = d3.bisector(function(d){return d.period;}).left;
    var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.period) + "," + y(d.oneFiCash) + ")");
    focus.select("text").text(formatCurrency(d.oneFiCash));
  }
  
  

  }



// Get the data


// function animation(path , speed )
// {
//    var totalLength = path.node().getTotalLength();

//   path.attr("stroke-dasharray", totalLength + " " + totalLength)
//   .attr("stroke-dashoffset", totalLength)
//   .transition()
//   .duration(20000)
//   .ease(d3.easeLinear)
//   .attr("stroke-dashoffset" , 0);
// }


function detail1()
{
  $('.empl1').show();
  $('.empl2').hide();
  $('.empl3').hide();
  $('.empl4').hide();
  $('.retourner').show();
}
function detail2()
{
  $('.empl1').hide();
  $('.empl2').show();
  $('.empl3').hide();
  $('.empl4').hide();
  $('.retourner').show();
}
function detail3()
{
  $('.empl1').hide();
  $('.empl2').hide();
  $('.empl3').show();
  $('.empl4').hide();
  $('.retourner').show();
}
function detail4()
{
  $('.empl1').hide();
  $('.empl2').hide();
  $('.empl3').hide();
  $('.empl4').show();
  $('.retourner').show();
}

$(document).ready(function()
  {
    
    $('.Lancer').on('click' , function(){
      d3.json("data1.json", function(error, data) {
        if (error) throw error;
        
        // trigger render
        else
       {
         draw(data, "periods" , ".FirstGraph");
       }
      });


      //   d3.json("data1.json", function(error, data) {
  
      // if (error) throw error;
      
      // // trigger render
      // else
      //  { 
      //     draw3(data, "periods" , ".SecondGraph");
          
      //   }
      //  });
      // d3.json("data1.json", function(error, data) {
  
      // if (error) throw error;
      
      // // trigger render
      // else
      //  { 
      //     draw3(data, "periods" , ".ThirdGraph");
          
      //   }
      //  });

      // d3.json("data1.json", function(error, data) {
  
      // if (error) throw error;
      
      // // trigger render
      // else
      //  { 
      //     draw3(data, "periods" , ".ForthdGraph");
          
      //   }
      //  });

      // d3.json("data1.json", function(error, data) {
  
      // if (error) throw error;
      
      // // trigger render
      // else
      //  { 
      //     draw3(data, "periods" , ".FifthGraph");
          
      //   }
      //  });

      // d3.json("data1.json", function(error, data) {
  
      // if (error) throw error;
      
      // // trigger render
      // else
      //  { 
      //     draw3(data, "periods" , ".SixthGraph");
          
      //   }
      //  });



      //  d3.json("data1.json", function(error, data) {
  
      // if (error) throw error;
      
      // // trigger render
      // else
      //  { 
      //     draw4(data, "periods" , ".ForthGraph");
          
      //   }
      //  });  

       });
       
      //  $('.runAfter').on('click' , function()
      //  {

      

      // d3.json("data.json", function(error, data) {
      //   if (error) throw error;
        
      //   // trigger render
      //  {
      //    draw(data, "periods" , ".FirstGraph");
      //  }
      // });
      //  }
      //   )


$('.retourner').hide();
        $('.emplOne').on('click' ,function()
            {
              detail1();
            });
          $('.emplTwo').on('click' ,function(){detail2();});
          $('.emplThree').on('click' ,function(){detail3();});
          $('.emplFour').on('click' ,function(){detail4();});

          $('.retourner').on('click' , function()
          {
            $('.empl1').show();
            $('.empl2').show();
            $('.empl3').show();
            $('.empl4').show();
            $('.retourner').hide(); 
          });

         

    
  });
