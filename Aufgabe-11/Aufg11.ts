namespace Aufgabe11 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let objects: MovingObject[] = [];
    let imagedata: ImageData;
    let fps: number = 25;
    let i: number = 0;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Funktionen
        drawSky();
        drawSchneelandschaft();
        drawSonne();
        drawWolke();

        // Generiere bewegende Objekte
        generateSchnee();
        generateRodler();

        imagedata = crc2.getImageData(0, 0, 400, 600);
        update();

        function update(): void {
            crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1500 / fps);

            for (let i: number = 0; i < objects.length; i++) {
                let object: MovingObject = objects[i];
                object.draw();
                object.moving();
                
            } // Ende for Schleife
        } // Ende function update

        function generateSchnee(): void {
            for (let i: number = 0; i < 50; i++) {
                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            } // Ende for Schleife
        } // Ende function generateSnow

        function generateRodler(): void {
            for (let i: number = 0; i < 10; i++) {
                let child: Child = new Child();
                objects.push(child);                
            } // Ende for Schleife
            
        } // Ende generateChild

        // Bäume zufällig hinstellen
        for (let i: number = 0; i < 10; i++) {
            let randomX: number = (Math.random() * (400 - 1)) + 1;
            let randomY: number = (Math.random() * (250 - 200)) + 200;
            let randomBaum1: number = Math.floor((Math.random() * 2)) + 1;
            console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
            if (randomBaum1 == 1) {
                drawBaum1(randomX, randomY, "#cc9966", "#44d271");
            }
            else {
                drawBaum2(randomX, randomY, "#4c2e0a", "#00514c");
            }
        } // Ende for Schleife

        // Himmel
        function drawSky(): void {
            crc2.fillStyle = "#4E8FF7";
            crc2.fillRect(0, 0, 400, 600);
        } // Ende drawSky

        function drawSchneelandschaft(): void {
            crc2.beginPath();
            crc2.moveTo(0, 200);
            crc2.lineTo(600, 700);
            crc2.lineTo(600, 600);
            crc2.lineTo(0, 600);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        } // Ende function drawHillside

        // Wolke 1
        function drawWolke(): void {
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
        } // Ende function drawSonne

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

        // Animation
        function animate(): void {
            console.log("Timeout");

            // Zurücksetzen und neu erstellen
            crc2.clearRect(0, 0, 400, 600);

        } // Ende function animate

        // Geschwindigkeit
        window.setTimeout(animate, 100);
    } // Ende init
} // Ende namespace