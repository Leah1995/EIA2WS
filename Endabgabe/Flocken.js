var Endabgabe;
(function (Endabgabe) {
    class Snow extends Endabgabe.MovingObject {
        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor() {
            super();
            this.xP = Math.random() * 400;
            this.yP = Math.random() * 600;
        } // Ende constructor
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
            this.draw();
        } // Ende move
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP, this.yP - 12);
            Endabgabe.crc2.lineTo(this.xP, this.yP + 7);
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP - 7, this.yP + 3);
            Endabgabe.crc2.lineTo(this.xP + 7, this.yP - 7);
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP + 7, this.yP + 3);
            Endabgabe.crc2.lineTo(this.xP - 7, this.yP - 7);
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
        } // Ende draw
    }
    Endabgabe.Snow = Snow; // Ende export class
})(Endabgabe || (Endabgabe = {})); // Ende namespace
//# sourceMappingURL=Flocken.js.map