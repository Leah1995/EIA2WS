namespace Endabgabe {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let objects: MovingObject[] = [];
    let imagedata: ImageData;
    let fps: number = 25;
    let i: number = 0;

    export let name: string;
    export let point: number = 0;
    let schneeball: Schneeball;
    let zeit: number = 60;

    function resultscreen(): void {
        document.getElementById("endscore").innerText = point.toString();
        document.getElementById("endscore").setAttribute("value", point.toString());
        document.getElementById("retry").style.display = "initial";
        document.getElementById("retry").addEventListener("click", game);
    } // Ende resultscreen
    
    // Init
    function init(): void {
        document.getElementById("Endbildschirm").hidden = true;
        let spielstartButton: HTMLElement = document.getElementById("myButton");
        spielstartButton.addEventListener("click", game);
    } // Ende init

    // beim Spielstart Anzeigen vom Anfang verstecken
    function game(_event: Event): void {
        document.getElementById("Startbildschirm").hidden = true;
        document.getElementsByTagName("header")[0].hidden = true;

        // Zeit zum Spielen
        window.setTimeout(timer, 60000); // ~ 1 Min
        name = document.getElementsByTagName("input")[0].value;
        if (name != "") { // wenn Name eingegeben wurde
            document.getElementById("myButton").hidden = true;

            let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
            crc2 = canvas.getContext("2d");
            canvas.addEventListener("click", throwSnowball);

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

            imagedata = crc2.getImageData(0, 0, 400, 600);
            update();

            zeit = 60;

        } // Ende if Bedingung
    } // Ende Spielstart

    // Schneeballsystem
    function rodlerHit(): void {
        if (schneeball.radius <= 10) {
            for (let i: number = 0; i < objects.length; i++) {
                if (objects[i] instanceof Rodler) {
                    if (hiddenRodler(i)) {
                        objects[i].hitRodler = true;
                        point -= 100;
                        break;
                    } // Ende if Bedingung
                } // Ende if Bedingung
            } // Ende for Schleife

            schneeball = null;
            for (let i: number = 0; i < objects.length; i++) {
                if (objects[i] instanceof Schneeball) {
                    objects.splice(i, 1);
                }  // Ende if Bedingung
            } // Ende for Schleife
        } // Ende if Bedingung
    } // Ende hitRodler

    // Getroffenes Kind
    function hiddenRodler(_i: number): boolean {
        if (schneeball.xP >= objects[_i].xP && schneeball.xP <= objects[_i].xP + 100) {
            if (schneeball.yP <= objects[_i].yP && schneeball.yP >= objects[_i].yP - 200) {
                return true;
            } // Ende if Bedingung
        } // Ende if Bedingung
    } // Ende rodlerHit

    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    canvas.addEventListener("click", throwSnowball);
    
    // Schneeball
    function throwSnowball(_event: MouseEvent): void {
        _event.preventDefault();
        if (!schneeball) {
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            schneeball = new Schneeball();
//            schneeball.xP = 
//            schneeball.yP = _event.clientY;
//            schneeball.x = x;
            console.log(schneeball);
            objects.push(schneeball);
        }  // Ende if Bedingung
    } // Ende Schneeball

    // Ende des Spiels
    function timer(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.hidden = true;
        document.getElementById("Endbildschirm").hidden = false;
        document.getElementsByTagName("header")[0].hidden = true;
        crc2 = canvas.getContext("2d");
        document.getElementById("endscore").innerText = point.toString();
//        (point);
    } // Ende Game

    // Punkteanzeige
    function update(): void {
        if (fps == 0) {
            zeit--;
        } // Ende if Bedingung
        crc2.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps); // Geschwindigkeit
        crc2.font = "100% Arial";
        crc2.fillStyle = "black";
        crc2.fillText("Points:" + " " + point + " Time:" + " " + zeit, 50, 590); // Position
        if (schneeball) {
            rodlerHit();
        } // Ende if Bedingung

        // Bewegte Objekte
        for (let i: number = 0; i < objects.length; i++) {
            let object: MovingObject = objects[i];
            object.draw();
            object.moving();
        } // Ende for Schleife
    } // Endeupdate

     // Himmel
    function drawSky(): void {
        crc2.fillStyle = "#4E8FF7";
        crc2.fillRect(0, 0, 400, 600);
        crc2.fill();
    } // Ende drawSky

    // Schneelandschaft
    function drawSchneelandschaft(): void {
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(600, 700);
        crc2.lineTo(600, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    } // Ende Schneelandschaft

    // Wolken
    function drawWolke(): void {
        // Wolke 1
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

        // Wolke 2
        crc2.beginPath();
        crc2.arc(120, 170, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(150, 180, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(80, 160, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(130, 150, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(80, 175, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(110, 140, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#CDDFFD";
        crc2.fill();
    } // Ende function drawWolke

    // Sonne
    function drawSonne(): void {
        crc2.beginPath();
        crc2.arc(360, 80, 50, 0, 2 * Math.PI); // x, y, size
        crc2.fillStyle = "#FAFB9D";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(360, 80, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F4F74B";
        crc2.fill();
    } // Ende Sonne
    
    // Baum 1
    function drawBaum1(_x: number, _y: number, _trunkColor: string, _topColor: string): void {
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
    function drawBaum2(_x: number, _y: number, _trunkColor: string, _topColor: string): void {
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

    console.log(drawBaum1);

    // Bäume zufällig hinstellen
    function generateBaum(): void {
        for (let i: number = 0; i < 10; i++) {
            let randomX: number = (Math.random() * (400 - 1)) + 1;
            let randomY: number = (Math.random() * (250 - 150)) + 150;
            let randomBaum1: number = Math.floor((Math.random() * 2)) + 1;
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
    function generateSchnee(): void {
        for (let i: number = 0; i < 50; i++) {
            let snowflake: Snow = new Snow();
            objects.push(snowflake);
        } // Ende for Schleife
    } // Ende generateSnow

    // Rodler
    function generateRodler(): void {
        for (let i: number = 0; i < 10; i++) {
            let child: Rodler = new Rodler();
            objects.push(child);
        } // Ende for Schleife
    } // Ende generateChild

    // Animation
    function animate(): void {
        console.log("Timeout");
    } // Ende function animate

    // Geschwindigkeit
    window.setTimeout(animate, 25);

}  // Ende namespace