var Aufgabe11;
(function (Aufgabe11) {
    class Snow extends Aufgabe11.MovingObject {
        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor() {
            super();
            this.xP = Math.random() * 400;
            this.yP = Math.random() * 600;
        }
        // Verweisung auf Eigenschaften der Objekte
        update() {
            this.draw();
        }
        // Richtung des Schnees
        moving() {
            this.yD = 2;
            this.xD = Math.random() * 0;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.yP > 600) {
                this.yP = 0;
            } // Ende if Bedingung
        } // Ende move
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.xP, this.yP - 12);
            Aufgabe11.crc2.lineTo(this.xP, this.yP + 7);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.xP - 7, this.yP + 3);
            Aufgabe11.crc2.lineTo(this.xP + 7, this.yP - 7);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.xP + 7, this.yP + 3);
            Aufgabe11.crc2.lineTo(this.xP - 7, this.yP - 7);
            Aufgabe11.crc2.strokeStyle = "white";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.closePath();
        } // Ende draw
    }
    Aufgabe11.Snow = Snow; // Ende export class
})(Aufgabe11 || (Aufgabe11 = {})); // Ende namespace
//# sourceMappingURL=Schnee.js.map