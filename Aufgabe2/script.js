var UnoSpiel;
(function (UnoSpiel) {
    let colors = ["green", "yellow", "red", "blue"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "blue", value: "0" }, { color: "red", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let b = 0; b < 2; b++) {
                let card = { color: colors[i], value: values[a] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let handcards = [];
    function Eingabe() {
        var cardnumber = prompt("Bitte eine Zahl angeben");
        alert("Viel Spass beim Spielen!");
        let n = parseInt(cardnumber);
        for (let anz = n; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
        console.log("prompt and random");
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
        }
    }
    document.addEventListener("DOMContentLoaded", Eingabe);
})(UnoSpiel || (UnoSpiel = {}));
//# sourceMappingURL=script.js.map