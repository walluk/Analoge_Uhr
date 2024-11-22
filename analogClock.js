const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

setInterval(() => {
  const date = new Date();

  // Sekundenzeiger-Berechnung
  const seconds = date.getSeconds();
  const secDeg = (seconds / 60) * 360 - 90; // Start bei -90 Grad
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  // Minutenzeiger-Berechnung
  const minutes = date.getMinutes();
  const minDeg = (minutes / 60) * 360 - 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  // Stundenzeiger-Berechnung
  const hours = date.getHours();
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 - 90; // Minutenanteil berücksichtigen
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);




window.onload = () => {
  const clockFace = document.querySelector('.inner-clock-face');
  
  // Minutenmarkierungen hinzufügen
  for (let i = 0; i < 60; i++) {
    const minuteMarking = document.createElement('div');
    minuteMarking.classList.add('minute-marking');
    
    // Jede Markierung wird um 6 Grad rotiert, um sie gleichmäßig zu verteilen
    minuteMarking.style.transform = `rotate(${i * 6}deg) translateY(-45%)`;
    clockFace.appendChild(minuteMarking);
  }

// Klasse für das Erstellen von Punkten
class dot {
  constructor(id, cssClass) {
    this.id = id; // Einzigartige ID für den Punkt
    this.cssClass = cssClass; // CSS-Klasse für die Positionierung
  }

  createDotElement() {
    const dotElement = document.createElement("span");
    dotElement.id = this.id;
    dotElement.className = `dot ${this.cssClass}`;
    return dotElement;
  }
}

// Erstelle den ersten Punkt (z.B. in der Mitte)
const centerDot = new dot("center-dot", "center-position");
document.querySelector(".clock").appendChild(centerDot.createDotElement());

const fiveDot = new dot("five-dot", "five-position");
document.querySelector(".clock").appendChild(fiveDot.createDotElement());

const tenDot = new dot("ten-dot", "ten-position");
document.querySelector(".clock").appendChild(tenDot.createDotElement());

const twentyDot = new dot("twenty-dot", "twenty-position");
document.querySelector(".clock").appendChild(twentyDot.createDotElement());

const twentyfiveDot = new dot("twentyfive-dot", "twentyfive-position");
document.querySelector(".clock").appendChild(twentyfiveDot.createDotElement());

const thirtyfiveDot = new dot("thirtyfive-dot", "thirtyfive-position");
document.querySelector(".clock").appendChild(thirtyfiveDot.createDotElement());

const fortyDot = new dot("forty-dot", "forty-position");
document.querySelector(".clock").appendChild(fortyDot.createDotElement());

const fiftyDot = new dot("fifty-dot", "fifty-position");
document.querySelector(".clock").appendChild(fiftyDot.createDotElement());

const fiftyfiveDot = new dot("fiftyfive-dot", "fiftyfive-position");
document.querySelector(".clock").appendChild(fiftyfiveDot.createDotElement());

};
