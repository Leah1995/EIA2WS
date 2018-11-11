var uno;
(function (uno) {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", main);
    let cards = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "g0", "g1", "g1", "g2",
        "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "y0", "y1", "y1", "y2", "y2", "y3", "y3",
        "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "p2", "p2", "w", "w", "r", "r", "s", "s"];
    let handcards = [];
    let filedcards = [];
    let cardNumber;
    function main() {
        // 
    }
    ;
    function init(_event) {
        do {
            let getcardnumber = prompt("Bitte eine Zahl angeben"); //promptCards cardnumber zugwiesen
            cardNumber = Number.parseInt(getcardnumber);
            alert("Viel Spass beim Spielen!");
        } while (isNaN(cardNumber));
        // Handkarten
        for (let i = 0; i < cardNumber; i++) {
            createCard();
        } // Ende for Schleife
        function createCard() {
            let random = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[random]);
            cards.splice(random, 1);
            let div = document.createElement("div");
            div.innerText = cards[random];
            div.setAttribute("class", "hand");
            div.addEventListener("click", filedCards);
            document.getElementById("filed").appendChild(div);
        } // Ende Function createCard 
        let drawDeck = document.getElementById("draw");
        drawDeck.addEventListener("click", drawCard);
        function drawCard() {
            //
        }
        function filedCards(event) {
        }
        //
        //        let colordiv: string;
        //        if (color == "r") {
        //            colordiv = " #F2071F";
        //        }
        //        else if (color == "g") {
        //            colordiv = "#6DF207";
        //        }
        //        else if (color == "b") {
        //            colordiv = "#2B07F6";
        //        }
        //        else if (color == "y") {
        //            colordiv = "#F2B407";
        //        }
    }
    ; // Ende Input Function
})(uno || (uno = {}));
//# sourceMappingURL=script.js.map