namespace DynHTML_Uno {
    document.addEventListener("DOMContentLoaded", (cards));

    // Funktion deklarieren
    function cards(): void {

        // erstelle Interface mit Karten
        interface Cards {
            name: string;
            blue: number;
            yellow: number;
            red: number;
            green: number;
        }

        //        // Ziehstapel
        //        let c0: Cards = {
        //            name: "0",
        //            blue: 0,
        //            yellow: 0,
        //            red: 0,
        //            green: 0
        //        }
        // console.log(Ziehkarten)

        // Karten von 1 - 9
        let c1: Cards = {
            name: "1",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };

        let c2: Cards = {
            name: "2",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2

        };

        let c3: Cards = {
            name: "3",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };

        let c4: Cards = {
            name: "4",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };

        let c5: Cards = {
            name: "5",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2

        };

        let c6: Cards = {
            name: "6",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };

        let c7: Cards = {
            name: "7",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };

        let c8: Cards = {
            name: "8",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };

        let c9: Cards = {
            name: "9",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };

        // Bonuskarten
        let cSkip: Cards = {
            name: "Skip",
            blue: 1,
            red: 1,
            green: 1,
            yellow: 1
        };

        let cardDraw2: Cards = {
            name: "Draw Two",
            blue: 1,
            red: 1,
            green: 1,
            yellow: 1
        };

        let cWild: Cards = {
            name: "Wild",
            blue: 1,
            red: 1,
            green: 1,
            yellow: 1
        };

        // Karten im Array speichern
        let allCards: Cards[] = [c1, c2, c3, c4, c5, c6, c7, c8, c9, cSkip, cardDraw2, cWild];
        let s1: number = 1;
        let s2: number = 1;
        let c: string = "";

        // Zufallsfunktion
        function random1(x: number): number {
            return Math.floor(Math.random() * Math.floor(x));
        }

        // Handkarten
        function placeDiv(_color: string, _v: string, _y: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _y);
            document.getElementById("a" + _y).innerHTML += _v;
            let s: CSSStyleDeclaration = div.style;
            s.border = "solid white";
            s.textAlign = "center";
            s.fontSize = "120%";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 8 + "%";
            s.height = 30 + "%";
            s.margin = "3%";
            s.left = (_y + 0.2) * 10 + "%";
            s.bottom = 4 + "%";
            s.color = "white";


        } // placeDiv Ende

        let z: number;

        // Dialogfenster
        let input: string = prompt("Bitte eine Zahl angeben");
        alert("Viel Spass beim Spielen!");

        // Input in Nummer umwandeln
        z = Number(input);


        for (let d: number = 0; d < z; d++) { //Begin der For-Schleife
            let l: number = random1(8);
            if (l == 6 && s1 > 0) {
                c = "#000000";
                s1--;
                placeDiv(c, "draw Two", d);

                // Beginn der Vorschleife von vorne

                continue;
            } // If-Schleife Ende

            else if (l == 6 && s1 <= 0) {
                d--;
                continue;
            } // Else-if Schleife Ende

            else {
                if (l == 5 && s2 > 0) {
                    c = "#000000";
                    s2--;
                    placeDiv(c, "Wild", d);
                    continue;
                }

                else if (l == 7 && s2 <= 0) {
                    d--;
                    continue;
                }

                else {
                    // Ausführung der Random-Funktion
                    let b: number = random1(4);
                    switch (b) {

                        // Blau
                        case 0:
                            c = "#2B07F6";
                            if (allCards[l].blue > 0) {
                                placeDiv(c, allCards[l].name, d);
                                allCards[l].blue--;
                                continue;
                            }


                        // Rot
                        case 1:
                            c = "#F2071F";
                            if (allCards[l].red > 0) {
                                placeDiv(c, allCards[l].name, d); //PlaceDiv wird übergeben mit c für die Farbe, der zufälligen Zahl l und dem Wert d, welcher den Abstand zwischen den Karten generiert
                                allCards[l].red--;
                                continue;
                            }

                        // Grün
                        case 2:
                            c = "#6DF207";
                            if (allCards[l].green > 0) {
                                placeDiv(c, allCards[l].name, d);
                                allCards[l].green--;
                                continue;
                            }

                        // Gelb
                        case 3:
                            c = "#F2B407";
                            if (allCards[l].yellow > 0) {
                                placeDiv(c, allCards[l].name, d);
                                allCards[l].yellow--;
                                continue;
                            }

                            else {
                                d--;
                                continue;
                            }

                    } // switch Ende

                } // else Ende

            } // else Ende

        } // for Schleife Ende

    } // Function Ende
}