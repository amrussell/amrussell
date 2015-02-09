document.body.style.background = "#eeeeee";
alert(document.title);
var email = "amrussell@smu.edu";
var reg = new RegExp("^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$");
if(email.match(reg) != null)
	alert(email + " is a valid email");
else
	alert(email + " is not a valid email");
