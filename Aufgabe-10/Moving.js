var Aufgabe10;
(function (Aufgabe10) {
    class MovingObject {
        // Instanzierung der Objekte
        constructor(_x, _y) {
            console.log("Create");
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.moving();
            this.return();
            this.draw();
        }
        moving() { }
        return() { }
        draw() { }
        setRandomColor() { }
    }
    Aufgabe10.MovingObject = MovingObject; // exportiert
})(Aufgabe10 || (Aufgabe10 = {})); // Namespace
//# sourceMappingURL=Moving.js.map