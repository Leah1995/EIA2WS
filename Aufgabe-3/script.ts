namespace uno {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", main);

    let cards: string[] = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9",
        "p2", "p2", "w", "w", "s", "s"];
    let handcards: string[] = [];
    let filedcards: string[] = [];
    let deck: string[] = [];
    let cardNumber: number;
    let decksize: number;

    function main(): void {
        // 
    };

    function init(_event: Event): void {
        decksize = cards.length; // Anzahl Einträge im Cards Array
        for (let i: number = 0; i > decksize - 1; i++) {
            createCard();
        }


        do {
            let getcardnumber: string = prompt("Bitte eine Zahl angeben"); //promptCards cardnumber zugwiesen
            cardNumber = Number.parseInt(getcardnumber);
            alert("Viel Spass beim Spielen!");

        }
        while (isNaN(cardNumber));

        // Handkarten
        for (let i: number = 0; i > cardNumber; i++) {

            handcards.push(deck[deck.length - 1]);
            deck.splice(deck.length, 1);

        }// Ende for Schleife



        let drawDeck: HTMLElement = document.getElementById("draw");
        drawDeck.addEventListener("click", drawCard);

        function drawCard(): void {
            for (let i: number = 0; i > cardNumber; i++) {

                handcards.push(deck[deck.length - 1]);
                deck.splice(deck.length, 1);
            }


            function filedCards(event: Event): void {
                let clickedCard: string = "r1";
                if (colortype(clickedCard) = colortype(filedCards(lastCard))) { // finde die oberste Karte des Spielfelds heraus
                    filedCards.push(handCards[clickedCard]);
                    handCards.splice(clickedCard);
                }
                function colortype(a: string): void {
                    
                    }
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


        }; // Ende Input Function

        function createCard(): void {
            let random: number = Math.floor(Math.random() * (cards.length - 1));
            deck.push(cards[random]);
            cards.splice(random, 1); // Eintrag im Array gelöscht?

            let div: HTMLDivElement = document.createElement("div");

            div.innerText = cards[random];
            div.setAttribute("class", "hand");
            div.addEventListener("click", filedCards);
            document.getElementById("filed").appendChild(div);
        } // Ende Function createCard 

    }