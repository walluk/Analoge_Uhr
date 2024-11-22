// Hand elements for the analog clock
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// Function to update the analog clock
function updateAnalogClock() {
  const date = new Date();

  // Calculating the seconds hand position
  const seconds = date.getSeconds();
  const secDeg = (seconds / 60) * 360 - 90; // Start at -90 degrees
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  // Calculating the minutes hand position
  const minutes = date.getMinutes();
  const minDeg = (minutes / 60) * 360 - 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  // Calculating the hours hand position
  const hours = date.getHours();
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 - 90; // Include the minute fraction
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

// Function to update the digital clock
function updateDigitalClock(digitalClock) {
  const date = new Date();

  // Formatting the time values
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Update the digital clock display
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to initialize the clock
window.onload = () => {
  const clockFace = document.querySelector(".inner-clock-face");

  // Add minute markings to the clock
  for (let i = 0; i < 60; i++) {
    const minuteMarking = document.createElement("div");
    minuteMarking.classList.add("minute-marking");

    // Rotate each marking by 6 degrees to distribute them evenly
    minuteMarking.style.transform = `rotate(${i * 6}deg) translateY(-45%)`;
    clockFace.appendChild(minuteMarking);
  }

  // Class to create dots on the clock face
  class Dot {
    constructor(id, cssClass) {
      this.id = id; // Unique ID for the dot
      this.cssClass = cssClass; // CSS class for positioning
    }

    // Method to create a dot element
    createDotElement() {
      const dotElement = document.createElement("span");
      dotElement.id = this.id;
      dotElement.className = `dot ${this.cssClass}`;
      return dotElement;
    }
  }

  // Create and add dots to the clock
  const points = [
    new Dot("center-dot", "center-position"),
    new Dot("five-dot", "five-position"),
    new Dot("ten-dot", "ten-position"),
    new Dot("twenty-dot", "twenty-position"),
    new Dot("twentyfive-dot", "twentyfive-position"),
    new Dot("thirtyfive-dot", "thirtyfive-position"),
    new Dot("forty-dot", "forty-position"),
    new Dot("fifty-dot", "fifty-position"),
    new Dot("fiftyfive-dot", "fiftyfive-position"),
  ];

  const clockContainer = document.querySelector(".clock");
  points.forEach((point) => {
    clockContainer.appendChild(point.createDotElement());
  });

  // Create the digital clock element
  const digitalClock = document.createElement("div");
  digitalClock.classList.add("digital-clock");
  digitalClock.textContent = "00:00:00"; // Initial value
  clockContainer.appendChild(digitalClock);

  // Update the analog and digital clocks every 1 second
  setInterval(() => {
    updateAnalogClock();
    updateDigitalClock(digitalClock);
  }, 1000);
};
