import { Car } from "./car.js";

export class AutomaticCar extends Car {
    #gearMode;
    constructor(brand, color, maxSpeed) {
        super(brand, color, maxSpeed);
        this.#gearMode = "P";
    }
    get gearMode() {
        return this.#gearMode;
    }
    set gearMode(newValue) {
        if (newValue !== "P" && newValue !== "N" && newValue !== "R" && newValue !== "D")
            throw "Je moet kiezen voor P, N, R of D. ";

        this.#gearMode = newValue;
        console.log(`Gear mode of automatic ${this.brand} with ID ${this.id} has been set to ${this.#gearMode}.`);
    }
    move() {
        // Berekenen van de nieuwe gear position ...
        console.log(`Calculating recommended gear position of automatic ${this.brand} with ID ${this.id}...`);
        if (this.gear < 5) {
            this.gearUp();
        }
        super.move();   
    } 
} 