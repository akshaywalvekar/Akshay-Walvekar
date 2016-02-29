<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Hanlon Lab</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="Style.css" >
</head>
<body>
<div id="loginheader">
		 <form class="form-inline col-sm-offset-7" role="form">
	  		<div class="form-group">
	    			<input type="text" id="searchbox" placeholder="Search" style="height:20px;">
	  		</div>
		  <button type="submit" class="btn btn-xs" id="smallButtons">Search</button>
		  <button type="button" class="btn btn-xs" data-toggle="modal" data-target="#loginModal" id="smallButtons">Login</button>
		</form>
	</div>
	<div class = "container">
		<div class="jumbotron" id="header">
			<p style="font-size:25px;">Hanlon Financial<br/> Systems Lab</p>
		</div>
	</div>
	<div class="container" style="margin-top:0px;">
		<ul class="nav nav-tabs nav-justified" style="background:#ffffff;">
  			<li><a href="HomePage.jsp">Home</a></li>
  			<li><a href="AcademicProjects.jsp">Academic Research</a></li>
    		<li><a href="Faculty.jsp">Faculty</a></li>
  			<li><a href="BoardMembers.jsp">Board Members</a></li>
  			<li><a href="Events.jsp">Events</a></li>
    		<li class="dropdown">
    			<a class="dropdown-toggle" data-toggle="dropdown" href="#">Course Syllabus
    			<span class="caret"></span></a>
    					<ul class="dropdown-menu">
				      		<li data-toggle="modal" data-target="#gradCourse"><a href="#">Graduate Courses</a></li>
				      		<li data-toggle="modal" data-target="#ugCourse"><a href="#">Undergraduate Courses</a></li>
				      		<li data-toggle="modal" data-target="#labCourse"><a href="#">Lab Courses</a></li>
    					</ul>
    		</li>
    		<li class="dropdown">
    			<a class="dropdown-toggle" data-toggle="dropdown" href="#">Tutorials
    			<span class="caret"></span></a>
    					<ul class="dropdown-menu">
				      		<li><a href="Tutorials.jsp">General Operation</a></li>
				      		<li><a href="Tutorials.jsp">Videos</a></li>
				      		<li><a href="Tutorials.jsp">Software</a></li>
    					</ul>
    		</li>
</ul>
</div>

<div class="container" style="margin-top:25px;color:#B30938;text-align:Left;">
<div class="well well-lg">
  <h2><b>FSC BOARD MEMBERS</b></h2>
  <h4>Board of Advisors</h4>
  <p style="color:#000000;text-align:justified;">Stevens, with the direction of FSC Chairman Sean Hanlon, is currently 
  assembling the founding leadership team for the FSC. The Advisory Board 
  for the FSC will have oversight responsibility for defining and guiding 
  the broad research agendas, advising on design and management of the Lab
  and organizing the required financial support. Building on the anchor funding 
  provided by Stevens Trustee Sean Hanlon, the FSC is targeting a $3 million 
  fund to support the full construction and operation of the facility on an
  ongoing basis. The initial $1 million of this funding will come from founding 
  donors, drawn from the financial industry, who are willing to contribute time 
  and expertise, as well as financial support, towards this goal. </p>
  <div class="row" style="text-align:center;">
    <div class="col-md-6">
      <a class="thumbnail">
        <img src="facultyone.jpg" alt="Borad Member One" class="img-circle" style="width:200px;height:200px;margin-top:10px;">
        <p style="margin-top:10px;"><b>Borad Member One</b><br/> Profile <br/><br/><br/><br/><br/></p>
      </a>
    </div>
    <div class="col-md-6">
      <a class="thumbnail">
        <img src="facultytwo.jpg" alt="Borad Member Two" class="img-circle" style="width:200px;height:200px;margin-top:10px;">
        <p style="margin-top:10px;"><b>Borad Member Two</b><br/> Profile <br/><br/><br/><br/><br/></p>
      </a>
    </div>
  </div>
  <div class="row" style="text-align:center;">
    <div class="col-md-6">
      <a class="thumbnail">
        <img src="facultythree.jpg" alt="Borad Member Three" class="img-circle" style="width:200px;height:200px;margin-top:10px;">
        <p style="margin-top:10px;"><b>Borad Member Three</b><br/>Profile <br/><br/><br/><br/><br/></p>
      </a>
    </div>
    <div class="col-md-6">
      <a class="thumbnail">
        <img src="facultyfour.jpg" alt="Borad Member Four" class="img-circle" style="width:200px;height:200px;margin-top:10px;">
        <p style="margin-top:10px;"><b>Borad Member Four</b><br/> Profile<br/><br/><br/><br/><br/></p>
      </a>
    </div>
  </div>
</div>
</div>

