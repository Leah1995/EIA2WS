namespace UnoSpiel { // Speicher-Sektion
    interface Unocard {
        color: string;
        value: string;
    }

    let colors: string[] = ["green", "yellow", "red", "blue"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Draw Two", "Skip"];
    let cards: Unocard[] = [{ color: "blue", value: "0" }, { color: "red", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Draw Four" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }, { color: "black", value: "Wild" }];

    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let b: number = 0; b < 2; b++) {
                let card: Unocard = { color: colors[i], value: values[a] };
                cards.push(card);
            }
        }
    } // Ende for Schleife

    let handcards: Unocard[] = [];

    function Input(): void {
        var cardnumber: string = prompt("Bitte eine Zahl angeben"); //promptCards cardnumber zugwiesen
        alert("Viel Spass beim Spielen!");
        let n: number = parseInt(cardnumber); // string in Zahl ändern
        

        // Random
        for (let anz: number = n; anz > 0; anz--) {
            let random: number = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[random]);
            cards.splice(random, 1);
        } // Ende for Schleife

        console.log("prompt and random")

        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handcards").appendChild(div); // lade Karte vom Elternteil, durchsuche nach id
            div.innerHTML = handcards[b].value;
            div.classList.add("Handcards"); // Handkarten aufrufen aus dem div
            div.classList.add(handcards[b].color); // füge Farbe hinzu
        } // for Schleife Ende

    } // function Ende
    
    document.addEventListener("DOMContentLoaded", Input); //sobald DOM geladen ist, wird Funktion Input ausgeführt
}