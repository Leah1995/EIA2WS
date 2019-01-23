var Aufgabe10;
(function (Aufgabe10) {
    let object = [];
    let image;
    window.addEventListener("load", init);
    // Initialisierung
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe10.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10.crc2);
        console.log("setTimeout");
        //Schleife Rodler
        for (let i = 0; i < 5; i++) {
            let s = new Aufgabe10.Rodler(Math.random() * canvas.width - 0.1, +80); // Startpunkt
            object.push(s);
        } // Ende for Schleife
        //Schleife Rodler2
        for (let i = 0; i < 5; i++) {
            let s = new Aufgabe10.Rodler2(Math.random() * canvas.width - 0.1, +80); // Startpunkt
            object.push(s);
        } // Ende for Schleife
        //Schleife Schneeflocken 
        for (let i = 0; i < 50; i++) {
            let s = new Aufgabe10.Schnee(0 + Math.random() * canvas.width, 0 + Math.random() * 450);
            object.push(s);
        } // Ende for Schleife
        // Himmel
        Aufgabe10.crc2.fillStyle = "#4E8FF7";
        Aufgabe10.crc2.fillRect(0, 0, 400, 600);
        // Sonne
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(360, 80, 50, 0, 2 * Math.PI); // x, y, size
        Aufgabe10.crc2.fillStyle = "#FAFB9D";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(360, 80, 30, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#F4F74B";
        Aufgabe10.crc2.fill();
        // Wolke 1
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(320, 130, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(350, 120, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(380, 120, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(330, 130, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(390, 120, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(380, 110, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(310, 110, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(340, 105, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(540, 100, 40, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(430, 100, 40, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#E6EFFE";
        Aufgabe10.crc2.fill();
        // Wolke 2
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(120, 170, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#CDDFFD";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(150, 180, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#CDDFFD";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(80, 160, 22, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#CDDFFD";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(130, 150, 22, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#CDDFFD";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(80, 175, 22, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#CDDFFD";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(110, 140, 22, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#CDDFFD";
        Aufgabe10.crc2.fill();
        // Schnee
        drawSchnee(0, 300);
        function drawSchnee(_x, _y) {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(_x + 600, _y + 400);
            Aufgabe10.crc2.lineTo(_x - 50, _y + 300);
            Aufgabe10.crc2.lineTo(_x - 10, _y - 100);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "#ffffff";
            Aufgabe10.crc2.fill();
        } // Ende function drawSchnee
        // Baumfunktionen
        drawBaum1(100, 500, "#cc9966", "#44d271");
        drawBaum2(100, 500, "#4c2e0a", "#00514c");
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
        //Hintergrund speichern
        image = Aufgabe10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } //Ende der Init-Funktion
    // Baum 1
    function drawBaum1(_x, _y, _trunkColor, _topColor) {
        // Stamm
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 15, _y + 160);
        Aufgabe10.crc2.lineTo(_x - 15, _y + 160);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = _trunkColor;
        Aufgabe10.crc2.fillRect(_x - 5, _y + 310, 8, 23);
        // Baumkrone
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 15, _y + 320);
        Aufgabe10.crc2.lineTo(_x - 15, _y + 320);
        Aufgabe10.crc2.lineTo(_x, _y + 290);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = _topColor;
        Aufgabe10.crc2.fill();
    } // Ende function drawBaum1
    // Baum 2
    function drawBaum2(_x, _y, _trunkColor, _topColor) {
        // Stamm
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 30, _y - 135);
        Aufgabe10.crc2.lineTo(_x - 30, _y - 135);
        Aufgabe10.crc2.fillStyle = _trunkColor;
        Aufgabe10.crc2.fillRect(_x - 4, _y + 300, 5, 15);
        Aufgabe10.crc2.closePath();
        // Baumkrone
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 10, _y + 300);
        Aufgabe10.crc2.lineTo(_x - 10, _y + 300);
        Aufgabe10.crc2.lineTo(_x, _y + 260);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = _topColor;
        Aufgabe10.crc2.fill();
    } // Ende function drawBaum2
    // Animation
    function animate() {
        console.log("Timeout");
        // Zur�cksetzen und neu erstellen
        Aufgabe10.crc2.clearRect(0, 0, 400, 600);
        Aufgabe10.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < object.length; i++) {
            let s = object[i];
            s.update();
        } // Ende for Schleife
        // Geschwindigkeit
        window.setTimeout(animate, 100);
    } // Ende function animate
})(Aufgabe10 || (Aufgabe10 = {})); // Namespace
//# sourceMappingURL=Aufg10.js.map