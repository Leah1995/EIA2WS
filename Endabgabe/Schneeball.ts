namespace Endabgabe {

    export class Schneeball extends MovingObject {
        radius: number;
        constructor() {
            super();
            this.radius = 25;
        } // Ende radius

        moving(): void {
            this.radius -= 5;
        } // Ende move

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        } // Ende draw
    }  // Ende export class
}  // Ende namespace