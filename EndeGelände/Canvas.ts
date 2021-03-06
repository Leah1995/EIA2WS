namespace Ende {
    export let crc2: CanvasRenderingContext2D;
    export let object: MovingObject[] = [];
    let image: ImageData;
    let zeit: number = 60;
    export let name: string;
    export let point: number = 0;

    // Initialisierung
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        document.getElementById("Endbildschirm").hidden = true;
        window.setTimeout(timer, 60000); // ~ 1 Min

        // Bewegte Objekte
        //Schleife Spielerfisch
        for (let i: number = 0; i < 1; i++) {
            let s: Mainfish = new Mainfish(0.5 * canvas.width, 1); // Startpunkt
            object.push(s);
        } // Ende for Schleife

        //Schleife Fisch
        for (let i: number = 0; i < 5; i++) {
            let s: Fisch = new Fisch(Math.random() * canvas.width - 0.1, Math.random() * 0.7 * canvas.height + 50); // Startpunkt
            object.push(s);
        } // Ende for Schleife

        //Schleife Fisch2
        for (let i: number = 0; i < 10; i++) {
            let s: Fisch2 = new Fisch2(Math.random() * canvas.width - 0.1, Math.random() * canvas.height - 75); // Startpunkt
            object.push(s);
        } // Ende for Schleife

        //Schleife Blasen 
        for (let i: number = 0; i < 15; i++) {
            let s: Bubbles = new Bubbles(Math.random() * canvas.width - 0.1, Math.random() * canvas.height);
            object.push(s);
        } // Ende for Schleife

        // Hintergrund
        let grd: CanvasGradient = crc2.createLinearGradient(10, 600, 0, 0);
        grd.addColorStop(0, "#224CF7");
        grd.addColorStop(0.9, "white");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 900, 500);

        // Sand
        drawSand(0, 400);
        function drawSand(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.quadraticCurveTo(_x + 130, _y - 20, _x + 260, _y + 50);
            crc2.quadraticCurveTo(_x + 390, _y + 100, _x + 540, _y);
            crc2.quadraticCurveTo(_x + 900, _y + 90, _x + 1220, _y - 25);
            crc2.lineTo(_x, _y + 950);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.fillStyle = "#A3A175";
            crc2.fill();
        } // Ende function drawSand

        // Kiesel
        drawKiesel(100, 500);

        function drawKiesel(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x + 23, _y + 245, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#737575";
            crc2.fill();
        } // Ende function drawKiesel1

        // Kiesel zufällig hinstellen
        for (let i: number = 0; i < 70; i++) {
            let randomX: number = (Math.random() * (900 - 1)) + 1;
            let randomY: number = (Math.random() * (400 - 200)) + 220;
            let randomKiesel: number = Math.floor((Math.random() * 2)) + 1;
            if (randomKiesel == 1) {
                drawKiesel(randomX, randomY);
            } // Ende if Bedingung
        } // Ende for Schleife

        // Stein1
        drawStein1(50, 400);
        function drawStein1(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x + 110, _y + 10);
            crc2.lineTo(_x - 70, _y + 90);
            crc2.lineTo(_x - 70, _y - 50);
            crc2.lineTo(_x + 20, _y - 50);
            crc2.closePath();
            crc2.fillStyle = "#78755A";
            crc2.fill();
        } // Ende function drawStein1

        // Stein2
        drawStein2(750, 450);
        function drawStein2(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x + 110, _y + 50);
            crc2.lineTo(_x - 70, _y + 70);
            crc2.lineTo(_x - 70, _y - 10);
            crc2.lineTo(_x + 20, _y - 150);
            crc2.lineTo(_x + 170, _y - 10);
            crc2.closePath();
            crc2.fillStyle = "#78755A";
            crc2.fill();
        } // Ende function drawStein2

        // Pflanzen
        drawPflanze1(200, 600);
        function drawPflanze1(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
            crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
            crc2.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
            crc2.closePath();
            crc2.fillStyle = "green";
            crc2.fill();
        } // Ende function drawPflanze1

        drawPflanze2(300, 600);
        function drawPflanze2(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
            crc2.closePath();
            crc2.fillStyle = "green";
            crc2.fill();
        } // Ende function drawPflanze2

        drawPflanze3(700, 600);
        function drawPflanze3(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
            crc2.closePath();
            crc2.fillStyle = "green";
            crc2.fill();
        } // Ende function drawPflanze3

        // Schatztruhe
        drawTruhe(400, 400);
        function drawTruhe(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x + 145, _y + 25, 74, 3.1, 2 * Math.PI); // x, y, size
            crc2.fillStyle = "#FAFB9D";
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#F4F74B";
            crc2.fillRect(_x + 70, _y + 18, 150, 105);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 145, _y + 25, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();
        } // Ende function drawTruhe

        // Ende des Spiels
        function timer(): void {
            let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
            canvas.hidden = true;
            document.getElementById("Endbildschirm").hidden = false;
            document.getElementById("endscore").innerText = point.toString();
            crc2 = canvas.getContext("2d");
        } // Ende Game

        //Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } //Ende der Init-Funktion

    // Animation
    function animate(): void {

        // Zurücksetzen und neu erstellen
        crc2.clearRect(0, 0, 900, 600);
        crc2.putImageData(image, 0, 0);

        for (let i: number = 0; i < object.length; i++) {
            let s: MovingObject = object[i];
            s.update();
        } // Ende for Schleife

        // Geschwindigkeit
        window.setTimeout(animate, 100);

    } // Ende function animate

    // Tastenfunktionen 
    export let rightKey: boolean = false;
    export let leftKey: boolean = false;
    export let upKey: boolean = false;
    export let downKey: boolean = false;

    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeyPress, false);
    document.addEventListener("keyup", handleKeyRelease, false);
    document.addEventListener("keyright", handleKeyPress, false);
    document.addEventListener("keyleft", handleKeyRelease, false);
    document.addEventListener("DOMContentLoaded", function(): void {

        
        // Namensprompt
        var name: string;
        name = prompt("Dein Name bitte", "Anonym");
        console.log("Name:", name);
    });

    // Tastenbedingungen
    function handleKeyPress(_event: KeyboardEvent): void {
        if (_event.keyCode == 39) {//right
            rightKey = true;
            //            console.log("rightKey: " + rightKey);
            object[0].moving();
        }
        else if (_event.keyCode == 37) {//left
            leftKey = true;
            //            console.log("leftKey: " + leftKey);
            object[0].moving();
        }
        else if (_event.keyCode == 38) {//up
            upKey = true;
            //            console.log("leftKey: " + leftKey);
            object[0].moving();
        }
        else if (_event.keyCode == 40) {//down
            downKey = true;
            //            console.log("leftKey: " + leftKey);
            object[0].moving();
        }

    }//handleDownkey


    //Key is released
    function handleKeyRelease(_event: KeyboardEvent): void {
        if (_event.keyCode == 39) { //right
            rightKey = false;
        }
        else if (_event.keyCode == 37) { //left
            leftKey = false;
        }

        else if (_event.keyCode == 38) { //up
            upKey = false;
        }
        else if (_event.keyCode == 40) { //down
            downKey = false;
        }

    }//handleKeyRelease
} // Namespace