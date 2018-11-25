namespace uno {
    window.addEventListener("load", init);

    let cards: string[] = ["b0", "b1", "b1", "b1", "b2", "b2", "b2", "b3", "b3", "b3", "b4", "b4", "b4", "b5", "b5", "b6", "b6", "b6", "b7", "b7", "b7", "b8", "b8", "b8", "b9", "b9", "yplus 2", "yplus 2", "b<->", "b<->",
        "g0", "g1", "g1", "g1", "g2", "g2", "g3", "g3", "g3", "g4", "g4", "g4", "g5", "g5", "g5", "g6", "g6", "g6", "g7", "g7", "g7", "g8", "g8", "g8", "g9", "g9", "g9", "gplus 2", "gplus 2", "g<->", "g<->", "gskip", "gskip",
        "r0", "r1", "r1", "r1", "r2", "r2", "r3", "r3", "r3", "r4", "r4", "r5", "r5", "r5", "r6", "r6", "r7", "r7", "r7", "r8", "r8", "r9", "r9", "r9", "rskip", "rskip", "rplus 2", "rplus 2", "r<->", "r<->", "rskip", "rskip",
        "y0", "y1", "y1", "y2", "y2", "y2", "y3", "y3", "y4", "y4", "y4", "y5", "y5", "y6", "y6", "y6", "y7", "y7", "y8", "y8", "y8", "y9", "y9", "yplus 2", "yplus 2", "yskip", "yskip",
        "wild", "wild", "wild", "wild", "plus 4", "plus 4", "plus 4", "plus 4"];

    let bluecards: string[] = ["b0", "b1", "b1", "b1", "b2", "b2", "b2", "b3", "b3", "b3", "b4", "b4", "b4", "b5", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b8", "b9", "b9", "b9", "bplus 2", "bplus 2", "b<->", "b<->", "bskip", "bskip"];
    let greencards: string[] = ["g0", "g1", "g1", "g1", "g2", "g2", "g2", "g3", "g3", "g3", "g4", "g4", "g4", "g5", "g5", "g5", "g6", "g6", "g6", "g7", "g7", "g7", "g8", "g8", "g9", "g9", "g9", "gplus 2", "gplus 2", "gskip", "gskip", "g<->", "g<->"];
    let redcards: string[] = ["r0", "r1", "r1", "r1", "r1", "r2", "r2", "r2", "r3", "r3", "r4", "r4", "r4", "r5", "r5", "r6", "r6", "r6", "r7", "r7", "r8", "r8", "r8", "r9", "r9", "r9", "rplus 2", "rplus 2", "r<->", "r<->", "rskip", "rskip"];
    let yellowcards: string[] = ["y0", "y1", "y1", "y1", "y2", "y2", "y3", "y3", "y3", "y4", "y4", "y5", "y5", "y5", "y6", "y6", "y7", "y7", "y7", "y8", "y8", "y9", "y9", "y9", "yplus 2", "yplus 2", "y<->", "y<->", "yskip", "yskip"];
    let blackcards: string[] = ["wild", "wild", "wild", "wild", "plus 4", "plus 4", "plus 4", "plus 4"];

    let handcards: string[] = [];
    let filedcards: string[] = [];
    let deck: string[] = [];
    let cardNumber: number;
    let decksize: number;

    // Initialisieren
    function init(_event: Event): void {
        decksize = cards.length; // Anzahl Einträge im Cards Array

        for (let i: number = 0; i < decksize; i++) {
            createCard();
        } // Ende for Schleife


        // Nutzer muss Kartenanzahl angeben
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
            div.setAttribute("class", colortype(deck[deck.length - 1])); // setzt neuen Attributswert
            div.addEventListener("click", playCards);
            document.getElementById("handcards").appendChild(div);
            deck.splice(deck.length - 1, 1);
        }// Ende for Schleife

        let drawDeck: HTMLElement = document.getElementById("deck");
        drawDeck.addEventListener("click", drawCard);

        // Karte ziehen
        function drawCard(): void {
            handcards.push(deck[deck.length - 1]);

            let div: HTMLDivElement = document.createElement("div");

            div.innerText = deck[deck.length - 1];
            div.setAttribute("class", colortype(deck[deck.length - 1]));
            div.addEventListener("click", playCards);
            document.getElementById("handcards").appendChild(div);

            deck.splice(deck.length - 1, 1); // 1 löscht das letzte Element aus dem Array, 
        } // Ende Function drawCard

        // Auf Ablagestapel verschieben
        function moveToFiled(cardHTML: HTMLDivElement): void {
            filedcards.push(cardHTML.innerText);

            let filed: HTMLElement = document.getElementById("filed");
            if (cardHTML != filed.childNodes[0]) {
                handcards.splice(handcards.indexOf(cardHTML.innerText), 1);
            } // oder über removeEventListener

            filed.replaceChild(cardHTML, filed.childNodes[0]); // mit childNodes[0] erstes HTMLDivElement aufrufen

        } // Ende function moveToFiled

        function playCards(event: Event): void { // Methodenaufruf
            let clickedCardHTML: HTMLDivElement = <HTMLDivElement>event.target; // 
//            let clickedCard: string = (<HTMLDivElement>event.target).innerText;
//            let clickedCard: string = clickedCardHTML.innerText;
            // Abfrage hierhin
            moveToFiled(clickedCardHTML);

        } // Ende function playCards

        let sortButton: HTMLElement = document.getElementById("button");
        sortButton.addEventListener("click", sort);

        // Sortierung
        function sort(event: Event): void {
            let handcardsHTML: HTMLElement = document.getElementById("handcards");
            handcards.sort();

            // Alte Handkarten entfernen
            while (handcardsHTML.hasChildNodes()) handcardsHTML.removeChild(handcardsHTML.childNodes[0]); // Die childNodes-Eigenschaft gibt eine Auflistung der untergeordneten Knoten eines Knotens als NodeList-Objekt zurück.

            // Handkarten neu einfügen
            for (let i: number = 0; i < handcards.length; i++) {
                let div: HTMLDivElement = document.createElement("div");

                div.innerText = handcards[i];
                div.setAttribute("class", colortype(handcards[i]));
                div.addEventListener("click", playCards);
                handcardsHTML.appendChild(div);
            } // Ende for Schleife
        } // Ende function sort

        function colortype(a: string): string {
            if (bluecards.indexOf(a) >= 0) return "blue";
            if (redcards.indexOf(a) >= 0) return "red";
            if (greencards.indexOf(a) >= 0) return "green";
            if (yellowcards.indexOf(a) >= 0) return "yellow";
            if (blackcards.indexOf(a) >= 0) return "black";
        } // Function Colortype Ende

        function createCard(): void {
            let random: string = cards[Math.floor(Math.random() * cards.length)];
            let position: number = cards.indexOf(random);
            deck.push(cards[position]);

            cards.splice(position, 1); // Eintrag im Array gelöscht
        } // Ende Function createCard 

    }; // Ende Input Function
}