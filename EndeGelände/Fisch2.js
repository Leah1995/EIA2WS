var Ende;
(function (Ende) {
    class Fisch2 extends Ende.MovingObject {
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
            this.y += Math.random() * 0;
        } // Ende moving
        return() {
            if (this.y < 900) {
            }
            if (this.x < -100) {
                this.x = 1000;
            }
        } // Ende return
        // Fische zeichnen
        draw() {
            // Kopf
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 23, this.y + 105, 18, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fill();
            // Auge
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 20, this.y + 98, 6, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#ffffff";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 15, this.y + 100, 3, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#000000";
            Ende.crc2.fill();
            // K�rper
            Ende.crc2.beginPath();
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fillRect(this.x + 30, this.y + 87, 50, 35); // Anfang, H�he, Dicke, L�nge
            Ende.crc2.closePath();
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(this.x + 110, this.y + 130);
            Ende.crc2.lineTo(this.x + 85, this.y + 105);
            Ende.crc2.lineTo(this.x + 110, this.y + 80);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(this.x + 70, this.y + 140);
            Ende.crc2.lineTo(this.x + 25, this.y + 90);
            Ende.crc2.lineTo(this.x + 70, this.y + 70);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 77, this.y + 105, 18, 4.5, 0.6 * Math.PI);
            Ende.crc2.fillStyle = this.color;
            Ende.crc2.fill();
        } // Ende draw
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 90%, 50%)";
        } // Ende setRandomColor
    }
    Ende.Fisch2 = Fisch2; // Ende export class
})(Ende || (Ende = {})); // Ende namespace
//# sourceMappingURL=Fisch2.js.map