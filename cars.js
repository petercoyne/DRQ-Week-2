class Vehicle { // create vehicle class
	constructor(make, model, year) { // constructor takes 3 args
		this.make = make; // local vars
		this.model = model;
		this.year = year;
	}

	Information() {
		// log variables to console. backtick quotes allow string interpolation.
		console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
	}
}

class Car extends Vehicle { // Extend/inherits from Vehicle class
	constructor(make, model, year, doors) { // vehicle args + doors
		super(make, model, year); // call the parent class
		this.doors = doors; // make local instance for final variable
	}

	Information() {
		super.Information(); // call information() in the parent
		console.log(`Doors: ${this.doors}`); // also log the doors
	}
}

let myCar = new Car('Hyundai', 'Ionic 5', '2021', 5); // create instance of class
myCar.Information(); // console.log is in the information() methods