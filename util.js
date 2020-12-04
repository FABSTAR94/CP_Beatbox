/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */

// TODO: Create a Beat class to represent the beat object✅
class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
  }
  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML();
    this.setATransitionEndListener();
    // this.select();
  }
  //   * TODO: Button pt6: Remove the button style upon transition end | Use deselect function✅
  setATransitionEndListener = () => {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  };

  /**
   * Set the button color based on color specified
   */
  //   * TODO: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  //   * TODO: Button pt3: Complete select function to set the color and shadow of button upon pressing✅
  select = () => {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.backgroundColor = "transparent";
    this.element.style.boxShadow = "none";
  };
}
