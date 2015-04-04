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
			login();
			break;
		case '#register':
			register();
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

function login() {
	$.get("login.mst",function(template) {
		var subs = {
			
		};
		var rendered = Mustache.render(template,subs);
		$("#body").html(rendered);
	});
}

function register() {
	$.get("register.mst",function(template) {
		var subs = {
			
		};
		var rendered = Mustache.render(template,subs);
		$("#body").html(rendered);
	});
}
