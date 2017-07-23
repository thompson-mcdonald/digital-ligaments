import React, { Component } from 'react';
import './App.css';

let digLig = [
  "cruedly indiligent",
  "traitorous filament",
  "old and belligerent",
  "stronghold the government",
  "boldly deliberate",
  "worldly inhabitant"
]

var nice = [
  "I have experience",
  "Why so delirious?",
  "fuck mysterious",
  "what criteria?",
  "like, for reference"
]

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

var digLigNew = shuffle(digLig);
var niceNew = shuffle(nice)

function printLine(array, num) {
  let result = array[num];
  return result;
}

class App extends Component {
  render() {
    return (
      <div className="App poemContainer">
        <p className="ttr-u bold">Digital Ligaments</p>
        <p className="italic">by <strong>Computer</strong></p>
        <p className="ttr-u bold">{printLine(niceNew, 3)},</p>
        <p className="ttr-u bold">{printLine(digLigNew, 5)},</p>
        <p className="ttr-u bold">{printLine(niceNew, 0)},</p>
        <p className="ttr-u bold">{printLine(digLigNew, 2)},</p>
        <p className="ttr-u bold">{printLine(digLigNew, 1)}</p>
      </div>
    );
  }
}

export default App;
