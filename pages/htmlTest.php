<!DOCTYPE html>
<html>
<head>
	<style>
	 body {
        font: 10px sans-serif;
        margin: 0;
        }
        /*attributs de la line déssinée*/
        path.line {
        fill: none;
        stroke: blue;
        stroke-width: 1.5px;
        }
        path.area {
        fill: #e7e7e7;
        }
        .axis {
        shape-rendering: crispEdges;
        }
        .x.axis line {
        stroke: #fff;
        }
        .x.axis .minor {
        stroke-opacity: .5;
        }
        .x.axis path {
        display: none;
        }
        .y.axis line, .y.axis path {
        fill: none;
        stroke: #000;
        }
        .guideline {
        margin-right: 100px;
        float: right;
        }
        .overlay {
        fill: none;
        pointer-events: all;
        }
        .focus circle {
        fill: none;
        stroke: steelblue;
        }
       </style>
	<title>testeur</title>
		<script src="https://d3js.org/d3.v5.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script type="text/javascript" src="graphVisualize.js"></script>
</head>
<body>
	<button class="Lancer">lancer</button>
	<div class="graphic">	
	</div>

	<script>
	
		
		
       
	</script>
</body>

</html>