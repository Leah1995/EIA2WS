var Endabgabe;
(function (Endabgabe) {
    class Tree extends Endabgabe.MovingObject {
        constructor() {
            super();
            this.xP = 40 + Math.random() * 200;
            this.yP = 450 + Math.random() * 150;
            this.color = "#0B6138";
        } // Ende constructor
        draw() {
            Endabgabe.crc2.fillStyle = "#886A08";
            Endabgabe.crc2.fillRect(this.xP - 8, this.yP + 60, 12, 15);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP, this.yP);
            Endabgabe.crc2.lineTo(this.xP + 30, this.yP + 60);
            Endabgabe.crc2.lineTo(this.xP - 30, this.yP + 60);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = this.color;
            Endabgabe.crc2.fill();
        } // Ende draw
    }
    Endabgabe.Tree = Tree; // Ende export class
})(Endabgabe || (Endabgabe = {})); // Ende namespace
//# sourceMappingURL=Baum.js.map