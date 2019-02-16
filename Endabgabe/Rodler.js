var Endabgabe;
(function (Endabgabe) {
    class Rodler extends Endabgabe.MovingObject {
        constructor() {
            super();
            this.xP = Math.random() * 75 + 20;
            this.yP = Math.random() * 50 + 300;
            this.colour = "hsl(" + Math.random() * 250 + ", 70%, 50%)";
            this.hitRodler = false; // nicht getroffener Rodler
        } // Ende constructor
        moving() {
            if (this.movedown == true)
                this.driveDown();
            else {
                if (this.hitRodler == true) {
                    this.driveDown();
                } // Ende if Bedingung
                else {
                    this.driveUp();
                }
            }
        } // Ende move
        driveDown() {
            this.xD = 5;
            this.yD = 2;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP > 300) {
                this.movedown = false;
            } // Ende if Bedingung
        } // Ende moveDown
        driveUp() {
            this.xD = Math.random() * (-5);
            this.yD = Math.random() * (-2);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 15) {
                this.movedown = true;
            } // Ende if Bedingung
            this.draw();
        } // Ende moveUp
        draw() {
            if (this.hitRodler == false) {
                // Kopf
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.xP + 32, this.yP + 45, 4, 0, 2 * Math.PI);
                Endabgabe.crc2.fillStyle = "#fff7b5";
                Endabgabe.crc2.fill();
                // M�tze
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.xP + 32, this.yP + 43, 4, 3, 2 * Math.PI);
                Endabgabe.crc2.fillStyle = this.colour;
                Endabgabe.crc2.fill();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.xP + 30, this.yP + 38, 2, 0, 2 * Math.PI);
                Endabgabe.crc2.fillStyle = this.colour;
                Endabgabe.crc2.fill();
                // K�rper
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.fillStyle = this.colour;
                Endabgabe.crc2.fillRect(this.xP + 28, this.yP + 52, 8, 15); // Anfang, H�he, Dicke, L�nge
                // Bein
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.moveTo(this.xP + 28, this.yP + 65);
                Endabgabe.crc2.lineTo(this.xP + 45, this.yP + 75);
                Endabgabe.crc2.strokeStyle = this.colour;
                Endabgabe.crc2.lineWidth = 4;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.closePath();
                // Kragen
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.xP + 32, this.yP + 52, 5, 3, 2 * Math.PI); // x, y, Gr��e
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.fill();
            } // Ende if Bedingung
            //Schlitten
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP + 25, this.yP + 66);
            Endabgabe.crc2.lineTo(this.xP + 50, this.yP + 80);
            Endabgabe.crc2.strokeStyle = "#AE7F36";
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP + 20, this.yP + 35);
            Endabgabe.crc2.lineTo(this.xP + 25, this.yP + 67);
            Endabgabe.crc2.strokeStyle = "#AE7F36";
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
        } // Ende draw
    }
    Endabgabe.Rodler = Rodler; // Ende export class
})(Endabgabe || (Endabgabe = {})); // Ende namespace
//# sourceMappingURL=Rodler.js.map