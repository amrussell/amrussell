$(function() {
	$.get("navbar.mst",function(template) {
		var subs = {
			"brand": "Garager",
			"navbuttons": [
				{
					"btnAction":"",
					"btnName":"Browse"
				},
				{
					"btnAction":"login",
					"btnName":"Sign In"
				}
			]
		};
		var rendered = Mustache.render(template,subs);
		$("#navbar").html(rendered);
	});
	window.onhashchange = function(){
      		hashAction();
    	};
    	hashAction();

	
});

function hashAction() {
	var numberPattern = /car-\d+/g;
    	var carId = location.hash.match( numberPattern );
    	if (carId) {
        	loadCarById(carId);
        	return;
    	}
	switch(location.hash) {
		case '#home':
			loadHome();
			break;
		case '#login':
			loadLogin();
			break;
		case '#register':
			loadRegister();
			break;
		case '#car':
			car();
			break;
		case '#admin':
			loadAdmin();
			break;
		default:
			location.hash = 'home';
	}
}

function loadHome() {
	$.get("home.mst",function(template) {
		var subs = {
			"numPeople": "1000",
			"navbuttons": "DFW"
		};
		var rendered = Mustache.render(template,subs);
		$("#body").html(rendered);
	});

}

function loadCarById(id) {
	$.get("car.mst",function(template) {
		var subs = {
			
		};
		var rendered = Mustache.render(template,subs);
		$("#body").html(rendered);
	});
}

function loadLogin() {
	$.get("login.mst",function(template) {
		var subs = {
			
		};
		var rendered = Mustache.render(template,subs);
		$("#body").html(rendered);
		$("#loginButton").click(function() {
			console.log('tryna log in');
			login($("#user").val(),$("#pass").val());
		});
	});
}

function loadRegister() {
	$.get("register.mst",function(template) {
		var subs = {
			
		};
		var rendered = Mustache.render(template,subs);
		$("#body").html(rendered);
		$("#regButton").click(function() {
			console.log('tryna register');
			register($("#newUser").val(),$("#newPass").val());
		});
	});
}

function car() {
	$.get("car.mst",function(template) {
		var subs = {
			"carYear": "2004",
			"carMake": "Lexus",
			"carModel": "LS430",
			"carEngine": "4.3L V8",
			"carTransmission": "6AT",
			"imgName": "ls430.jpg"
		};
		var rendered = Mustache.render(template,subs);
		$("#body").html(rendered);
	});
}

function loadAdmin() {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");
	if(Parse.User.current() == null) {
		alert("You're not signed in.");
		location.hash = "home";
	}
	else {
		$.get("admin.mst",function(template) {
			var subs = {
			};
			var rendered = Mustache.render(template,subs);
			$("#body").html(rendered);
			$("#logoutButton").click(function() {
				logout();
			});
		});
	}
	
}
