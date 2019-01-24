var Aufgabe10;
(function (Aufgabe10) {
    class Rodler extends Aufgabe10.MovingObject {
        //        dx: number;
        //        dy: number;
        constructor(_x, _y) {
            super(_x, _y);
        } // Ende constructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() {
            this.x += Math.random() * 10 + 10;
            this.y += Math.random() * 10 + 10;
        } // Ende moving
        return() {
            if (this.x > 400) {
                this.x = -10; // Startpunkt
                if (this.y > -100) {
                    this.y = +20; // Startpunkt
                }
            }
        } // Ende return
        // Rodler zeichnen
        draw() {
            // Kopf
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 32, this.y + 245, 4, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#fff7b5";
            Aufgabe10.crc2.fill();
            // M�tze
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 32, this.y + 243, 4, 3, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 238, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            // K�rper
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fillRect(this.x + 28, this.y + 252, 8, 15); // Anfang, H�he, Dicke, L�nge
            // Bein
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 28, this.y + 265);
            Aufgabe10.crc2.lineTo(this.x + 45, this.y + 275);
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
            // Kragen
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 32, this.y + 252, 5, 3, 2 * Math.PI); // x, y, Gr��e
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            // Schlitten
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 25, this.y + 266);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y + 280);
            Aufgabe10.crc2.strokeStyle = "#AE7F36";
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 20, this.y + 235);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y + 267);
            Aufgabe10.crc2.strokeStyle = "#AE7F36";
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        } // Ende draw
        // zuf�llige Farbe
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 250 + ", 90%, 50%)";
        } // Ende setRandomColor
    }
    Aufgabe10.Rodler = Rodler; // Ende export class
})(Aufgabe10 || (Aufgabe10 = {})); // Ende namespace
//# sourceMappingURL=Rodler.js.map