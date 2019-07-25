namespace Ende {

    export class Mainfish extends MovingObject {
        dx: number;
        dy: number;
        size: number = 0;
        fischElement: Fisch;
        constructor(_x: number, _y: number) {
            super(_x, _y);
        } // Ende c onstructor

        update(): void {
            this.moving();
            this.return();
            this.draw();
        } // Ende update

        moving(): void {
            if (rightKey == true && object[0].x < crc2.canvas.width) {
                this.x += 10;
            }
            else if (leftKey == true && object[0].x > 0) {
                this.x -= 10;
            }
            else if (upKey == true && object[0].y > 0 && object[0].y - 1 < crc2.canvas.height) { // GRENZEN FUNKTIONIEREN NOCH NCHT
                this.y -= 10;
            }
            else if (downKey == true && object[0].y > 0 && object[0].y - 8 < crc2.canvas.height) {
                this.y += 10;
            }
            this.collision();

        } // Ende moving

        collision(): void { // Testet ob eine Kolision vorliegt und vergrößert den Fisch oder Bricht das Spiel ab 
            object.forEach(function(element: MovingObject) {

                if (element instanceof Fisch)
                    if ((Math.abs(element.x - object[0].x) < 100) && (Math.abs(element.y - object[0].y) < 100)) {
                        //alert("BBB");
                        //                    document.getElementById("Endbildschirm").hidden = true;
                        //                    return;
                    }

                if (element instanceof Fisch2)
                    if ((Math.abs(element.x - object[0].x) < 100) && (Math.abs(element.y - object[0].y) < 100)) {
                        //object.splice(object.indexOf(element));
                        object[0].size += 1;
                        return;
                    }
            });
            return;
        }

        return(): void {
            if (this.y < 90) { // Endpunkt
            }
            if (this.x < -10) {
                this.x = 100;
            }
        } // Ende return

        // Fische zeichnen
        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x + 53, this.y + 45, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#AC0603";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(30, 20);
            //Auge
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y + 38, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 23, this.y + 40, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 130, this.y + 70);
            crc2.lineTo(this.x + 75, this.y + 45);
            crc2.lineTo(this.x + 130, this.y + 10);
            crc2.fillStyle = "#AC0603";
            crc2.fill();

            // Text
            crc2.font = "20px Arial";
            crc2.fillStyle = "white";
            crc2.fillText("Du", 50, 50);

        } // Ende draw


    } // Ende export class
} // Ende namespace