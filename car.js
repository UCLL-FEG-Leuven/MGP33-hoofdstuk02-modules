import { Vector2D } from "./vector-2d.js";

export const MAX_ACCELERATION_IN_METERS_SEC = 27.8;

export class Car { // de naam begint met een hoofdletter (= conventie)
    static #lastId = 0;

    #id;  // De hashtag (#) geeft aan dat dit ‘private’ attributen zijn
    #brand;
    #color;
    #maxSpeed;

    #gear;
    #started = false;
    #acceleratorPedalPosition;
    #brakePedalPosition;

    #position;

    constructor(brand, color, maxSpeed, position) {
      this.#id = Car.#lastId++;
      this.#brand = brand;
      this.#color = color;
      this.#maxSpeed = maxSpeed;

      this.#started = false;
      this.#gear = 0;
      this.#acceleratorPedalPosition = 0;
      this.#brakePedalPosition = 0;

      this.#position = position;
    }

    get id() { return this.#id; }
    get brand() { return this.#brand; }
    get maxSpeed() { return this.#maxSpeed; }

    get started() { return this.#started; }
    get gear() { return this.#gear; }
    get acceleratorPedalPosition() { return this.#acceleratorPedalPosition; }
    set acceleratorPedalPosition(newValue) {
        if (newValue < 0 || newValue > 1)
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
        this.#acceleratorPedalPosition = newValue;
    }
    get brakePedalPosition() { return this.#brakePedalPosition; }
    set brakePedalPosition(newValue) {
        if (newValue < 0 || newValue > 1)
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
        this.#brakePedalPosition = newValue;
    }

    get position() { return this.#position; }

    start() {         
        this.#started = true;
    }  

    stop() {        
        this.#started = false;
    }

    gearUp() {        
        this.#gear++;
        if (this.#gear > 5) this.#gear = 5;
    }

    gearDown() {
        this.#gear--;
        if (this.#gear < 0) this.#gear = 0;
    }

    move(timeSpanInSec) {
        if (this.#started) {
            console.log(`Moving ${this.#brand} with ID ${this.id}: gear=${this.gear}, accelerator (%)=${this.#acceleratorPedalPosition * 100}, brake (%)=${this.#brakePedalPosition * 100}.`);
        } else {
            console.log(`${this.#brand} with ID ${this.id} is not started.`);
        }
    }

    renderOnPage(ctx) {
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