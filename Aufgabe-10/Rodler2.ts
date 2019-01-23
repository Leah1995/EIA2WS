namespace Aufgabe10 {

    export class Rodler2 extends MovingObject {
        dx: number;
        dy: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
        } // Ende constructor

        update(): void {
            this.moving();
            this.return();
            this.draw();
        } // Ende update

        moving(): void {
            this.x += Math.random() * 10 - 10;
            this.y += Math.random() * 10 - 10;
        } // Ende moving

        return(): void {
            if (this.y < 10) { // Endpunkt
                this.y = 600; // Startpunkt
            }
            if (this.x < 0) {
                this.x = 400;
            }

        } // Ende return

        // Rodler zeichnen
        draw(): void {
            // Kopf
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 45, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#fff7b5";
            crc2.fill();
            // Mütze
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 43, 4, 3, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 38, 2, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            // Körper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x + 26, this.y + 52, 8, 20); // Anfang, Höhe, Dicke, Länge

            // Arm
            crc2.beginPath();
            crc2.moveTo(this.x + 47, this.y + 55);
            crc2.lineTo(this.x + 27, this.y + 55);
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 4;
            crc2.stroke();
            crc2.closePath();

            // Kragen
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 52, 5, 3, 2 * Math.PI); // x, y, Größe
            crc2.fillStyle = this.color;
            crc2.fill();

            // Schlitten
            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y + 66);
            crc2.lineTo(this.x + 70, this.y + 75);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 60, this.y + 35);
            crc2.lineTo(this.x + 45, this.y + 67);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        } // Ende draw

        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 90%, 50%)";
        } // Ende setRandomColor

    } // Ende export class
} // Ende namespace