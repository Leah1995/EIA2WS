namespace uno {
    window.addEventListener("load", init);

    let cards: string[] = ["b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "p2", "p2", "w", "w", "s", "s"];

    let bluecards: string[] = ["b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9"];
    let greencards: string[] = ["g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9"];
    let redcards: string[] = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9"];
    let yellowcards: string[] = ["y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9"];
    let blackcards: string[] = ["p2", "p2", "w", "w", "s", "s"];

    let handcards: string[] = [];
    let filedcards: string[] = [];
    let deck: string[] = [];
    let cardNumber: number;
    let decksize: number;



    function init(_event: Event): void {
        decksize = cards.length; // Anzahl Einträge im Cards Array
        for (let i: number = 0; i < decksize; i++) {
            createCard();
        }


        do {
            let getcardnumber: string = prompt("Bitte eine Zahl angeben"); //promptCards cardnumber zugwiesen
            cardNumber = Number.parseInt(getcardnumber);
            alert("Viel Spass beim Spielen!");

        }
        while (isNaN(cardNumber));

        // Handkarten
        for (let i: number = 0; i < cardNumber; i++) {

            handcards.push(deck[deck.length - 1]);

            let div: HTMLDivElement = document.createElement("div");


            div.innerText = deck[deck.length - 1];
            div.setAttribute("class", colortype(deck[deck.length - 1]));
            div.addEventListener("click", fieldCards);
            document.getElementById("handcards").appendChild(div);

            deck.splice(deck.length - 1, 1);
        }// Ende for Schleife



        let drawDeck: HTMLElement = document.getElementById("deck");
        drawDeck.addEventListener("click", drawCard);

        function drawCard(): void {
            handcards.push(deck[deck.length - 1]);
    
            let div: HTMLDivElement = document.createElement("div");
    
    
            div.innerText = deck[deck.length - 1];
            div.setAttribute("class", colortype(deck[deck.length - 1]));
            div.addEventListener("click", fieldCards);
            document.getElementById("handcards").appendChild(div);
    
            deck.splice(deck.length - 1, 1);
        }

        function moveToFiled(card: string, cardHTML: HTMLDivElement): void {
            filedcards.push(card);
            handcards.splice(handcards.indexOf(card), 1);
            
            let filed: HTMLElement = document.getElementById("filed");
            filed.replaceChild(cardHTML, filed.childNodes[0]);
            
        }
        function fieldCards(event: Event): void {
            let clickedCardHTML: HTMLDivElement = <HTMLDivElement>event.target;
            let clickedCard: string = (<HTMLDivElement>event.target).innerText;
            if (colortype(clickedCard) == colortype(filedcards[filedcards.length - 1])) { // finde die oberste Karte des Spielfelds heraus
                moveToFiled(clickedCard, clickedCardHTML);
            }

            else if (colortype(clickedCard) == "black") {
                moveToFiled(clickedCard, clickedCardHTML);
            }

            else if (colortype(filedcards[filedcards.length - 1]) == "black") {
                moveToFiled(clickedCard, clickedCardHTML);
            }

        }

        let sortButton: HTMLElement = document.getElementById("button");
        sortButton.addEventListener("click", sort);
        function sort(event: Event): void {
            let handcardsHTML: HTMLElement = document.getElementById("handcards");
            handcards.sort();
            
            // Alte Handkarten entfernen
            while(handcardsHTML.hasChildNodes()) handcardsHTML.removeChild(handcardsHTML.childNodes[0]);
            
            // Handkarten neu einfügen
            for (let i: number = 0; i < handcards.length; i++) {
                let div: HTMLDivElement = document.createElement("div");
    
    
                div.innerText = handcards[i];
                div.setAttribute("class", colortype(handcards[i]));
                div.addEventListener("click", fieldCards);
                handcardsHTML.appendChild(div);
            }

        }

        function colortype(a: string): string {
            if(bluecards.indexOf(a) >= 0) return "blue";
            if(redcards.indexOf(a) >= 0) return "red";
            if(greencards.indexOf(a) >= 0) return "green";
            if(yellowcards.indexOf(a) >= 0) return "yellow";
            if(blackcards.indexOf(a) >= 0) return "black";
        } // Function Colortype Ende

        function createCard(): void {
            //  let random: number = Math.floor(Math.random() * (cards.length - 1));
            let random: string = cards[Math.floor(Math.random() * cards.length)];
            let position: number = cards.indexOf(random);
            deck.push(cards[position]);

            //
            //            let colorClass: string = colortype(cards[random]);
            //            let div: HTMLDivElement = document.createElement("div");
            //
            //            div.innerText = cards[random];
            //            div.setAttribute("class", "hand" + colorClass);
            //            div.addEventListener("click", fieldCards);
            //            document.getElementById("deck").appendChild(div);

            cards.splice(position, 1); // Eintrag im Array gelöscht?
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


    }; // Ende Input Function



}