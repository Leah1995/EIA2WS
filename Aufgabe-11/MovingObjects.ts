namespace Aufgabe11 {

    export class MovingObject {
        xP: number;
        yP: number;
        xD: number;
        yD: number;
        colour: string;
        color: string;
        movedown: boolean;

        // Instanzierung der Objekte
        constructor() {
            console.log("Create");
            this.setRandomColor();
        }

        moving(): void {/* vorher definiert */ }
        return(): void {/* vorher definiert */ }
        draw(): void {/* vorher definiert */ }
        driveDown(): void {/* vorher definiert */ }
        driveUp(): void {/* vorher definiert */ }
        setRandomColor(): void {/* vorher definiert */ }

    } // Ende export class
} // Ende namespace