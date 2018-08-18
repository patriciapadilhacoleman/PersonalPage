// Object creation
var Application = new Object();
Application.company = "Facebook";
Application.ceo = new Object();
Application.position = "Software Engineer";
// company.ceo.favColor = "blue";






$(document).ready(function(){
    
    $("#intersubmit").click(function(){

        addInterview();
       
    });

    $("#appsubmit").click(function(){

        addApplication();
        
    });
});

function addInterview(){
	
	var elem = document.getElementById('addinter');
    if(confirm("A New Interview with " + $("#coname").val() + "has been added to your calendar")){
    	 
    }
	 
}

function addApplication(){
	
	var elem = document.getElementById('addapp');
    if(confirm("A New Application with " + $("#coname").val() + "has been added")){
    	 
    }
	 
}
function aa(){

	var xmlhttp;
	xmlhttp = new HMLHttpRequest();
	xmlhttp.open("GET", "insert.php",false);
	xmlhttp.send(null);
}