// Zeiger-Elemente für die analoge Uhr
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// Funktion zur Aktualisierung der analogen Uhr
function updateAnalogClock() {
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
}

// Funktion zur Aktualisierung der digitalen Uhr
function updateDigitalClock(digitalClock) {
  const date = new Date();

  // Zeitwerte formatieren
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Inhalt der digitalen Uhr aktualisieren
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Funktion zur Initialisierung der Uhr
window.onload = () => {
  const clockFace = document.querySelector(".inner-clock-face");

  // Minutenmarkierungen hinzufügen
  for (let i = 0; i < 60; i++) {
    const minuteMarking = document.createElement("div");
    minuteMarking.classList.add("minute-marking");

    // Jede Markierung wird um 6 Grad rotiert, um sie gleichmäßig zu verteilen
    minuteMarking.style.transform = `rotate(${i * 6}deg) translateY(-45%)`;
    clockFace.appendChild(minuteMarking);
  }

  // Klasse für das Erstellen von Punkten
  class Dot {
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

  // Punkte erstellen und zur Uhr hinzufügen
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

  // Digitale Uhr erstellen
  const digitalClock = document.createElement("div");
  digitalClock.classList.add("digital-clock");
  digitalClock.textContent = "00:00:00"; // Initialer Wert
  clockContainer.appendChild(digitalClock);

  // Analoge und digitale Uhr alle 1 Sekunde aktualisieren
  setInterval(() => {
    updateAnalogClock();
    updateDigitalClock(digitalClock);
  }, 1000);
};
