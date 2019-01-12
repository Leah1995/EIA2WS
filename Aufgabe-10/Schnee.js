var Aufgabe10;
(function (Aufgabe10) {
    class Schnee extends Aufgabe10.MovingObject {
        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor(_x, _y) {
            super(_x, _y); // Superklasse
        }
        // Verweisung auf Eigenschaften der Objekte
        update() {
            this.moving();
            this.return();
            this.draw();
        }
        // Geschwindigkeit
        moving() {
            this.y += Math.random() * 5;
        }
        // Schneeflocken tauchen wieder auf
        return() {
            if (this.y > 600) {
                this.y = 0;
            }
        }
        // Schneeflocken zeichnen
        // gerade Linie
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y - 12);
            Aufgabe10.crc2.lineTo(this.x, this.y + 7);
            Aufgabe10.crc2.strokeStyle = "white";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.stroke();
            // schiefe Linien
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x - 7, this.y + 3);
            Aufgabe10.crc2.lineTo(this.x + 7, this.y - 7);
            Aufgabe10.crc2.strokeStyle = "white";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 7, this.y + 3);
            Aufgabe10.crc2.lineTo(this.x - 7, this.y - 7);
            Aufgabe10.crc2.strokeStyle = "white";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
        } // Ende draw()
    }
    Aufgabe10.Schnee = Schnee; // exportiert
})(Aufgabe10 || (Aufgabe10 = {})); // Namespace
//# sourceMappingURL=Schnee.js.map