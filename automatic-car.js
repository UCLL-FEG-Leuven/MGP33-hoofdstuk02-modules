import { Car, MAX_SPEED_IN_METERS_PER_SECONDE } from "./car.js";

export class AutomaticCar extends Car { // overerven gebeurt via het ‘extends’ keyword
    #gearMode; // ter info: mogelijke waarden zijn Park, Reverse, Neutral, Drive, ...
    constructor(brand, color, fuelType, position) {
      super(brand, color, fuelType, position); // verplicht: super roept de constructor van parent class Car aan.
      this.#gearMode = "Park";
    }
    get gearMode() { // Properties beginnen ook met een kleine letter (= conventie)
        return this.#gearMode; 
    } 
    set gearMode(newGearMode) { // Een ‘property setter’ voor schrijftoegang.
        this.#gearMode = newGearMode; 
    } 
    computeNewSpeed() { 
        if (this.speed.x >= (this.gear / 5.0) * MAX_SPEED_IN_METERS_PER_SECONDE) {
            this.gearUp();
        }
        super.computeNewSpeed();
    } 
  } 