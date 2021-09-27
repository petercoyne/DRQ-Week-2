class BMI { // create class BMI
	
	constructor (height, weight) { // constructor takes 2 arguments
		this.weight = weight; // create local instances
		this.height = height;
	}

	calculateBMI() { // add method
		return this.weight / (this.height ** 2); // ** == Math.POW()
	}
}

let MyBmi = new BMI(1.8,100); // create object

console.log(MyBmi.calculateBMI()); // output returned calculation to console