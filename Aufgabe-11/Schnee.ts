namespace Aufgabe11 {

    export class Snow extends MovingObject {
        xD: number;
        yD: number;

        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor() {
            super();
            this.xP = Math.random() * 400;
            this.yP = Math.random() * 600;
        }
        
        // Verweisung auf Eigenschaften der Objekte
        update(): void {
            this.draw();
        }

        // Richtung des Schnees
        moving(): void {
            this.yD = 2;
            this.xD = Math.random() * 0;

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.yP > 600) {
                this.yP = 0;
                
            } // Ende if Bedingung
        } // Ende move

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.xP, this.yP - 12);
            crc2.lineTo(this.xP, this.yP + 7);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.xP - 7, this.yP + 3);
            crc2.lineTo(this.xP + 7, this.yP - 7);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.xP + 7, this.yP + 3);
            crc2.lineTo(this.xP - 7, this.yP - 7);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();
        } // Ende draw
        
    } // Ende export class
} // Ende namespace