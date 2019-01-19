namespace Aufgabe10 {
    export let crc2: CanvasRenderingContext2D;
    let object: MovingObject[] = [];
    let image: ImageData;
    window.addEventListener("load", init);

    // Initialisierung
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");

        //Schleife Rodler
        for (let i: number = 0; i < 5; i++) {
            let s: Rodler = new Rodler(Math.random() * canvas.width - 0.1, +50); // Startpunkt
            object.push(s);
        } // Ende for Schleife

        //Schleife Rodler2
        for (let i: number = 0; i < 5; i++) {
            let s: Rodler2 = new Rodler2(Math.random() * canvas.width - 0.1, +200); // Startpunkt
            object.push(s);
        } // Ende for Schleife

        //Schleife Schneeflocken 
        for (let i: number = 0; i < 50; i++) {
            let s: Schnee = new Schnee(0 + Math.random() * canvas.width, 0 + Math.random() * 450);
            object.push(s);
        } // Ende for Schleife

        // Himmel
        crc2.fillStyle = "#4E8FF7";
        crc2.fillRect(0, 0, 400, 600);

        // Sonne
        crc2.beginPath();
        crc2.arc(360, 80, 50, 0, 2 * Math.PI); // x, y, size
        crc2.fillStyle = "#FAFB9D";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(360, 80, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F4F74B";
        crc2.fill();

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

        // Schnee
        drawSchnee(0, 300);
        function drawSchnee(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x + 600, _y + 400);
            crc2.lineTo(_x - 50, _y + 300);
            crc2.lineTo(_x - 10, _y - 100);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        } // Ende function drawSchnee


        // Baumfunktionen
        drawBaum1(100, 500, "#cc9966", "#44d271");
        drawBaum2(400, 500, "#4c2e0a", "#00514c");

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

        //Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

    }//Ende der Init-Funktion

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
        crc2.putImageData(image, 0, 0);


        for (let i: number = 0; i < object.length; i++) {
            let s: MovingObject = object[i];
            s.update();
        } // Ende for Schleife


        // Geschwindigkeit
        window.setTimeout(animate, 100);
    } // Ende function animate

} // Namespace