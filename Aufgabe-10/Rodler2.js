var Aufgabe10;
(function (Aufgabe10) {
    class Rodler2 extends Aufgabe10.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.moving();
            this.return();
            this.draw();
        }
        moving() {
            this.x += Math.random() * 10 - 40;
            this.y += Math.random() * 30 - 40;
        }
        return() {
            if (this.y > 500) {
                this.y = 150; // Startpunkt
            }
        } // Ende return
        // Rodler zeichnen
        draw() {
            // Kopf
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 245, 4, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = "#fff7b5";
            Aufgabe10.crc2.fill();
            // M�tze
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 243, 4, 3, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 238, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            // K�rper
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fillRect(this.x + 26, this.y + 252, 8, 20); // Anfang, H�he, Dicke, L�nge
            // Arm
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 47, this.y + 255);
            Aufgabe10.crc2.lineTo(this.x + 27, this.y + 255);
            Aufgabe10.crc2.strokeStyle = this.color;
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.closePath();
            // Kragen
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 30, this.y + 252, 5, 3, 2 * Math.PI); // x, y, Gr��e
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            // Schlitten
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 45, this.y + 266);
            Aufgabe10.crc2.lineTo(this.x + 70, this.y + 275);
            Aufgabe10.crc2.strokeStyle = "#AE7F36";
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 60, this.y + 235);
            Aufgabe10.crc2.lineTo(this.x + 45, this.y + 267);
            Aufgabe10.crc2.strokeStyle = "#AE7F36";
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        }
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 90%, 50%)";
        }
    }
    Aufgabe10.Rodler2 = Rodler2;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Rodler2.js.map