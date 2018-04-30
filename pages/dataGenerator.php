<!DOCTYPE html>
<meta charset="utf-8">
<html>
<head>
  <title>PHPRO AJAX D3.js MySQL Example</title>
  <script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
   
   <script src="http://d3js.org/d3.v3.min.js"> </script>
  <script src="visualize.js"></script>
</head>
<body>
    <?php

        $username = 'root';
        $password = 'root';
        $database = 'jamel';
        $hostname = 'localhost';

        
      

    try {
          $conn = new PDO("mysql:host=$hostname;dbname=jamel", $username, $password);
          

          // set the PDO error mode to exception
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          //echo "Connected successfully ";
          }
      catch(PDOException $e)
          {
          echo "Connection failed: " . $e->getMessage();
          } 

     try
      {
        if($_REQUEST['AgentName'] == "KeyFigures"){
          $req = " ";

          //echo $req;

          $res = $conn -> query($req);
        }
        else
        if($_REQUEST['AgentName'] == "HouseHolds"){
          $req = " ";

          //echo $req;

          $res = $conn -> query($req);
        }
        else
        if($_REQUEST['AgentName'] == "Production"){
          $req = " ";

          //echo $req;

          $res = $conn -> query($req);
        }
        else
        if($_REQUEST['AgentName'] == "ProfilAndLoss"){
          $req = " ";

          //echo $req;

          $res = $conn -> query($req);
        }
        else
        if($_REQUEST['AgentName'] == "LaborMarket"){
          $req = " ";

          //echo $req;

          $res = $conn -> query($req);
        }
        else
        if($_REQUEST['AgentName'] == "CreditAndEquityMarkets"){
          $req = " ";

          //echo $req;

          $res = $conn -> query($req);
        }
        else
        if($_REQUEST['AgentName'] == "NationalAccounting"){
          $req = " ";

          //echo $req;

          $res = $conn -> query($req);
        }
      }

      catch(PDOException $e)
      {
          echo $e->getMessage();
      }


        $result =  $res->fetchAll( PDO::FETCH_ASSOC );
        //echo print_r($result);

        echo json_encode( $result);
    ?>

    
  </body>


      
  </html>
