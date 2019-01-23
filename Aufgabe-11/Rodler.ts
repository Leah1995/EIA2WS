namespace Aufgabe11 {

    export class Child extends MovingObject {
        xD: number;
        yD: number;       
        colour: string;
        movedown: boolean;

        // Konstruktor
        constructor() {
            super();
            this.xP = Math.random() * 75 + 20;
            this.yP = Math.random() * 50 + 300;
            this.colour = "hsl(" + Math.random() * 250 + ", 70%, 50%)";
        } // Ende constructor

        // Hoch und runter fahren der Rodler
        moving(): void {
            if (this.movedown == true)
                this.driveDown();
            else {
                this.driveUp();
            }
        } // Ende moving

        driveDown(): void {
            this.xD = 5; // Veränderung in x-Richtung
            this.yD = 2; // Veränderung in y-Richtung

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP > 300) {
                this.movedown = false;
            } // Ende if Bedingung
        } // Ende driveDown

        driveUp(): void {

            this.xD = Math.random() * (-5);
            this.yD = Math.random() * (-2);

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP < 15) {
                this.movedown = true;
            } // Ende if Bedingung
            
            this.draw();
            
        } // Ende driveUp

        draw(): void {
            // Kopf
            crc2.beginPath();
            crc2.arc(this.xP + 32, this.yP + 45, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#fff7b5";
            crc2.fill();
            // Mütze
            crc2.beginPath();
            crc2.arc(this.xP + 32, this.yP + 43, 4, 3, 2 * Math.PI);
            crc2.fillStyle = this.colour;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.xP + 30, this.yP + 38, 2, 0, 2 * Math.PI);
            crc2.fillStyle = this.colour;
            crc2.fill();

            // Körper
            crc2.beginPath();
            crc2.fillStyle = this.colour;
            crc2.fillRect(this.xP + 28, this.yP + 52, 8, 15); // Anfang, Höhe, Dicke, Länge

            // Bein
            crc2.beginPath();
            crc2.moveTo(this.xP + 28, this.yP + 65);
            crc2.lineTo(this.xP + 45, this.yP + 75);
            crc2.strokeStyle = this.colour;
            crc2.lineWidth = 4;
            crc2.stroke();
            crc2.closePath();

            // Kragen
            crc2.beginPath();
            crc2.arc(this.xP + 32, this.yP + 52, 5, 3, 2 * Math.PI); // x, y, Größe
            crc2.fillStyle = this.color;
            crc2.fill();
            
           // Schlitten
            crc2.beginPath();
            crc2.moveTo(this.xP + 25, this.yP + 66);
            crc2.lineTo(this.xP + 50, this.yP + 80);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.xP + 20, this.yP + 35);
            crc2.lineTo(this.xP + 25, this.yP + 67);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();             
        } // Ende draw
        
    } // Ende export class
} // Ende namespace