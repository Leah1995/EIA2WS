var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    let objects = [];
    let imagedata;
    let fps = 25;
    let i = 0;
    Endabgabe.point = 0;
    let schneeball;
    let zeit = 60;
    function resultscreen() {
        document.getElementById("endscore").innerText = Endabgabe.point.toString();
        document.getElementById("endscore").setAttribute("value", Endabgabe.point.toString());
        document.getElementById("retry").style.display = "initial";
        document.getElementById("retry").addEventListener("click", game);
    } // Ende resultscreen
    // Init
    function init() {
        document.getElementById("Endbildschirm").hidden = true;
        let spielstartButton = document.getElementById("myButton");
        spielstartButton.addEventListener("click", game);
    } // Ende init
    // beim Spielstart Anzeigen vom Anfang verstecken
    function game(_event) {
        document.getElementById("Startbildschirm").hidden = true;
        document.getElementsByTagName("header")[0].hidden = true;
        // Zeit zum Spielen
        window.setTimeout(timer, 60000); // ~ 1 Min
        Endabgabe.name = document.getElementsByTagName("input")[0].value;
        if (Endabgabe.name != "") {
            document.getElementById("myButton").hidden = true;
            let canvas = document.getElementsByTagName("canvas")[0];
            Endabgabe.crc2 = canvas.getContext("2d");
            canvas.addEventListener("touchstart", throwSnowball);
            // Funktionen
            drawSky();
            drawSchneelandschaft();
            drawSonne();
            drawWolke();
            drawBaum1(100, 500, "#cc9966", "#44d271");
            drawBaum2(400, 500, "#4c2e0a", "#00514c");
            // Generiere bewegende Objekte            
            generateSchnee();
            generateRodler();
            generateBaum();
            imagedata = Endabgabe.crc2.getImageData(0, 0, 400, 600);
            update();
            zeit = 60;
        } // Ende if Bedingung
    } // Ende Spielstart
    // Schneeballsystem
    function rodlerHit() {
        if (schneeball.radius <= 10) {
            for (let i = 0; i < objects.length; i++) {
                if (objects[i] instanceof Endabgabe.Rodler) {
                    if (hiddenRodler(i)) {
                        objects[i].hitRodler = true;
                        Endabgabe.point += 100;
                        break;
                    } // Ende if Bedingung
                } // Ende if Bedingung
            } // Ende for Schleife
            schneeball = null;
            for (let i = 0; i < objects.length; i++) {
                if (objects[i] instanceof Endabgabe.Schneeball) {
                    objects.splice(i, 1);
                } // Ende if Bedingung
            } // Ende for Schleife
        } // Ende if Bedingung
    } // Ende hitRodler
    // Getroffenes Kind
    function hiddenRodler(_i) {
        if (schneeball.xP >= objects[_i].xP && schneeball.xP <= objects[_i].xP + 100) {
            if (schneeball.yP <= objects[_i].yP && schneeball.yP >= objects[_i].yP - 200) {
                return true;
            } // Ende if Bedingung
        } // Ende if Bedingung
    } // Ende rodlerHit
    // Schneeball
    function throwSnowball(_event) {
        _event.preventDefault();
        if (!schneeball) {
            schneeball = new Endabgabe.Schneeball();
            schneeball.xP = _event.touches[0].pageX;
            schneeball.yP = _event.touches[0].pageY;
            objects.push(schneeball);
        } // Ende if Bedingung
    } // Ende Schneeball
    // Ende des Spiels
    function timer() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.hidden = true;
        document.getElementById("Endbildschirm").hidden = false;
        document.getElementsByTagName("h1")[0].hidden = true;
        Endabgabe.crc2 = canvas.getContext("2d");
    } // Ende Game
    // Punkteanzeige
    function update() {
        if (fps == 0) {
            zeit--;
        } // Ende if Bedingung
        Endabgabe.crc2.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps); // Geschwindigkeit
        Endabgabe.crc2.font = "40px Arial";
        Endabgabe.crc2.fillStyle = "black";
        Endabgabe.crc2.fillText("Points:" + " " + Endabgabe.point + " Time:" + " " + zeit, 50, 590); // Position
        if (schneeball) {
            rodlerHit();
        } // Ende if Bedingung
        // Bewegte Objekte
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            object.draw();
            object.moving();
        } // Ende for Schleife
    } // Endeupdate
    // Baum 1
    function drawBaum1(_x, _y, _trunkColor, _topColor) {
        // Stamm
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(_x, _y);
        Endabgabe.crc2.lineTo(_x + 15, _y + 160);
        Endabgabe.crc2.lineTo(_x - 15, _y + 160);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = _trunkColor;
        Endabgabe.crc2.fillRect(_x - 5, _y + 310, 8, 23);
        // Baumkrone
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(_x + 15, _y + 320);
        Endabgabe.crc2.lineTo(_x - 15, _y + 320);
        Endabgabe.crc2.lineTo(_x, _y + 290);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = _topColor;
        Endabgabe.crc2.fill();
    } // Ende function drawBaum1
    // Baum 2
    function drawBaum2(_x, _y, _trunkColor, _topColor) {
        // Stamm
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(_x, _y);
        Endabgabe.crc2.lineTo(_x + 30, _y - 135);
        Endabgabe.crc2.lineTo(_x - 30, _y - 135);
        Endabgabe.crc2.fillStyle = _trunkColor;
        Endabgabe.crc2.fillRect(_x - 4, _y + 300, 5, 15);
        Endabgabe.crc2.closePath();
        // Baumkrone
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(_x + 10, _y + 300);
        Endabgabe.crc2.lineTo(_x - 10, _y + 300);
        Endabgabe.crc2.lineTo(_x, _y + 260);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = _topColor;
        Endabgabe.crc2.fill();
    } // Ende function drawBaum2
    console.log(drawBaum1);
    // B�ume zuf�llig hinstellen
    function generateBaum() {
        for (let i = 0; i < 10; i++) {
            let randomX = (Math.random() * (400 - 1)) + 1;
            let randomY = (Math.random() * (250 - 150)) + 150;
            let randomBaum1 = Math.floor((Math.random() * 2)) + 1;
            console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
            if (randomBaum1 == 1) {
                drawBaum1(randomX, randomY, "#cc9966", "#44d271");
            } // Ende if Bedingung
            else {
                drawBaum2(randomX, randomY, "#4c2e0a", "#00514c");
            }
        } // Ende for Schleife
    } // Ende function generateBaum
    // Schneeflocken
    function generateSchnee() {
        for (let i = 0; i < 50; i++) {
            let snowflake = new Endabgabe.Snow();
            objects.push(snowflake);
        } // Ende for Schleife
    } // Ende generateSnow
    // Rodler
    function generateRodler() {
        for (let i = 0; i < 10; i++) {
            let child = new Endabgabe.Rodler();
            objects.push(child);
        } // Ende for Schleife
    } // Ende generateChild
    // Himmel
    function drawSky() {
        Endabgabe.crc2.fillStyle = "#4E8FF7";
        Endabgabe.crc2.fillRect(0, 0, 400, 600);
        Endabgabe.crc2.fill();
    } // Ende drawSky
    // Schneelandschaft
    function drawSchneelandschaft() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(0, 200);
        Endabgabe.crc2.lineTo(600, 700);
        Endabgabe.crc2.lineTo(600, 600);
        Endabgabe.crc2.lineTo(0, 600);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = "#ffffff";
        Endabgabe.crc2.fill();
    } // Ende Schneelandschaft
    // Wolken
    function drawWolke() {
        // Wolke 1
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(320, 130, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(350, 120, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(380, 120, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(330, 130, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(390, 120, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(380, 110, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(310, 110, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(340, 105, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(540, 100, 40, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(430, 100, 40, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#E6EFFE";
        Endabgabe.crc2.fill();
        // Wolke 2
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(120, 170, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#CDDFFD";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(150, 180, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#CDDFFD";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(80, 160, 22, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#CDDFFD";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(130, 150, 22, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#CDDFFD";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(80, 175, 22, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#CDDFFD";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(110, 140, 22, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#CDDFFD";
        Endabgabe.crc2.fill();
    } // Ende function drawWolke
    // Sonne
    function drawSonne() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(360, 80, 50, 0, 2 * Math.PI); // x, y, size
        Endabgabe.crc2.fillStyle = "#FAFB9D";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(360, 80, 30, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#F4F74B";
        Endabgabe.crc2.fill();
    } // Ende Sonne
    // Animation
    function animate() {
        console.log("Timeout");
    } // Ende function animate
    // Geschwindigkeit
    window.setTimeout(animate, 25);
})(Endabgabe || (Endabgabe = {})); // Ende namespace
//# sourceMappingURL=Aufg12.js.map