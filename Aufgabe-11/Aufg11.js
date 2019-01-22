var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let objects = [];
    let imagedata;
    let fps = 25;
    let i = 0;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        // Funktionen
        drawSky();
        drawSchneelandschaft();
        drawSonne();
        drawWolke();
        // Generiere bewegende Objekte
        generateSchnee();
        generateRodler();
        imagedata = Aufgabe11.crc2.getImageData(0, 0, 400, 600);
        update();
        function update() {
            Aufgabe11.crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1500 / fps);
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                object.draw();
                object.moving();
            } // Ende for Schleife
        } // Ende function update
        function generateSchnee() {
            for (let i = 0; i < 50; i++) {
                let snowflake = new Aufgabe11.Snow();
                objects.push(snowflake);
            } // Ende for Schleife
        } // Ende function generateSnow
        function generateRodler() {
            for (let i = 0; i < 10; i++) {
                let child = new Aufgabe11.Child();
                objects.push(child);
            } // Ende for Schleife
        } // Ende generateChild
        // B�ume zuf�llig hinstellen
        for (let i = 0; i < 10; i++) {
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
        // Himmel
        function drawSky() {
            Aufgabe11.crc2.fillStyle = "#4E8FF7";
            Aufgabe11.crc2.fillRect(0, 0, 400, 600);
        } // Ende drawSky
        function drawSchneelandschaft() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, 200);
            Aufgabe11.crc2.lineTo(600, 700);
            Aufgabe11.crc2.lineTo(600, 600);
            Aufgabe11.crc2.lineTo(0, 600);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "#ffffff";
            Aufgabe11.crc2.fill();
        } // Ende function drawHillside
        // Wolke 1
        function drawWolke() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(320, 130, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(350, 120, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(380, 120, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(330, 130, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(390, 120, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(380, 110, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(310, 110, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(380, 100, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(340, 105, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(540, 100, 40, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(430, 100, 40, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#E6EFFE";
            Aufgabe11.crc2.fill();
            // Wolke 2
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(120, 170, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#CDDFFD";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(150, 180, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#CDDFFD";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(80, 160, 22, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#CDDFFD";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(130, 150, 22, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#CDDFFD";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(80, 175, 22, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#CDDFFD";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(110, 140, 22, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#CDDFFD";
            Aufgabe11.crc2.fill();
        } // Ende function drawWolke
        // Sonne
        function drawSonne() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(360, 80, 50, 0, 2 * Math.PI); // x, y, size
            Aufgabe11.crc2.fillStyle = "#FAFB9D";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(360, 80, 30, 0, 2 * Math.PI);
            Aufgabe11.crc2.fillStyle = "#F4F74B";
            Aufgabe11.crc2.fill();
        } // Ende function drawSonne
        // Baum 1
        function drawBaum1(_x, _y, _trunkColor, _topColor) {
            // Stamm
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.lineTo(_x + 15, _y + 160);
            Aufgabe11.crc2.lineTo(_x - 15, _y + 160);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = _trunkColor;
            Aufgabe11.crc2.fillRect(_x - 5, _y + 310, 8, 23);
            // Baumkrone
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(_x + 15, _y + 320);
            Aufgabe11.crc2.lineTo(_x - 15, _y + 320);
            Aufgabe11.crc2.lineTo(_x, _y + 290);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = _topColor;
            Aufgabe11.crc2.fill();
        } // Ende function drawBaum1
        // Baum 2
        function drawBaum2(_x, _y, _trunkColor, _topColor) {
            // Stamm
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.lineTo(_x + 30, _y - 135);
            Aufgabe11.crc2.lineTo(_x - 30, _y - 135);
            Aufgabe11.crc2.fillStyle = _trunkColor;
            Aufgabe11.crc2.fillRect(_x - 4, _y + 300, 5, 15);
            Aufgabe11.crc2.closePath();
            // Baumkrone
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(_x + 10, _y + 300);
            Aufgabe11.crc2.lineTo(_x - 10, _y + 300);
            Aufgabe11.crc2.lineTo(_x, _y + 260);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = _topColor;
            Aufgabe11.crc2.fill();
        } // Ende function drawBaum2
        // Animation
        function animate() {
            console.log("Timeout");
            // Zur�cksetzen und neu erstellen
            Aufgabe11.crc2.clearRect(0, 0, 400, 600);
        } // Ende function animate
        // Geschwindigkeit
        window.setTimeout(animate, 100);
    } // Ende init
})(Aufgabe11 || (Aufgabe11 = {})); // Ende namespace
//# sourceMappingURL=Aufg11.js.map