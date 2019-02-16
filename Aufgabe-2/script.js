var DynHTML_Uno;
(function (DynHTML_Uno) {
    document.addEventListener("DOMContentLoaded", (cards));
    // Funktion deklarieren
    function cards() {
        // Ziehstapel
        let c0 = {
            name: "0",
            blue: 0,
            yellow: 0,
            red: 0,
            green: 0
        };
        //         console.log(Ziehkarten);
        // Karten von 1 - 9
        let c1 = {
            name: "1",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c2 = {
            name: "2",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c3 = {
            name: "3",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c4 = {
            name: "4",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c5 = {
            name: "5",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c6 = {
            name: "6",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c7 = {
            name: "7",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c8 = {
            name: "8",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        let c9 = {
            name: "9",
            blue: 2,
            red: 2,
            green: 2,
            yellow: 2
        };
        // Bonuskarten
        let cSkip = {
            name: "Skip",
            blue: 1,
            red: 1,
            green: 1,
            yellow: 1
        };
        let cardDraw2 = {
            name: "Draw Two",
            blue: 1,
            red: 1,
            green: 1,
            yellow: 1
        };
        let cWild = {
            name: "Wild",
            blue: 1,
            red: 1,
            green: 1,
            yellow: 1
        };
        // Karten im Array speichern
        let allCards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, cSkip, cardDraw2, cWild];
        let s1 = 1;
        let s2 = 1;
        let c = "";
        // Zufallsfunktion
        function random1(x) {
            return Math.floor(Math.random() * Math.floor(x));
        }
        // Handkarten
        function placeDiv(_color, _v, _y) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _y);
            document.getElementById("a" + _y).innerHTML += _v;
            let s = div.style;
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
        let z;
        // Dialogfenster
        let input = prompt("Bitte eine Zahl angeben");
        alert("Viel Spass beim Spielen!");
        // Input in Nummer umwandeln
        z = Number(input);
        for (let d = 0; d < z; d++) {
            let l = random1(8);
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
                    // Ausf�hrung der Random-Funktion
                    let b = random1(4);
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
                                placeDiv(c, allCards[l].name, d); //PlaceDiv wird �bergeben mit c f�r die Farbe, der zuf�lligen Zahl l und dem Wert d, welcher den Abstand zwischen den Karten generiert
                                allCards[l].red--;
                                continue;
                            }
                        // Gr�n
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
})(DynHTML_Uno || (DynHTML_Uno = {}));
//# sourceMappingURL=script.js.map