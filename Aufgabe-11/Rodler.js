var Aufgabe11;
(function (Aufgabe11) {
    class Child extends Aufgabe11.MovingObject {
        // Konstruktor
        constructor() {
            super();
            this.xP = Math.random() * 75 + 20;
            this.yP = Math.random() * 50 + 300;
            this.colour = "hsl(" + Math.random() * 250 + ", 70%, 50%)";
        } // Ende constructor
        // Hoch und runter fahren der Rodler
        moving() {
            if (this.movedown == true)
                this.driveDown();
            else {
                this.driveUp();
            }
        } // Ende moving
        driveDown() {
            this.xD = 5; // Ver�nderung in x-Richtung
            this.yD = 2; // Ver�nderung in y-Richtung
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP > 300) {
                this.movedown = false;
            } // Ende if Bedingung
        } // Ende driveDown
        driveUp() {
            this.xD = Math.random() * (-5);
            this.yD = Math.random() * (-2);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 15) {
                this.movedown = true;
            } // Ende if Bedingung
            this.draw();
        } // Ende driveUp
        draw() {
            // Kopf
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.xP + 32, this.yP + 45, 4, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#fff7b5";
            Aufgabe11.crc2.fill();
            // M�tze
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.xP + 32, this.yP + 43, 4, 3, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = this.colour;
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.xP + 30, this.yP + 38, 2, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = this.colour;
            Aufgabe11.crc2.fill();
            // K�rper
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.colour;
            Aufgabe11.crc2.fillRect(this.xP + 28, this.yP + 52, 8, 15); // Anfang, H�he, Dicke, L�nge
            // Bein
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.xP + 28, this.yP + 65);
            Aufgabe11.crc2.lineTo(this.xP + 45, this.yP + 75);
            Aufgabe11.crc2.strokeStyle = this.colour;
            Aufgabe11.crc2.lineWidth = 4;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            // Kragen
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.xP + 32, this.yP + 52, 5, 3, 2 * Math.PI); // x, y, Gr��e
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.fill();
            // Schlitten
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.xP + 25, this.yP + 66);
            Aufgabe11.crc2.lineTo(this.xP + 50, this.yP + 80);
            Aufgabe11.crc2.strokeStyle = "#AE7F36";
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.xP + 20, this.yP + 35);
            Aufgabe11.crc2.lineTo(this.xP + 25, this.yP + 67);
            Aufgabe11.crc2.strokeStyle = "#AE7F36";
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
        } // Ende draw
    }
    Aufgabe11.Child = Child; // Ende export class
})(Aufgabe11 || (Aufgabe11 = {})); // Ende namespace
//# sourceMappingURL=Rodler.js.map