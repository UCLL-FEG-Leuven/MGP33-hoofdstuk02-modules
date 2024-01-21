import { Point2D } from "./physics-engine/point-2d.js";
import { Vector2D } from "./physics-engine/vector-2d.js";

export class Car { // de naam begint met een hoofdletter (= conventie)
    static #lastId = 0;

    #id;  // De hashtag (#) geeft aan dat dit ‘private’ attributen zijn
    #brand;
    #color;
    #fuelType;
    #gear;
    #position;
    #speed;

    constructor(brand, color, fuelType, position) { // slechts één constructor mogelijk. Bemerk het gebruik van this.
      this.#id = Car.#lastId++;

      this.#brand = brand; 
      this.#color = color; 
      this.#fuelType = fuelType; 

      this.#position = position;
      this.#gear = 0;       
      this.#speed = 0;
    }

    get id() { return this.#id; }
    get brand() { return this.#brand; }
    get gear() { return this.#gear; } 

    start() { // method van een Car object. De naam begint met een kleine letter (= conventie)
        console.log(`${this.#brand} with ID ${this.id} started.`);
    }  

    stop() {
        console.log(`${this.#brand} with ID ${this.id} stopped.`);
    } 

    move(pedalPosition) { // ter info: pedalPosition is een percentage (dus number tussen 0 en 100).
        console.log(`Speed pedal position of ${this.#brand} with ID ${this.id} is ${pedalPosition}%.`);
    } 

    brake(pedalPosition) {
        console.log(`Brake pedal position of ${this.#brand} with ID ${this.id} is ${pedalPosition}%.`);
    }

    gearUp() {        
        this.#gear++;
        console.log(`Gear up. Gear position of ${this.#brand} with ID ${this.id} is now ${this.gear}.`);
    }

    gearDown() {
        this.#gear--;
        console.log(`Gear down. Gear position of ${this.#brand} with ID ${this.id} is ${this.gear}.`);
    }

    renderCanvas(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.#position.x, this.#position.y);
        ctx.lineTo(this.#position.x + 20, this.#position.y);
        ctx.lineTo(this.#position.x + 20, this.#position.y + 20);
        ctx.lineTo(this.#position.x, this.#position.y + 20);
        ctx.lineTo(this.#position.x, this.#position.y);

        switch (this.#color.toLowerCase()) {
            case "groen":
                ctx.strokeStyle = "green";
                break;
            case "grijs":
                ctx.strokeStyle = "gray";
                break;
            case "wit":
                ctx.strokeStyle = "white";
                break;
            default:
                ctx.strokeStyle = "black";
        }

        ctx.stroke();
    }
  }