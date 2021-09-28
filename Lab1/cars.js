class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        //Created constructor with 3 arguments; make, model & year
    }

    Information() {
        console.log('Make: ${this.make}');
        console.log('Model: ${this.model}');
        console.log('Year: ${this.year}');
        //Create class to print out three arguments

    }

}

class Car extends Vehicle {
    //Create class cars from parent vehicle
    constructor (make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
        //Created constructor with 4 arguments; make, model, year & doors. Super to take constructors from parent class
    }

    Information() {
        super.Information();
        console.log('Doors: ${this.doors}');
        //Create class to log 4 arguments
    }

}

 let myCar = new Car('VW', 'Golf', '2016', 5)
 myCar.Information();