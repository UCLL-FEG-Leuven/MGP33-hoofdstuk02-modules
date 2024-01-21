import { Car } from "./car.js";
import { AutomaticCar } from "./automatic-car.js";

let honda = new Car("Honda","Groen","Diesel");
honda.start();
honda.gearUp();
honda.move(10);
// ...
honda.gearUp();
honda.move(20);
// ...

let audi = new Car("Audi","Grijs","Benzine");
audi.start();
// ...

let vw = new AutomaticCar("Volkswagen","Wit","Benzine");
vw.start();
vw.gearMode = "Drive";
vw.move(10);
// ...
vw.move(50);
// ...
vw.move(100); // “pedal to the metal”
// ...
