function addCar(make, year, model) {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");

	var Car = Parse.Object.extend("Car");
	var theCar = new Car();

	theCar.set("make", make);
	theCar.set("year", year);
	theCar.set("model", model);

	theCar.save(null, {
		success: function(car) {
			alert(car);
		},
		error: function(car, error) {
			alert(error);
		}
	});
}

function retrieveCar(id) {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");
	var Car = Parse.Object.extend("Car");
	var query = new Parse.Query(Car);
	query.get(id, {
		success: function(car) {
			alert(car);
		},
		error: function(car, error) {
			alert(error);
		}
	});
}

function retrieveCarsByMake(make) {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");
	var Car = Parse.Object.extend("Car");
	var query = new Parse.Query(Car);
	query.equalTo("make",make);
	query.find(id, {
		success: function(results) {
			alert(results);
		},
		error: function(error) {
			alert(error);
		}
	});
}

function updateCar(id, make, year, model) {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");

	var Car = Parse.Object.extend("Car");
	var theCar = new Car();

	theCar.set("id", id);
	theCar.set("make", make);
	theCar.set("year", year);
	theCar.set("model", model);

	theCar.save(null, {
		success: function(car) {
			alert(car);
		},
		error: function(car, error) {
			alert(error);
		}
	});
}

function deleteCar(id) {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");

	var Car = Parse.Object.extend("Car");
	var theCar = new Car();

	theCar.set("id", id);

	var query = new Parse.Query(Car);

	query.get(id, {
		success: function(car) {
			alert(car);
		},
		error: function(car, error) {
			alert(error);
		}
	});

	theCar.destroy({
		success: function(theCar) {
			alert('baleeted');
		},
		error: function(theCar, error) {
			alert('error ' + error);
		}
	});
}

function register(user, pass) {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");
	var user = new Parse.User();

	user.set("username", user);
	user.set("password", pass);

  	user.signUp(null, {
	    success: function(user) {
		alert('yay');
		window.location = '#admin';
    	    },
    	    error: function(user, error) {
      		alert("Error: " + error.code + " " + error.message);
    	    }
	});	
}

function login(user, pass) {
	Parse.initialize("QWJvHi4Y9qdtfRb154MwHgMkEHjiE4oXUYmQhOeI", "kwkww4itsojbAkUEWorqdSu1vFV6bjROY2jV80Nx");
	Parse.User.logIn(user, pass, {
		success: function(user) {
			alert("Hi " + user);
			window.location = '#admin';
		},
		error: function(user, error) {
			alert(error);
			console.log(error);
		}
	});
}

function logout() {
	Parse.User.logOut();
}
