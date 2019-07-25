var Ende;
(function (Ende) {
    class Fisch extends Ende.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
        } // Ende constructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() {
            this.x += Math.random() * 5 + 10;
            this.y += Math.random() * 0;
        } // Ende moving
        return() {
            if (this.x > 1000) {
                this.x = 0; // Startpunkt
            }
        } // Ende return
        // Fische zeichnen
        draw() {
            // Kopf
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 23, this.y + 105, 27, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fill();
            // Auge
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 30, this.y + 98, 10, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#ffffff";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 30, this.y + 103, 4, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#000000";
            Ende.crc2.fill();
            // K�rper
            Ende.crc2.beginPath();
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fillRect(this.x - 70, this.y + 78, 90, 55); // Anfang, H�he, Dicke, L�nge
            Ende.crc2.closePath();
            Ende.crc2.moveTo(this.x - 110, this.y + 150);
            Ende.crc2.lineTo(this.x - 65, this.y + 100);
            Ende.crc2.lineTo(this.x - 110, this.y + 50);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(this.x - 90, this.y + 150);
            Ende.crc2.lineTo(this.x - 65, this.y + 100);
            Ende.crc2.lineTo(this.x - 90, this.y + 50);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fill();
        } // Ende draw
        // zuf�llige Farbe
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 70%)";
        } // Ende setRandomColor
    }
    Ende.Fisch = Fisch; // Ende export class
})(Ende || (Ende = {})); // Ende namespace
//# sourceMappingURL=Fisch.js.map