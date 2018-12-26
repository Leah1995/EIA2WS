var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2); // Testen, ob es funktioniert
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        // Himmel
        crc2.fillStyle = "#4E8FF7";
        crc2.fillRect(0, 0, 400, 700);
        // Sonne
        crc2.beginPath();
        crc2.arc(60, 80, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FEFEE6";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(60, 80, 70, 0, 2 * Math.PI);
        crc2.fillStyle = "#FBFCB4";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(60, 80, 50, 0, 2 * Math.PI); // x, y, size
        crc2.fillStyle = "#FAFB9D";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(60, 80, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F4F74B";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(60, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#F0F30B";
        crc2.fill();
        // Wolke 1
        crc2.beginPath();
        crc2.arc(120, 270, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(150, 280, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(80, 260, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(130, 250, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(80, 275, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(110, 240, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        // Wolke 2
        crc2.beginPath();
        crc2.arc(320, 130, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(350, 120, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(380, 120, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(330, 130, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(390, 120, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(380, 110, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(310, 110, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(340, 105, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(540, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(430, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6EFFE";
        crc2.fill();
        // Funktionen
        drawBerg(300, 470);
        drawSchnee(0, 300);
        drawRodler1(90, 40);
        drawSchlitten1(90, 30);
        drawRodler2(20, -30);
        drawSchlitten2(20, 350);
        drawBaum1(100, 500, "#cc9966", "#44d271");
        drawBaum2(400, 500, "#4c2e0a", "#00514c");
        drawFlocke(800, 600);
        // Schnee
        function drawSchnee(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x + 400, _y + 250);
            crc2.lineTo(_x, _y + 300);
            crc2.lineTo(_x - 10, _y - 10);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.fillRect(0, 500, 800, 100);
        } // Ende function drawSchnee
        // Rodler
        function drawRodler1(_x, _y) {
            // Kopf
            crc2.beginPath();
            crc2.arc(_x + 92, _y + 355, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#fff7b5";
            crc2.fill();
            // M�tze
            crc2.beginPath();
            crc2.arc(_x + 91, _y + 353, 8, 1.9, 2 * Math.PI);
            crc2.fillStyle = "#4BF7B2";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 85, _y + 346, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#0ADA84";
            crc2.fill();
            // K�rper
            crc2.beginPath();
            crc2.arc(_x + 92, _y + 370, 8, 3, 2 * Math.PI); // x, y, Gr��e
            crc2.fillStyle = "#04623B";
            crc2.fill();
            crc2.fillStyle = "#0BF393";
            crc2.fillRect(_x + 84, _y + 370, 15, 20); // Anfang, H�he, Dicke, L�nge
            // Bein
            crc2.beginPath();
            crc2.moveTo(_x + 85, _y + 393);
            crc2.lineTo(_x + 110, _y + 382);
            crc2.strokeStyle = "#04623B";
            crc2.lineWidth = 7;
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x + 105, _y + 380);
            crc2.lineTo(_x + 115, _y + 405);
            crc2.strokeStyle = "#04623B";
            crc2.lineWidth = 7;
            crc2.stroke();
            crc2.closePath();
            // Arm
            crc2.beginPath();
            crc2.moveTo(_x + 88, _y + 370);
            crc2.lineTo(_x + 90, _y + 393);
            crc2.strokeStyle = "#fff7b5";
            crc2.lineWidth = 6;
            crc2.stroke();
            crc2.closePath();
        } // Ende function drawRodler
        // Schlitten 1
        function drawSchlitten1(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x + 79, _y + 400);
            crc2.lineTo(_x + 120, _y + 420);
            crc2.strokeStyle = "#7B5926";
            crc2.lineWidth = 6;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x + 80, _y + 415);
            crc2.lineTo(_x + 120, _y + 435);
            crc2.strokeStyle = "#7B5926";
            crc2.lineWidth = 6;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x + 112, _y + 415);
            crc2.lineTo(_x + 112, _y + 430);
            crc2.strokeStyle = "#7B5926";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x + 75, _y + 380);
            crc2.lineTo(_x + 81, _y + 418);
            crc2.strokeStyle = "#7B5926";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        } // Ende function drawSchlitten1
        // Rodler 2
        function drawRodler2(_x, _y) {
            // Kopf
            crc2.beginPath();
            crc2.arc(_x + 32, _y + 345, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#fff7b5";
            crc2.fill();
            // M�tze
            crc2.beginPath();
            crc2.arc(_x + 32, _y + 343, 4, 3, 2 * Math.PI);
            crc2.fillStyle = "#F76A4B";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 30, _y + 338, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "#F3370B";
            crc2.fill();
            // K�rper
            crc2.beginPath();
            crc2.fillStyle = "#F3370B";
            crc2.fillRect(_x + 28, _y + 352, 8, 15); // Anfang, H�he, Dicke, L�nge
            // Bein
            crc2.beginPath();
            crc2.moveTo(_x + 28, _y + 365);
            crc2.lineTo(_x + 45, _y + 375);
            crc2.strokeStyle = "#F76A4B";
            crc2.lineWidth = 4;
            crc2.stroke();
            crc2.closePath();
            // Arm
            crc2.beginPath();
            crc2.moveTo(_x + 32, _y + 352);
            crc2.lineTo(_x + 32, _y + 365);
            crc2.strokeStyle = "#fff7b5";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.closePath();
            // Kragen
            crc2.beginPath();
            crc2.arc(_x + 32, _y + 352, 5, 3, 2 * Math.PI); // x, y, Gr��e
            crc2.fillStyle = "#F76A4B";
            crc2.fill();
        } // Ende function drawRodler
        // Schlitten 2
        function drawSchlitten2(_x, _y) {
            console.log(drawSchlitten2);
            crc2.beginPath();
            crc2.moveTo(_x + 25, _y - 14);
            crc2.lineTo(_x + 50, _y);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x + 25, _y - 4);
            crc2.lineTo(_x + 50, _y + 10);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x + 45, _y - 4);
            crc2.lineTo(_x + 45, _y + 7);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_x + 20, _y - 35);
            crc2.lineTo(_x + 25, _y - 3);
            crc2.strokeStyle = "#AE7F36";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        } // Ende function drawSchlitten
        // Berg
        function drawBerg(_x, _y) {
            // Berg 1 (rechts)
            crc2.beginPath();
            crc2.moveTo(_x - 230, _y - 120);
            crc2.lineTo(_x + 80, _y - 190);
            crc2.lineTo(_x + 200, _y + 140);
            crc2.fillStyle = "#f2f2f2";
            crc2.closePath();
            crc2.fill();
            // Berg 2 (links)        
            crc2.beginPath();
            crc2.moveTo(_x - 400, _y - 30);
            crc2.lineTo(_x - 250, _y - 270);
            crc2.lineTo(_x + 100, _y + 200);
            crc2.fillStyle = "#e6e6e6";
            crc2.fill();
            crc2.closePath();
            // Berg 3 (Mitte)
            crc2.beginPath();
            crc2.moveTo(_x - 430, _y - 120);
            crc2.lineTo(_x - 80, _y - 170);
            crc2.lineTo(_x + 250, _y + 140);
            crc2.fillStyle = "#d9d9d9";
            crc2.closePath();
            crc2.fill();
        } // Ende function drawBerg
        // Baum 1
        function drawBaum1(_x, _y, _trunkColor, _topColor) {
            // Stamm
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 15, _y + 160);
            crc2.lineTo(_x - 15, _y + 160);
            crc2.closePath();
            crc2.fillStyle = _trunkColor;
            crc2.fillRect(_x - 5, _y + 310, 8, 23);
            // Baumkrone
            crc2.beginPath();
            crc2.moveTo(_x + 15, _y + 320);
            crc2.lineTo(_x - 15, _y + 320);
            crc2.lineTo(_x, _y + 290);
            crc2.closePath();
            crc2.fillStyle = _topColor;
            crc2.fill();
        } // Ende function drawBaum1       
        // Baum 2
        function drawBaum2(_x, _y, _trunkColor, _topColor) {
            // Stamm
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 30, _y - 135);
            crc2.lineTo(_x - 30, _y - 135);
            crc2.fillStyle = _trunkColor;
            crc2.fillRect(_x - 4, _y + 300, 5, 15);
            crc2.closePath();
            // Baumkrone
            crc2.beginPath();
            crc2.moveTo(_x + 10, _y + 300);
            crc2.lineTo(_x - 10, _y + 300);
            crc2.lineTo(_x, _y + 260);
            crc2.closePath();
            crc2.fillStyle = _topColor;
            crc2.fill();
        } // Ende function drawBaum2
        // Schneeflocken
        function drawFlocke(_x, _y) {
            // gerade Linie
            crc2.beginPath();
            crc2.moveTo(_x, _y - 15);
            crc2.lineTo(_x, _y + 10);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();
            // schiefe Linien
            crc2.beginPath();
            crc2.moveTo(_x - 12, _y + 5);
            crc2.lineTo(_x + 12, _y - 10);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x + 12, _y + 5);
            crc2.lineTo(_x - 12, _y - 10);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();
        } // Ende function drawFlocke
        // B�ume zuf�llig hinstellen
        for (let i = 0; i < 40; i++) {
            let randomX = (Math.random() * (400 - 1)) + 1;
            let randomY = (Math.random() * (250 - 200)) + 200;
            let randomBaum1 = Math.floor((Math.random() * 2)) + 1;
            console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
            if (randomBaum1 == 1) {
                drawBaum1(randomX, randomY, "#cc9966", "#44d271");
            }
            else {
                drawBaum2(randomX, randomY, "#4c2e0a", "#00514c");
            }
        } // Ende for Schleife
        // Schneeflocken zuf�llig platzieren
        for (let i = 0; i < 200; i++) {
            let randomX = (Math.random() * (400 - 1)) + 1;
            let randomY = (Math.random() * (600 - 1)) + 1;
            let randomFlocke = Math.floor((Math.random() * 2)) + 1;
            console.log("X is " + randomX, "Y is " + randomY, randomFlocke);
            if (randomFlocke == 1) {
                drawFlocke(randomX, randomY);
            }
        } // Ende for Schleife
    } // Ende init Funktion
})(Aufgabe9 || (Aufgabe9 = {})); // Ende namespace
//# sourceMappingURL=Aufg9.js.map