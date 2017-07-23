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
  " I have a lot of experience with small furies"
]

function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

var digLigNew = shuffle(digLig);

function printLine(num) {
  let result = digLigNew[num];
  return result;
}

class App extends Component {
  render() {
    return (
      <div className="App poemContainer">
        <p>Digital Ligaments</p>
        <p>{printLine(3)}</p>
        <p>{printLine(5)}</p>
        <p>{printLine(6)}</p>
        <p>{printLine(2)}</p>
        <p>{printLine(4)}</p>
      </div>
    );
  }
}

export default App;
