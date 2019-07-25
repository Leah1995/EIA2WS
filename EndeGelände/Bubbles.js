var Ende;
(function (Ende) {
    class Bubbles extends Ende.MovingObject {
        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor(_x, _y) {
            super(_x, _y); // Superklasse
        } // Ende constructor
        // Verweisung auf Eigenschaften der Objekte
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        // Geschwindigkeit
        moving() {
            this.y += Math.random() * -2 - 2;
        } // Ende moving
        // tauchen wieder auf
        return() {
            if (this.y < -50) {
                this.y = 650;
            } // Ende if Bedingung
        } // Ende return
        // Bubbles
        draw() {
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 23, this.y + 25, 15, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "rgba(255, 255, 255, 0.5";
            Ende.crc2.strokeStyle = "#ffffff";
            Ende.crc2.stroke();
            Ende.crc2.fill();
        } // Ende draw()
    }
    Ende.Bubbles = Bubbles; // Ende export class
})(Ende || (Ende = {})); // Ende Namespace
//# sourceMappingURL=Bubbles.js.map