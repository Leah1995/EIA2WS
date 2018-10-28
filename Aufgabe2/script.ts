namespace UnoSpiel {
    interface Unocard {
        color: string;
        value: string;
    }

    let colors: string[] = ["green", "yellow", "red", "blue"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Unocard[] = [{ color: "blue", value: "0" }, { color: "red", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];

    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let b: number = 0; b < 2; b++) {
                let card: Unocard = { color: colors[i], value: values[a] };
                cards.push(card);
            }
        }
    }
    console.log(cards);

    let handcards: Unocard[] = [];

    function Eingabe(): void {
        var cardnumber: string = prompt("Bitte eine Zahl angeben");
        alert("Viel Spass beim Spielen!");
        let n: number = parseInt(cardnumber);

        for (let anz: number = n; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
        
        console.log("prompt and random")

        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
        }
        
    }
    document.addEventListener("DOMContentLoaded", Eingabe);
}