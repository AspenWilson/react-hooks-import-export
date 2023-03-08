import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain"

console.log(trees) 

wildlife(); 

function ColoradoStateParks() {
  return (
    <section>
  <h1>Colorado State Parks!</h1>
    <div>There are <howManyParks /> in Colorado </div>
    <div><MesaVerde /></div>
    <div>In Rocky Mountain National Park, you can find <trees /> and <wildlife /></div>
    </section>);
}

export default ColoradoStateParks;
