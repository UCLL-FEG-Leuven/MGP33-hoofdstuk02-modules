import { Vector2D } from "./physics-engine/vector-2d.js";
import { calculateNewPosition } from "./physics-engine/engine.js";

export const MAX_SPEED_IN_METERS_PER_SECONDE = 55.56; // 55.56 m/s = +/- 200 km/u

export class Car { // de naam begint met een hoofdletter (= conventie)
    static #lastId = 0;

    #id;  // De hashtag (#) geeft aan dat dit ‘private’ attributen zijn
    #brand;
    #color;
    #fuelType;
    #gear;

    #started = false;
    #speedPedalPosition = 0;
    #brakePedalPosition = 0;

    #position;
    #speed;

    constructor(brand, color, fuelType, position) { // slechts één constructor mogelijk. Bemerk het gebruik van this.
      this.#id = Car.#lastId++;

      this.#brand = brand; 
      this.#color = color; 
      this.#fuelType = fuelType; 

      this.#gear = 0;       

      this.#position = position;      
      this.#speed = new Vector2D(0,0);
    }

    get id() { return this.#id; }
    get brand() { return this.#brand; }
    get gear() { return this.#gear; } 

    get speed() { return this.#speed; }

    start() {         
        this.#started = true;
    }  

    stop() {        
        this.#started = false;
    } 

    move(pedalPosition) {
        this.#speedPedalPosition = pedalPosition;
    } 

    brake(pedalPosition) {
        this.#brakePedalPosition = this.#brakePedalPosition;
    }

    gearUp() {        
        this.#gear++;
        if (this.#gear > 5) this.#gear = 5;
    }

    gearDown() {
        this.#gear--;
        if (this.#gear < 0) this.#gear = 0;
    }

    computeNewSpeed() {
        if (this.#started) {
            this.#speed = new Vector2D(
                MAX_SPEED_IN_METERS_PER_SECONDE * (this.#gear / 5.0) * (this.#speedPedalPosition / 100.0) / (this.#brakePedalPosition === 0 ? 1 : this.#brakePedalPosition), 
                0);    
        } else {
            this.#speed = new Vector2D(0,0);
        }
        this.#position = calculateNewPosition(this.#position, this.#speed, 33);
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