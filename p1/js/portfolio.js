
var today = new Date();
var myContact = "Contact me at (310)658-3071";
var whoAmI = "I am a Fullstack Developper looking for new projects." + 
"I have experience working with C programming in an embedded system environment." +
"I also have a certificate in Project Management from UCLA.";


//this script will try to get users to add their information to our database*/

function updateMyContact(){
	var el = document.getElementById("myContact");
	el.textContent = myContact;
}

function updateWhoAmI(){
	var el = document.getElementById("description");
	el.textContent = whoAmI;
}

updateMyContact();
updateWhoAmI();
