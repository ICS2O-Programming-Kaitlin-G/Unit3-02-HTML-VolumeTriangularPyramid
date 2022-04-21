// Created by: Katie
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * This function calculates volume of a triangular pyramid
 */
function calculateVolumeClicked() {
  // taking the values for the calculations
  let sideA = parseFloat(document.getElementById('side-a').value);
  let sideB = parseFloat(document.getElementById('side-b').value);
  let height = parseFloat(document.getElementById('height').value);

  //wow calculations
  let volume = (1/6) * sideA * sideB * height;

  // output dropper :)
  document.getElementById('volume-results').innerHTML = 'the volume of the triangular pyramid with these values is ' + volume.toFixed(2) + 'cm<sup>3</sup>';
}