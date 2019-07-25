var Ende;
(function (Ende) {
    class MovingObject {
        constructor(_x, _y) {
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        } // Ende constructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() { }
        return() { }
        draw() { }
        setRandomColor() { }
    }
    Ende.MovingObject = MovingObject; // exportiert
})(Ende || (Ende = {})); // Namespace
//# sourceMappingURL=Moving.js.map