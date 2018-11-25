var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name;
    var strasse;
    var hausnummer;
    var ort;
    var plz;
    var mail;
    var zusatz;
    var label;
    var cartTree = ["bitte Baumart auswählen", "0"];
    var cartTreestand = ["bitte Ständer auswählen", "0"];
    var cartLights = [Aufgabe5.b[0][0], "" + Aufgabe5.b[0][1]];
    var cartDecoration = [];
    var cartDelivery = ["bitte Lieferoption auswählen", "0"];
    function createElements() {
        let christmastree = document.getElementById("baumart");
        for (let i = 0; i < Aufgabe5.posten.length; i++) {
            if (Aufgabe5.posten[i].art == "Baumart") {
                var radioB3 = document.createElement("input");
                radioB3.type = "radio";
                radioB3.name = "radioGroupBaumart";
                radioB3.value = "radio3." + i;
                radioB3.id = "radio3." + i;
                christmastree.appendChild(radioB3);
                // durch Label kann man auch auf text drücken
                var label4 = document.createElement("label");
                label4.id = "label" + i;
                label4.htmlFor = radioB3.id;
                label4.innerText = Aufgabe5.posten[i].name;
                christmastree.appendChild(label4);
                // Stepper erzeugen
                let stepper2 = document.createElement("input");
                stepper2.type = "number";
                stepper2.name = "StepperBaumart" + i;
                stepper2.value = "1";
                stepper2.id = "stepper2." + i;
                stepper2.min = "1";
                stepper2.max = "10";
                stepper2.step = "1";
                christmastree.appendChild(stepper2);
                var br = document.createElement("br");
                christmastree.appendChild(br); //wird nach zur Baumart ID im html gepushed
            } // Ende if-Bedingung
        } // Ende for Schleife
        // Halterung:
        let treestand = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe5.posten.length; i++) {
            if (Aufgabe5.posten[i].art == "Halter") {
                //Radiobutton erzeugen
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                treestand.appendChild(radioB);
                //Text bei Button auswahlmöglichkeiten erzeugen
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe5.posten[i].name;
                treestand.appendChild(label);
                var br = document.createElement("br");
                treestand.appendChild(br);
            } // Ende if-Bedingung
        } // Ende for Schleife
        //Beleuchtung:
        let beleuchtung = document.getElementById("beleuchtung");
        //Selectbox erzeugen und Eigenschaften festlegen
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        //Auswahlmöglichkeiten erzeugen
        for (let i = 0; i < Aufgabe5.posten.length; i++) {
            if (Aufgabe5.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe5.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            } // Ende if-Bedingung
        } // Ende for Schleife
        //Dekoartikel:
        let schmuckartikel = document.getElementById("schmuckartikel");
        //Liste durch for Schleife erzeugen....für jedes Element:
        for (let i = 0; i < Aufgabe5.posten.length; i++) {
            if (Aufgabe5.posten[i].art == "Deko") {
                //....eine Checkbox,...
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxDekoartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                //...den Text zur Auswahlmöglichkeit,...
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe5.posten[i].name;
                schmuckartikel.appendChild(label2);
                //..und den Stepper erzeugen.
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperDekoartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "20";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br = document.createElement("br");
                schmuckartikel.appendChild(br);
            } // Ende if-Bedingung
        } // Ende for Schleife
        //Deine Daten:
        let daten = document.getElementById("daten");
        //daten let für zugriff auf id in html
        //Daten anhängen für einzelne eingabefelder
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Vorname, Nachname";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.required = true;
        daten.appendChild(strasse);
        hausnummer = document.createElement("input");
        hausnummer.type = "number";
        hausnummer.name = "DatenHausnummer";
        hausnummer.placeholder = "Hausnummer";
        hausnummer.pattern = "[0-9]{3}";
        hausnummer.required = true;
        daten.appendChild(hausnummer);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.required = true;
        daten.appendChild(ort);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        //Lieferoptionen:
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe5.posten.length; i++) {
            if (Aufgabe5.posten[i].art == "Lieferung") {
                //Radiobutton erstellen
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                //Text zur Auswahlmöglichkeit erstellen
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe5.posten[i].name;
                lieferopt.appendChild(label3);
                var br = document.createElement("br");
                lieferopt.appendChild(br);
            } // Ende if-Bedingung
        } // Ende for Schleife
        //Button:
        //Submit button zur Überprüfung erstellen
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.style.padding = "0.75em 2em 0.75em 2em";
        submit.style.borderRadius = "0.5em";
        submit.style.border = "none";
        submit.innerText = "Zur Kasse gehen";
        button.appendChild(submit);
    } // Ende function createElements
    function warenkorb(_event) {
        let target = _event.target; //target event setzt element das ausgewählt wird zurück 
        let stepper = [];
        let stepper2 = [];
        let checkBoxes = [];
        let checkBoxes2 = [];
        let gesamtpreis = 0;
        for (let i = 0; i < Aufgabe5.posten.length; i++) {
            //Schmuck Warenkorb
            if (Aufgabe5.posten[i].art == "Deko") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            } // Ende if-Bedingung
            //Baumart Warenkorb
            if (target.id == "radio3." + i || target.id == "stepper2." + i) {
                stepper2[i] = document.getElementById("stepper2." + i);
                checkBoxes2[i] = document.getElementById("check" + i);
                cartTree[0] = Aufgabe5.posten[i].name;
                cartTree[1] = "" + (Aufgabe5.posten[i].preis * parseInt(stepper2[i].value));
            } // Ende if-Bedingung
            //Halter Warenkorb
            if (target.id == "radio" + i) {
                cartTreestand[0] = Aufgabe5.posten[i].name;
                cartTreestand[1] = "" + Aufgabe5.posten[i].preis;
            } // Ende if-Bedingung
            //Lieferoptionen Warenkorb
            if (target.id == "radio2." + i) {
                cartDelivery[0] = Aufgabe5.posten[i].name;
                cartDelivery[1] = "" + Aufgabe5.posten[i].preis;
            } // Ende if-Bedingung
            //Beleuchtung Warenkorb
            if (target.value == Aufgabe5.posten[i].name && target.id == "selectBeleuchtung") {
                cartLights[0] = Aufgabe5.posten[i].name;
                cartLights[1] = "" + Aufgabe5.posten[i].preis;
            } // Ende if-Bedingung
            //Schmuck Warenkorb
            if (target.id == "check" + i || target.id == "stepper" + i) {
                cartDecoration[i] = [Aufgabe5.posten[i].name, "" + Math.round((Aufgabe5.posten[i].preis * parseInt(stepper[i].value) * 100)) / 100];
            } // Ende if-Bedingung
        } // Ende for Schleife
        let korb = document.getElementById("zusammenfassung");
        korb.style.width = "35%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#B40404";
        korb.style.opacity = "0.95";
        korb.innerHTML = "<span class='wk'>Warenkorb</span> <hr>"; // span gruppiert inline elemente im doc. ohen sichtbare veränderung
        korb.innerHTML += "" + cartTree[0] + " " + cartTree[1] + " <br>";
        korb.innerHTML += cartTreestand[0] + ": " + cartTreestand[1] + " <br>";
        korb.innerHTML += "" + cartLights[0] + ": " + cartLights[1] + " <br>";
        korb.innerHTML += " " + cartDelivery[0] + ": " + cartDelivery[1] + " <br>";
        gesamtpreis = parseFloat(cartTree[1]) + parseFloat(cartLights[1]) + parseFloat(cartTreestand[1]) + parseFloat(cartDelivery[1]);
        for (let i = 0; i < stepper.length; i++) {
            //Wenn anzahl nicht gleich 0 und die checkbox ausgewählt ist dann
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(cartDecoration[i][1]); // preis dazurechnen
                korb.innerHTML += "" + cartDecoration[i][0] + " " + cartDecoration[i][1] + " <br>";
            } // Ende if-Bedingung
        } // Ende for Schleife
    } // Ende function handleMouseDown
})(Aufgabe5 || (Aufgabe5 = {})); // Ende Namespace
//# sourceMappingURL=Aufg5.js.map