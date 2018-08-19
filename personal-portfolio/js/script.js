// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

	 function sayHello (event) {
	      console.log(event);

	      
	      var name =
	       document.getElementById("contactName").value;
	       var message = "Hello " + name + "!";

	      // document
	      //   .getElementById("contactMessage")
	      //   .textContent = message;

	      if (name.length != 0) {

	      	this.textContent = "Information Submitted";
	        var title = 
	          document
	            .querySelector("#headercontact")
	            .textContent;
	        title = "<h1>" + name + ", <br>" + " Thanks for Contacting Me" + "</h1>";
	        document
	            .querySelector("#message")
	            .innerHTML = title;
	      }
	    }

	   document.querySelector("#Sendbtn")
      .addEventListener("click", sayHello);


  }
);

