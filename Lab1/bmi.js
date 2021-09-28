class BMI {
    constructor (height, weight) {
        this.height = height;
        this.weight = weight;
        //Create Constructor with 2 arguments; height & weight
    }

    calculateBMI() {
        let bmi = this.weight/(this.height**2);
        return bmi;
        //Create class that takes height & weight and calculates BMI
    }

}

let myBMI = new BMI(2, 90);
let calc= myBMI.calculateBMI();
console.log(calc);
//Entered Values for height & weight and prints out BMI result

