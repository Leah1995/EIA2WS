var Ende;
(function (Ende) {
    class Mainfish extends Ende.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
            this.size = 10;
        } // Ende constructor
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
            else if (Ende.upKey == true && Ende.object[0].y > 0) {
                this.y -= 10;
            }
            else if (Ende.downKey == true && Ende.object[0].y - 8 < Ende.crc2.canvas.height) {
                this.y += 10;
            }
            this.collision();
        } // Ende moving
        collision() {
            Ende.object.forEach(function (element) {
                if (element instanceof Ende.Fisch2) {
                    if ((Math.abs(element.x - Ende.object[0].x) < 80) && (Math.abs(element.y - Ende.object[0].y) < 80)) {
                        element.exists = false;
                        Ende.object.splice(Ende.object.indexOf(element), 1);
                        Ende.object[0].size += 1;
                        Ende.point += 1;
                        console.log(Ende.point);
                        document.getElementById("endscore").innerHTML = Ende.point.toString();
                        return;
                    }
                } // Ende if Bedingung
                if (element instanceof Ende.Fisch) {
                    if ((Math.abs(element.x - Ende.object[0].x) < 70) && (Math.abs(element.y - Ende.object[0].y) < 70)) {
                        //alert("AAA");
                        //this.removeAll();
                        document.getElementById("Endbildschirm").hidden = false;
                        document.getElementById("myCanvas").hidden = true;
                        return;
                    }
                } // Ende if Bedingung
            });
            return;
        }
        //        removeAll(): void {
        //            //            alert("CCC");
        //            object.forEach(function(element: MovingObject) {
        //                if (!(element instanceof Bubbles)) {
        //                    alert(element.exists);
        //                    object.splice(object.indexOf(element), 1);
        //                }
        //            });
        //            return;
        //        }
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
            Ende.crc2.arc(this.x + 53, this.y + 45, 4 * this.size, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#AC0603";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(30, 20);
            //Auge
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 25, this.y + 38, 1 * this.size, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#ffffff";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.arc(this.x + 23, this.y + 40, 0.7 * this.size, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#000000";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(this.x + 60 + this.size * 5, this.y + 70); //unten
            Ende.crc2.lineTo(this.x + 45 + this.size * 4, this.y + 45); // links
            Ende.crc2.lineTo(this.x + 60 + this.size * 5, this.y + 10); //oben 
            Ende.crc2.fillStyle = "#AC0603";
            Ende.crc2.fill();
            // Text
            Ende.crc2.font = "20px Staatliches";
            Ende.crc2.fillStyle = "white";
            Ende.crc2.fillText("Du", this.x + 50, this.y + 50);
        } // Ende draw
    }
    Ende.Mainfish = Mainfish; // Ende export class
})(Ende || (Ende = {})); // Ende namespace
//# sourceMappingURL=MainFish.js.map