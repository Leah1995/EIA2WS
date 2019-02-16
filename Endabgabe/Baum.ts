namespace Endabgabe {

    export class Tree extends MovingObject {
        color: string;

        constructor() {
            super();
            this.xP = 40 + Math.random() * 200;
            this.yP = 450 + Math.random() * 150;
            this.color = "#0B6138";
        } // Ende constructor

        draw(): void {
            crc2.fillStyle = "#886A08";
            crc2.fillRect(this.xP - 8, this.yP + 60, 12, 15);
            crc2.beginPath();
            crc2.moveTo(this.xP, this.yP);
            crc2.lineTo(this.xP + 30, this.yP + 60);
            crc2.lineTo(this.xP - 30, this.yP + 60);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
        } // Ende draw
    } // Ende export class
}  // Ende namespace