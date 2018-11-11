var uno;
(function (uno) {
    window.addEventListener("load", init);
    let cards = ["b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "p2", "p2", "w", "w", "s", "s"];
    let bluecards = ["b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9"];
    let greencards = ["g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9"];
    let redcards = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9"];
    let yellowcards = ["y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9"];
    let blackcards = ["p2", "p2", "w", "w", "s", "s"];
    let handcards = [];
    let filedcards = [];
    let deck = [];
    let cardNumber;
    let decksize;
    function init(_event) {
        decksize = cards.length; // Anzahl Eintr�ge im Cards Array
        for (let i = 0; i < decksize; i++) {
            createCard();
        }
        do {
            let getcardnumber = prompt("Bitte eine Zahl angeben"); //promptCards cardnumber zugwiesen
            cardNumber = Number.parseInt(getcardnumber);
            alert("Viel Spass beim Spielen!");
        } while (isNaN(cardNumber));
        // Handkarten
        for (let i = 0; i < cardNumber; i++) {
            handcards.push(deck[deck.length - 1]);
            let div = document.createElement("div");
            div.innerText = deck[deck.length - 1];
            div.setAttribute("class", "hand");
            div.addEventListener("click", fieldCards);
            document.getElementById("handcards").appendChild(div);
            deck.splice(deck.length - 1, 1);
        } // Ende for Schleife
        let drawDeck = document.getElementById("deck");
        drawDeck.addEventListener("click", drawCard);
        function drawCard() {
            for (let i = 0; i > cardNumber; i++) {
                handcards.push(deck[deck.length - 1]);
                deck.splice(deck.length, 1);
            }
        }
        function fieldCards(event) {
            let clickedCard = event.target.innerText;
            if (colortype(clickedCard) == colortype(filedcards[filedcards.length - 1])) {
                filedcards.push(clickedCard);
                handcards.splice(handcards.indexOf(clickedCard), 1);
            }
            else if (colortype(clickedCard) == "black") {
                filedcards.push(clickedCard);
                handcards.splice(handcards.indexOf(clickedCard), 1);
            }
            else if (colortype(filedcards[filedcards.length - 1]) == "black") {
                filedcards.push(clickedCard);
                handcards.splice(handcards.indexOf(clickedCard), 1);
            }
        }
        function sort(event) {
            handcards.sort();
        }
        function colortype(a) {
            for (let i; i < bluecards.length; i++) {
                if (a == bluecards[i]) {
                    return "blue";
                }
            }
            for (let i; i < redcards.length; i++) {
                if (a == redcards[i]) {
                    return "red";
                }
            }
            for (let i; i < greencards.length; i++) {
                if (a == greencards[i]) {
                    return "green";
                }
            }
            for (let i; i < yellowcards.length; i++) {
                if (a == yellowcards[i]) {
                    return "yellow";
                }
            }
            for (let i; i > blackcards.length - 1; i++) {
                if (a == blackcards[i]) {
                    return "black";
                }
            }
        } // Function Colortype Ende
        function createCard() {
            //  let random: number = Math.floor(Math.random() * (cards.length - 1));
            let random = cards[Math.floor(Math.random() * cards.length)];
            let position = cards.indexOf(random);
            deck.push(cards[position]);
            //
            //            let colorClass: string = colortype(cards[random]);
            //            let div: HTMLDivElement = document.createElement("div");
            //
            //            div.innerText = cards[random];
            //            div.setAttribute("class", "hand" + colorClass);
            //            div.addEventListener("click", fieldCards);
            //            document.getElementById("deck").appendChild(div);
            cards.splice(position, 1); // Eintrag im Array gel�scht?
        } // Ende Function createCard 
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