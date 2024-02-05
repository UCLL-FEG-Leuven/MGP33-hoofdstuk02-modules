import { Vector2D } from "./vector-2d.js";

import { Car } from "./car.js";
import { AutomaticCar } from "./automatic-car.js";

let honda = new Car("Honda","Groen", 145, new Vector2D(100, 100));
let audi = new Car("Audi","Grijs", 220, new Vector2D(100, 300));
let vw = new AutomaticCar("Volkswagen","Wit", 180, new Vector2D(100, 500));

let cars = [honda, audi, vw];

// Een 2D context aanmaken om op de canvas te kunnen tekenen.
const canvas = document.getElementById("race-circuit");
const ctx = canvas.getContext("2d");

// Canvas leegmaken
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Auto's tekenen
cars.forEach((car) => {
    // rendering. 
    car.renderOnPage(ctx);
});