<div id="loginModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div>
        	<img class="img-responsive center-block" src="modalheader.jpg" alt="Stevens Login" id="modalHeader">
        	<p id="modalHeader">Stevens Login</p>
        </div>
      </div>
      <div class="modal-body" style="align:center;">
         <form class="form-horizontal" role="form">
  <div class="form-group">
  	<div class="col-sm-2"></div>
    <label class="control-label col-sm-2" for="email">Email:</label>
    <div class="col-sm-5">
      <input type="email" class="form-control" id="email" placeholder="Enter Stevens Username">
    </div>
  </div>
  <div class="form-group" >
  <div class="col-sm-2"></div>
    <label class="control-label col-sm-2" for="pwd">Password:</label>
    <div class="col-sm-5">
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
      	<div class="col-sm-3"></div>
        	<label><input type="checkbox"> Remember me</label>
      </div>
    </div>
  </div>
  <div class="form-group">
 
    <div class="col-sm-offset-4 col-sm-10">
      <button type="submit" class="btn btn-default">Submit</button>
    </div>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div>

<div id="gradCourse" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div>
        	<img class="img-responsive center-block" src="modalheader.jpg" alt="Stevens Login" id="modalHeader">
        	<p id="modalHeader">Graduate Courses</p>
        </div>
      </div>
      <div class="modal-body" style="align:center;">
      <div class="row">
      	<div class="col-sm-6">
      	 <ul class="list-group">
			  <li class="list-group-item">FE 541 FE 541 Applied Statistics with applications to Finance</li>
			  <li class="list-group-item">FE 550 Data Visualization Applications</li>
			  <li class="list-group-item">FE 570 Market Microstructure and Trading Strategies</li>
			  <li class="list-group-item">FE 582 Foundations of Financial Data Science</li>
			  <li class="list-group-item">FE 635 Financial Enterprise Risk Engineering</li>
			  <li class="list-group-item">FE 800 Special Problems in Financial Engineering</li>
		 </ul>
		 </div>
		 <div class="col-sm-6">
      	 <ul class="list-group">
      	 	  <li class="list-group-item">FE 621 Computational Methods in Finance</li>
			  <li class="list-group-item">FE 670 Algorithmic Trading Strategies</li>
			  <li class="list-group-item">FE630: Portfolio Theory & Applications</li>
			  <li class="list-group-item">BIA 656 Statistical Learning and Analytics</li>
			  <li class="list-group-item">BIA 660 Web Analytics</li>
			  <li class="list-group-item">BIA 686 Applied Analytics</li>
		 </ul>
		 </div>
	   </div>   
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div>

<div id="ugCourse" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div>
        	<img class="img-responsive center-block" src="modalheader.jpg" alt="Stevens Login" id="modalHeader">
        	<p id="modalHeader">Undergraduate Courses</p>
        </div>
      </div>
      <div class="modal-body" style="align:center;">
      <div class="row">
      	<div class="col-sm-6">
      	 <ul class="list-group">
			  <li class="list-group-item">QF 102L Lab Session</li>
			  <li class="list-group-item">QF 103 Introduction to Portfolio Investing</li>
			  <li class="list-group-item">QF 104 Programming in R for Quantitative Finance</li>
			  <li class="list-group-item">QF 301 Financial time series</li>
		 </ul>
		 </div>
		 <div class="col-sm-6">
      	 <ul class="list-group">
      	 	  <li class="list-group-item">QF 302 Financial Market Microstructure & Trading Strategies</li>
			  <li class="list-group-item">QF 365 Data Structures and Algorithms in C++</li>
			  <li class="list-group-item">QF 402 Senior Design Project</li>
			  <li class="list-group-item">BT 214 Market Research</li>
		 </ul>
		 </div>
	   </div>   
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div>


<div id="labCourse" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div>
        	<img class="img-responsive center-block" src="modalheader.jpg" alt="Stevens Login" id="modalHeader">
        	<p id="modalHeader">Lab Courses</p>
        </div>
      </div>
      <div class="modal-body" style="align:center;">
      <div class="row">
      	<div class="col-sm-6">
      	 <ul class="list-group">
			  <li class="list-group-item">FE 505 Technical Writing in Finance</li>
			  <li class="list-group-item">FE511 Introduction to Bloomberg and Thomson reuters</li>
			  <li class="list-group-item">FE512 Database Engineering</li>
			  <li class="list-group-item">FE513 Database Design</li>
			  <li class="list-group-item">FE520 Introduction to Python for Financial Applications</li>
			  <li class="list-group-item">FE521 Web design</li>
		 </ul>
		 </div>
		 <div class="col-sm-6">
      	 <ul class="list-group">
      	 	  <li class="list-group-item">FE515 R in Finance</li>
			  <li class="list-group-item">FE516 MATLAB for Finance</li>
			  <li class="list-group-item">FE517 SAS for Finance</li>
			  <li class="list-group-item">FE518 Mathematica for Finance</li>
			  <li class="list-group-item">C++ Programming in Finance</li>
			  <li class="list-group-item">FE529 GPU Computing in Finance</li>
			  
		 </ul>
		 </div>
	   </div>   
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div>

</body>
</html>