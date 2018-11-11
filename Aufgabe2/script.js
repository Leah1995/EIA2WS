var UnoSpiel;
(function (UnoSpiel) {
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Draw Two", "Skip"];
    let colors = ["green", "yellow", "red", "blue"];
    // Assoziatives Array
    let cards = [{ color: "blue", value: "0" }, { color: "red", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }];
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let b = 0; b < 2; b++) {
                let card = { color: colors[i], value: values[a] };
                cards.push(card);
            }
        }
    } // Ende for Schleifen
    let handcards = [];
    function Input() {
        var cardnumber = prompt("Bitte eine Zahl angeben"); //promptCards cardnumber zugwiesen
        alert("Viel Spass beim Spielen!");
        let n = parseInt(cardnumber); // string in Zahl �ndern
        // Random
        for (let anz = n; anz > 0; anz--) {
            let random = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[random]);
            cards.splice(random, 1);
        } // Ende for Schleife
        console.log("prompt and random");
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handcards").appendChild(div); // lade Karte vom Elternteil, durchsuche nach id
            div.innerHTML = handcards[b].value;
            div.classList.add("Handcards"); // Handkarten aufrufen aus dem div
            div.classList.add(handcards[b].color); // f�ge Farbe hinzu
        } // for Schleife Ende
    } // function Ende
    document.addEventListener("DOMContentLoaded", Input); //sobald DOM geladen ist, wird Funktion Input ausgef�hrt
})(UnoSpiel || (UnoSpiel = {})); // namespace Ende
// du musst hier eig nur schreiben das handcards.push(cards[random]);
// cards.splice(random, 1); sowas in der art nur das anstelle von random card eben die currentTarget karte genommen wird
// und die stelle dann auch raus genommen wird
// deshalb wollte ich das du dir das mit currentTarget genauer ansiehst wie wir das benutzen k�nnen welche werte wir da bekommen
// die wir greifen und verschieben k�nnen 
// das alles ist nur eine Idee von mir das k�nnen wir bestimmt anders machen ich bin auch nicht besonders gut darin  
//# sourceMappingURL=script.js.map