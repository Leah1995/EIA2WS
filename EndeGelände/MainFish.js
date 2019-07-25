var Ende;
(function (Ende) {
    class Mainfish extends Ende.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
            this.size = 0;
        } // Ende c onstructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() {
            if (Ende.rightKey == true && Ende.object[0].x < Ende.crc2.canvas.width) {
                this.x += 10;
            }
            else if (Ende.leftKey == true && Ende.object[0].x > 0) {
                this.x -= 10;
            }
            else if (Ende.upKey == true && Ende.object[0].y > 0 && Ende.object[0].y - 1 < Ende.crc2.canvas.height) {
                this.y -= 10;
            }
            else if (Ende.downKey == true && Ende.object[0].y > 0 && Ende.object[0].y - 8 < Ende.crc2.canvas.height) {
                this.y += 10;
            }
            this.collision();
        } // Ende moving
        collision() {
            Ende.object.forEach(function (element) {
                if (element instanceof Ende.Fisch)
                    if ((Math.abs(element.x - Ende.object[0].x) < 100) && (Math.abs(element.y - Ende.object[0].y) < 100)) {
                    }
                if (element instanceof Ende.Fisch2)
                    if ((Math.abs(element.x - Ende.object[0].x) < 100) && (Math.abs(element.y - Ende.object[0].y) < 100)) {
                        //object.splice(object.indexOf(element));
                        Ende.object[0].size += 1;
                        return;
                    }
            });
            return;
        }
        return() {
            if (this.y < 90) {
            }
            if (this.x < -10) {
                this.x = 100;
            }
        } // Ende return
        // Fische zeichnen
        draw() {
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 53, this.y + 45, 40, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#AC0603";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(30, 20);
            //Auge
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 25, this.y + 38, 10, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#ffffff";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 23, this.y + 40, 7, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#000000";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(this.x + 130, this.y + 70);
            Ende.crc2.lineTo(this.x + 75, this.y + 45);
            Ende.crc2.lineTo(this.x + 130, this.y + 10);
            Ende.crc2.fillStyle = "#AC0603";
            Ende.crc2.fill();
            // Text
            Ende.crc2.font = "20px Arial";
            Ende.crc2.fillStyle = "white";
            Ende.crc2.fillText("Du", 50, 50);
        } // Ende draw
    }
    Ende.Mainfish = Mainfish; // Ende export class
})(Ende || (Ende = {})); // Ende namespace
//# sourceMappingURL=MainFish.js.map