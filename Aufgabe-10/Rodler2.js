var Aufgabe10;
(function (Aufgabe10) {
    class Rodler2 extends Aufgabe10.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
        } // Ende constructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() {
            this.x += Math.random() * 10 - 10;
            this.y += Math.random() * 10 - 10;
        } // Ende moving
        return() {
            if (this.y < 10) {
                this.y = 600; // Startpunkt
            }
            if (this.x < 0) {
                this.x = 400;
            }
        } // Ende return
        // Rodler zeichnen
        draw() {
            // Kopf
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 45, 4, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#fff7b5";
            Aufgabe10.crc2.fill();
            // M�tze
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 43, 4, 3, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 38, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            // K�rper
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fillRect(this.x + 26, this.y + 52, 8, 20); // Anfang, H�he, Dicke, L�nge
            // Arm
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 47, this.y + 55);
            Aufgabe10.crc2.lineTo(this.x + 27, this.y + 55);
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
            // Kragen
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 52, 5, 3, 2 * Math.PI); // x, y, Gr��e
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            // Schlitten
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 45, this.y + 66);
            Aufgabe10.crc2.lineTo(this.x + 70, this.y + 75);
            Aufgabe10.crc2.strokeStyle = "#AE7F36";
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 60, this.y + 35);
            Aufgabe10.crc2.lineTo(this.x + 45, this.y + 67);
            Aufgabe10.crc2.strokeStyle = "#AE7F36";
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        } // Ende draw
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 90%, 50%)";
        } // Ende setRandomColor
    }
    Aufgabe10.Rodler2 = Rodler2; // Ende export class
})(Aufgabe10 || (Aufgabe10 = {})); // Ende namespace
//# sourceMappingURL=Rodler2.js.map