<!DOCTYPE html>
<html lang="en">
    <style> /* set the CSS */
        /*.line {
        fill: none;
        stroke: steelblue;
        stroke-width: 2px;
        }*/
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
       h1 {
                font: 20;
                text-align: center;
                width: 100px;
                height: 50px;
                margin: 0;
        }
    </style>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Projet Jamel CHARTS</title>
        <!-- Bootstrap Core CSS -->
        <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
        <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="../css/index.css">
        $
    </head>
    <body>
        <div id="wrapper">
            <!-- Navigation -->
            <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">Jamel Project</a>
                </div>
                <!-- /.navbar-header -->
                <!-- /.navbar-top-links -->
                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Presentation</a>
                            </li>
                            <li>
                                <a href="visualize.html"><i class="fa fa-bar-chart-o fa-fw"></i> Visualize charts</a>
                                <!-- /.nav-second-level -->
                            </li>
                            <li>
                                <a href="forms.html"><i class="fa fa-edit fa-fw"></i> Consistency</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-sitemap fa-fw"></i> About Jamel<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="Contact.html">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="Information.html">More information</a>
                                    </li>
                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                        </ul>
                    </div>
                    <!-- /.sidebar-collapse -->
                </div>
                <!-- /.navbar-static-side -->
            </nav>
           


            <div id="page-wrapper">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="container-fluid">
                            <div class="timeline-heading" style="width: 1550px">
                                <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
                                    <!-- <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        </button> -->
                                    <ul class="nav navbar-top-links navbar-left">
                                        <li class ="AgentEconomic">
                                            <a  href="#"><i class="fa fa-fw "></i> Economic Agents</a>
                                            </a>
                                        </li>
                                        <li class="Graphs">
                                            <a  href="#"><i class="fa fa-fw"></i> Charts</a>
                                            </a>
                                        </li>
                                        <!-- /.dropdown -->
                                        <li class="balanceSheet" >
                                            <a  href="#"><i class="fa fa-fw"></i> Balance Sheet</a>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="panel panel-default">
                                                
                                                    <div class="ShowGraph">
                                                        <!--******************************************************************-->
                                                        <div class="container-fluid">
                                                            <div class="row">
                                                                <div class="empl1  col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                              <label id="lFirstGraph"></label>                                             
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body ">
                                                                            <div class="FirstGraph" id="FirstGraph">
                                                                            </div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                            
                                                                            <button type="button" class="btn btn-warning Pause1">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop1">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume1">Resume</button>

                                                                            <button type="button" class="emplOne btn btn-warning Detail1">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                           
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                                <!-- /.col-lg-12 -->
                                                                <div class=" empl2 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                              <label id="lSecondGraph"></label>                                              
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="SecondGraph" id="SecondGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause2">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop2">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume2">Resume</button>

                                                                            <button type="button" class="emplOne btn btn-warning Detail2">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                                <!-- /.col-lg-6 -->
                                                                <div class="empl3 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                            <label id="lThirdGraph"></label>
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="ThirdGraph" id="ThirdGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause3">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop3">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume3">Resume</button>

                                                                            <button type="button" class="emplOne btn btn-warning Detail3">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20"  alt="return" />
                                                                            <div class="filter">
                                                                                
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <!-- /.col-lg-6 -->
                                                                <div class="empl4 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                            <label id="lForthGraph"></label>
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="ForthGraph" id="ForthGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause4">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop4">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume4">Resume</button>
                                                                            <button type="button" class="emplOne btn btn-warning Detail4">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                            <div class="filter">
                                                                             
                                                                            </div>
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                                <div class="empl4 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                            <label id="lFifthGraph"></label>
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="FifthGraph" id="FifthGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause5">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop5">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume5">Resume</button>
                                                                            <button type="button" class="emplOne btn btn-warning Detail5">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                            <div class="filter">
                                                                             
                                                                            </div>
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                                <div class="empl4 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                            <label id="lSixthGraph"></label>
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="SixthGraph" id="SixthGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause6">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop6">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume6">Resume</button>
                                                                            <button type="button" class="emplOne btn btn-warning Detail6">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                            <div class="filter">
                                                                     
                                                                            </div>
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="empl4 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                            <label id="lSeventhGraph"></label>
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="SeventhGraph" id="SeventhGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause7">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop7">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume7">Resume</button>
                                                                            <button type="button" class="emplOne btn btn-warning Detail7">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                            <div class="filter">
                                                                     
                                                                            </div>
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                                <div class="empl4 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                            <label id="lEighthGraph"></label>
                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="EighthGraph" id="EighthGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause8">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop8">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume8">Resume</button>
                                                                            <button type="button" class="emplOne btn btn-warning Detail8">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                            <div class="filter">
                                                                     
                                                                            </div>
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                                <div class="empl4 col-lg-4">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-heading">
                                                                              <label id="lNinethGraph"></label>

                                                                        </div>
                                                                        <!-- /.panel-heading -->
                                                                        <div class="panel-body">
                                                                            <div class="NinethGraph" id="NinethGraph"></div>
                                                                        </div>
                                                                        <div class="panel-footer">
                                                                            <button type="button" class="btn btn-warning Pause9">Pause</button>
                                                                            <button type="button" class="btn btn-danger Stop9">Stop</button>
                                                                            <button type="button" class="btn btn-success Resume9">Resume</button>
                                                                            <button type="button" class="emplOne btn btn-warning Detail9">details</button>
                                                                            <img src="images/return.png" class ="retourner" height="20" width="20" alt="return" />
                                                                            <div class="filter">
                                                                     
                                                                            </div>
                                                                        </div>
                                                                        <!-- /.panel-body -->
                                                                    </div>
                                                                    <!-- /.panel -->
                                                                </div>
                                                            </div>
                                                                         <div class="panel-footer">
                                                                            <button type="button" class="pauseAll btn btn-danger">Pause</button>
                                                                            <button type="button" class="resumeAll btn btn-success">Resume</button>
                                                                            <h1 id="perioding">0</h1>

                                                                        </div>
                                                        </div>
                                                    </div>
                                                    <!-- /.col-lg-6 -->
                                              
                                                <!--******************************************************************-->
                                            </div>
                                            <div class="ShowBalanceSheet">
                                                <p style="text-align:center">Balance Sheet Mtrix (period 0)</p>
                                                <div class="container">
                                                    <table border="4" width="740px" bordercolor="#808080" frame="hsides" rules="rows">
                                                        <tr>
                                                            <th>           </th>
                                                            <th>Households</th>
                                                            <th>Firms</th>
                                                            <th>Banks</th>
                                                            <th>Σ</th>
                                                        </tr>
                                                        <tr>
                                                            <td>In Process</td>
                                                            <td>           </td>
                                                            <td>null</td>
                                                            <td>         </td>
                                                            <td>null</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Finished Goods</td>
                                                            <td>           </td>
                                                            <td>null</td>
                                                            <td>         </td>
                                                            <td>null</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Equipments</td>
                                                            <td>          </td>
                                                            <td>null</td>
                                                            <td>          </td>
                                                            <td>null</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Deposits</td>
                                                            <td>null</td>
                                                            <td>null</td>
                                                            <td> null </td>
                                                            <td>null</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Short Term Loans</td>
                                                            <td>           </td>
                                                            <td>null</td>
                                                            <td>null</td>
                                                            <td>null</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Long Term Loans</td>
                                                            <td>           </td>
                                                            <td>null</td>
                                                            <td>null</td>
                                                            <td>null</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Equities</td>
                                                            <td>null</td>
                                                            <td>null</td>
                                                            <td> null</td>
                                                            <td>null</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Σ</td>
                                                            <td>null</td>
                                                            <td>null</td>
                                                            <td> null</td>
                                                            <td>null</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <!--End Balance Sheet-->
                                            
                                            <!--End Balance Sheet-->
                                            <div class ="ShowAgents">
                                                <div class="panel panel-default">
                                                    <div class="panel-body">
                                                        <div class="">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Parameters of simulation</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <form action="dataGenerator.php" id="EconomicAgents">
                                                                            <label>Choose your economic agent  </label>  <select class="Agents" id="Agents" name="AgentName">
                                                                                <optgroup label="Economic Agent">
                                                                                    <option class="KeyFigures" value="KeyFigures">Key Figures</option>
                                                                                    <option class="HouseHolds" value="HouseHolds">HouseHolds</option>
                                                                                    <option class="Prodution" value="Prodution">Production</option>
                                                                                    <option class="ProfilAndLoss" value="ProfilAndLoss">Profil and Loss</option>
                                                                                    <option class="LaborMarket" value="LaborMarket">Labor Market</option>
                                                                                    <option class="CreditAndEquityMarkets" value="CreditAndEquityMarkets">Credit and Equity Market</option>
                                                                                    <option class="NationalAccounting" value="NationalAccounting">National Accounting</option>
                                                                                </optgroup>
                                                                            </select>
                                                                        </td>
                                                                        
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label>Choose your speed  </label>  <select name="speed" id="speed">
                                                                                <optgroup label="Speed">
                                                                                    <option value="25000">25s</option>
                                                                                    <option value="50000">50s</option>
                                                                                    <option value="75000">75s</option>
                                                                                    <option value="100000">100s</option>
                                                                                    <option value="125000">125s</option>
                                                                                </optgroup>
                                                                            </select>
                                                                        </td>
                                                                        
                                                                    </tr>
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="panel-footer">
                                                        <button type="button" class=" Lancer btn btn-success">Run</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--End Agents-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End sd row DONT-->
                        </div>
                    </div>
                </div>
                <!-- /.col-lg-8 (nested) --> 
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->    
        </div><!-- /#wrapper -->    
 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
   
        <script src="http://d3js.org/d3.v3.min.js"></script>
        
            
        <script src="d3Documentaion.js"></script>
        <script src="https://d3js.org/d3-timer.v1.min.js"></script>
        <!-- Custom Theme JavaScript -->
        <!--   <script src="../dist/js/sb-admin-2.js"></script> -->
        <script src="graphVisualize.js"></script>

    </body>
</html>