/**
 * TODO: Button pt1: Initialize color and element values

 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */
// Every letter in the keyboard has a key code. That helps us identify what specific beat needs to be played and what button needs to be triggered.
let beats = {
  65: {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
    button: new Button("#00fffe", 65),
  },
  83: {
    beat: new Beat("./assets/Piano Chord 209.mp3"),
  },
  68: {
    beat: new Beat("./assets/Piano Chord 208.mp3"),
  },
  70: {
    beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
  },
  71: {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
  },
  72: {
    beat: new Beat("./assets/PREL Musical 57.mp3"),
  },
  74: {
    beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
  },
  75: {
    beat: new Beat("./assets/Musical Compos 33.mp3"),
  },
  76: {
    beat: new Beat("./assets/Musical Orches 4.mp3"),
  },
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
// * TODO: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l✅
triggerBeat = (event) => {
  const keyCode = event.keyCode;
  if (keyCode in beats) {
    let keyPress = beats[keyCode];
    keyPress.beat.play();
    // * TODO: Button pt4: Call the select() function upon key press ;)✅
    keyPress.button.select();
  }
};

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */

// Everytime we press a key on the keyboard inside the console
// you can see that an object is being returned. what is this
// object? It contains alot of data. Such as the key code.
// * TODO: Create a keydown listener to track what keys are hit ✅
// document.addEventListener("keydown", (event) => {
//   console.log(event);
//   console.log(event.keyCode); //you can do this to just see the key code.
// });

document.addEventListener("keydown", triggerBeat);
