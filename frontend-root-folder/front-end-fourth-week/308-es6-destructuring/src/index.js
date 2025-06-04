// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import cars from "./practice";
import animals, {useAnimals} from "./data";

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();
// console.log(animals);
// const [cat, dog] = animals; //since there are two list in the animals we can do it like this
// console.log(cat);
// // const {name, sound} = cat; //this is when there are some attributes in the cat
// const {name, sound, feedingRequirements: {food, water} } = cat;
// console.log(food);

const [honda, tesla] = cars;
const {speedStats: {hondaTopSpeed, hondaZeroToSixty}} = honda;

const {speedStatst: {teslaTopSpeed, teslaZeroToSixtyt}} = tesla;
// const {red, white} = coloursByPopularity
const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
