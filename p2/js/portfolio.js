
var today = new Date();
var myContact = "Contact me at (310)658-3071";

//this script will try to get users to add their information to our database*/

function updateMyContact(){
	var el = document.getElementById("myContact");
	el.textContent = myContact;
}

updateMyContact();

