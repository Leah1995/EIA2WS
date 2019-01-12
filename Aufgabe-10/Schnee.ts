namespace Aufgabe10 {

    export class Schnee extends MovingObject {

        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor(_x: number, _y: number) {
            super(_x, _y); // Superklasse
        }

        // Verweisung auf Eigenschaften der Objekte
        update(): void {
            this.moving();
            this.return();
            this.draw();
        }

        // Geschwindigkeit
        moving(): void {
            this.y += Math.random() * 5;
        }

        // Schneeflocken tauchen wieder auf
        return(): void {
            if (this.y > 600) {
                this.y = 0;
            }
        }

        // Schneeflocken zeichnen
        
        // gerade Linie
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 12);
            crc2.lineTo(this.x, this.y + 7);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();

            // schiefe Linien
            crc2.beginPath();
            crc2.moveTo(this.x - 7, this.y + 3);
            crc2.lineTo(this.x + 7, this.y - 7);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 7, this.y + 3);
            crc2.lineTo(this.x - 7, this.y - 7);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();

            crc2.closePath();
        } // Ende draw()

    } // exportiert
} // Namespace