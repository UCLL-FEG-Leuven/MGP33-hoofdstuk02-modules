import { Vector2D } from "./physics-engine/vector-2d.js";

import { Car } from "./car.js";
import { AutomaticCar } from "./automatic-car.js";

let honda = new Car("Honda","Groen","Diesel", new Vector2D(100, 100));
honda.start();
honda.gearUp();
honda.move(10);
honda.gearUp();
honda.move(20);

let audi = new Car("Audi","Grijs","Benzine", new Vector2D(100, 300));
audi.start();

let vw = new AutomaticCar("Volkswagen","Wit","Benzine", new Vector2D(100, 500));
vw.start();
vw.gearMode = "Drive";
vw.move(10);
vw.move(50);
vw.move(100); // “pedal to the metal”

// Een zwart canvas tekenen
const canvas = document.getElementById("race-circuit");
const ctx = canvas.getContext("2d");

// Elke 33 msec de nieuwe situatie berekenen, afhankelijk van de snelheid ...
// (33 msec = +/- 30 fps)
setInterval(() => {
    // Game logic
    honda.computeNewSpeed();
    audi.computeNewSpeed();
    vw.computeNewSpeed();

    // Rendering
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    honda.renderCanvas(ctx);
    audi.renderCanvas(ctx);
    vw.renderCanvas(ctx);
}, 33);

