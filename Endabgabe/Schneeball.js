var Endabgabe;
(function (Endabgabe) {
    class Schneeball extends Endabgabe.MovingObject {
        constructor() {
            super();
            this.radius = 25;
        } // Ende radius
        moving() {
            this.radius -= 5;
        } // Ende move
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI, false);
            Endabgabe.crc2.fillStyle = "#FFFFFF";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.stroke();
        } // Ende draw
    }
    Endabgabe.Schneeball = Schneeball; // Ende export class
})(Endabgabe || (Endabgabe = {})); // Ende namespace
//# sourceMappingURL=Schneeball.js.map