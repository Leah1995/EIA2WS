var Ende;
(function (Ende) {
    Ende.object = [];
    let image;
    let zeit = 60;
    Ende.point = 0;
    // Initialisierung
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Ende.crc2 = canvas.getContext("2d");
        document.getElementById("Endbildschirm").hidden = true;
        window.setTimeout(timer, 60000); // ~ 1 Min
        // Bewegte Objekte
        //Schleife Spielerfisch
        for (let i = 0; i < 1; i++) {
            let s = new Ende.Mainfish(0.5 * canvas.width, 1); // Startpunkt
            Ende.object.push(s);
        } // Ende for Schleife
        //Schleife Fisch
        for (let i = 0; i < 5; i++) {
            let s = new Ende.Fisch(Math.random() * canvas.width - 0.1, Math.random() * 0.7 * canvas.height + 50); // Startpunkt
            Ende.object.push(s);
        } // Ende for Schleife
        //Schleife Fisch2
        for (let i = 0; i < 10; i++) {
            let s = new Ende.Fisch2(Math.random() * canvas.width - 0.1, Math.random() * canvas.height - 75); // Startpunkt
            Ende.object.push(s);
        } // Ende for Schleife
        //Schleife Blasen 
        for (let i = 0; i < 15; i++) {
            let s = new Ende.Bubbles(Math.random() * canvas.width - 0.1, Math.random() * canvas.height);
            Ende.object.push(s);
        } // Ende for Schleife
        // Hintergrund
        let grd = Ende.crc2.createLinearGradient(10, 600, 0, 0);
        grd.addColorStop(0, "#224CF7");
        grd.addColorStop(0.9, "white");
        Ende.crc2.fillStyle = grd;
        Ende.crc2.fillRect(0, 0, 900, 500);
        // Sand
        drawSand(0, 400);
        function drawSand(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.quadraticCurveTo(_x + 130, _y - 20, _x + 260, _y + 50);
            Ende.crc2.quadraticCurveTo(_x + 390, _y + 100, _x + 540, _y);
            Ende.crc2.quadraticCurveTo(_x + 900, _y + 90, _x + 1220, _y - 25);
            Ende.crc2.lineTo(_x, _y + 950);
            Ende.crc2.lineTo(_x, _y);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = "#A3A175";
            Ende.crc2.fill();
        } // Ende function drawSand
        // Kiesel
        drawKiesel(100, 500);
        function drawKiesel(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.arc(_x + 23, _y + 245, 10, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#737575";
            Ende.crc2.fill();
        } // Ende function drawKiesel1
        // Kiesel zuf�llig hinstellen
        for (let i = 0; i < 70; i++) {
            let randomX = (Math.random() * (900 - 1)) + 1;
            let randomY = (Math.random() * (400 - 200)) + 220;
            let randomKiesel = Math.floor((Math.random() * 2)) + 1;
            if (randomKiesel == 1) {
                drawKiesel(randomX, randomY);
            } // Ende if Bedingung
        } // Ende for Schleife
        // Stein1
        drawStein1(50, 400);
        function drawStein1(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(_x + 110, _y + 10);
            Ende.crc2.lineTo(_x - 70, _y + 90);
            Ende.crc2.lineTo(_x - 70, _y - 50);
            Ende.crc2.lineTo(_x + 20, _y - 50);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = "#78755A";
            Ende.crc2.fill();
        } // Ende function drawStein1
        // Stein2
        drawStein2(750, 450);
        function drawStein2(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(_x + 110, _y + 50);
            Ende.crc2.lineTo(_x - 70, _y + 70);
            Ende.crc2.lineTo(_x - 70, _y - 10);
            Ende.crc2.lineTo(_x + 20, _y - 150);
            Ende.crc2.lineTo(_x + 170, _y - 10);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = "#78755A";
            Ende.crc2.fill();
        } // Ende function drawStein2
        // Pflanzen
        drawPflanze1(200, 600);
        function drawPflanze1(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(_x, _y);
            Ende.crc2.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
            Ende.crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            Ende.crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            Ende.crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            Ende.crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
            Ende.crc2.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = "green";
            Ende.crc2.fill();
        } // Ende function drawPflanze1
        drawPflanze2(300, 600);
        function drawPflanze2(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(_x, _y);
            Ende.crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            Ende.crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            Ende.crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            Ende.crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = "green";
            Ende.crc2.fill();
        } // Ende function drawPflanze2
        drawPflanze3(700, 600);
        function drawPflanze3(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.moveTo(_x, _y);
            Ende.crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            Ende.crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            Ende.crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            Ende.crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
            Ende.crc2.closePath();
            Ende.crc2.fillStyle = "green";
            Ende.crc2.fill();
        } // Ende function drawPflanze3
        // Schatztruhe
        drawTruhe(400, 400);
        function drawTruhe(_x, _y) {
            Ende.crc2.beginPath();
            Ende.crc2.arc(_x + 145, _y + 25, 74, 3.1, 2 * Math.PI); // x, y, size
            Ende.crc2.fillStyle = "#FAFB9D";
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.fillStyle = "#F4F74B";
            Ende.crc2.fillRect(_x + 70, _y + 18, 150, 105);
            Ende.crc2.fill();
            Ende.crc2.beginPath();
            Ende.crc2.arc(_x + 145, _y + 25, 7, 0, 2 * Math.PI);
            Ende.crc2.fillStyle = "#000000";
            Ende.crc2.fill();
        } // Ende function drawTruhe
        // Ende des Spiels
        function timer() {
            let canvas = document.getElementsByTagName("canvas")[0];
            canvas.hidden = true;
            document.getElementById("Endbildschirm").hidden = false;
            document.getElementById("endscore").innerText = Ende.point.toString();
            Ende.crc2 = canvas.getContext("2d");
        } // Ende Game
        //Hintergrund speichern
        image = Ende.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } //Ende der Init-Funktion
    // Animation
    function animate() {
        // Zur�cksetzen und neu erstellen
        Ende.crc2.clearRect(0, 0, 900, 600);
        Ende.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < Ende.object.length; i++) {
            let s = Ende.object[i];
            s.update();
        } // Ende for Schleife
        // Geschwindigkeit
        window.setTimeout(animate, 100);
    } // Ende function animate
    // Tastenfunktionen 
    Ende.rightKey = false;
    Ende.leftKey = false;
    Ende.upKey = false;
    Ende.downKey = false;
    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeyPress, false);
    document.addEventListener("keyup", handleKeyRelease, false);
    document.addEventListener("keyright", handleKeyPress, false);
    document.addEventListener("keyleft", handleKeyRelease, false);
    document.addEventListener("DOMContentLoaded", function () {
        // Namensprompt
        var name;
        name = prompt("Dein Name bitte", "Anonym");
        console.log("Name:", name);
    });
    // Tastenbedingungen
    function handleKeyPress(_event) {
        if (_event.keyCode == 39) {
            Ende.rightKey = true;
            //            console.log("rightKey: " + rightKey);
            Ende.object[0].moving();
        }
        else if (_event.keyCode == 37) {
            Ende.leftKey = true;
            //            console.log("leftKey: " + leftKey);
            Ende.object[0].moving();
        }
        else if (_event.keyCode == 38) {
            Ende.upKey = true;
            //            console.log("leftKey: " + leftKey);
            Ende.object[0].moving();
        }
        else if (_event.keyCode == 40) {
            Ende.downKey = true;
            //            console.log("leftKey: " + leftKey);
            Ende.object[0].moving();
        }
    } //handleDownkey
    //Key is released
    function handleKeyRelease(_event) {
        if (_event.keyCode == 39) {
            Ende.rightKey = false;
        }
        else if (_event.keyCode == 37) {
            Ende.leftKey = false;
        }
        else if (_event.keyCode == 38) {
            Ende.upKey = false;
        }
        else if (_event.keyCode == 40) {
            Ende.downKey = false;
        }
    } //handleKeyRelease
})(Ende || (Ende = {})); // Namespace
//# sourceMappingURL=Canvas.js.map