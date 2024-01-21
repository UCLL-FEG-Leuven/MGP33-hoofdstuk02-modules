import { Point2D } from "./physics-engine/point-2d.js";
import { Car } from "./car.js";
import { AutomaticCar } from "./automatic-car.js";

let honda = new Car("Honda","Groen","Diesel", new Point2D(100, 100));
let audi = new Car("Audi","Grijs","Benzine", new Point2D(100, 300));
let vw = new AutomaticCar("Volkswagen","Wit","Benzine", new Point2D(100, 500));

// Een zwart canvas tekenen
const canvas = document.getElementById("race-circuit");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Elke 100 msec de nieuwe situatie berekenen, afhankelijk van de snelheid ...
setInterval(() => {
    honda.renderCanvas(ctx);
    audi.renderCanvas(ctx);
    vw.renderCanvas(ctx);
}, 100);
