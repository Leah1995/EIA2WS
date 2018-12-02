namespace Aufgabe5 {
    
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb); 

    var name: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hausnummer: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var zusatz: HTMLTextAreaElement;
    var label: HTMLLabelElement;

    console.log("HALLO");
    
    var cartTree: string[] = ["bitte Baumart auswählen", "0"];
    var cartTreestand: string[] = ["bitte Ständer auswählen", "0"];
    var cartLights: string[] = [b[0][0], "" + b[0][1]];
    var cartDecoration: string[][] = [];
    var cartDelivery: string[] = ["bitte Lieferoption auswählen", "0"];

    function createElements(): void {

        let christmastree: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        
        for (let i: number = 0; i < posten.length; i++) {
            
            if (posten[i].art == "Baumart") {
                var radioB3: HTMLInputElement = document.createElement("input");
                radioB3.type = "radio";
                radioB3.name = "radioGroupBaumart";
                radioB3.value = "radio3." + i;
                radioB3.id = "radio3." + i;
                christmastree.appendChild(radioB3);

                // durch Label kann man auch auf text drücken
                var label4: HTMLLabelElement = document.createElement("label");
                label4.id = "label" + i;
                label4.htmlFor = radioB3.id;
                label4.innerText = posten[i].name;
                christmastree.appendChild(label4);

                // Stepper erzeugen
                let stepper2: HTMLInputElement = document.createElement("input");
                stepper2.type = "number";
                stepper2.name = "StepperBaumart" + i;
                stepper2.value = "1";
                stepper2.id = "stepper2." + i;
                stepper2.min = "1";
                stepper2.max = "10";
                stepper2.step = "1";
                christmastree.appendChild(stepper2);
                var br: HTMLElement = document.createElement("br");
                christmastree.appendChild(br); //wird nach zur Baumart ID im html gepushed
            } // Ende if-Bedingung
        } // Ende for Schleife

        // Halterung:
        let treestand: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Halter") {
                //Radiobutton erzeugen
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                treestand.appendChild(radioB);

                //Text bei Button auswahlmöglichkeiten erzeugen
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = posten[i].name;
                treestand.appendChild(label);
                var br: HTMLElement = document.createElement("br");
                treestand.appendChild(br);
            } // Ende if-Bedingung
        } // Ende for Schleife

        //Beleuchtung:
        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("beleuchtung");

        //Selectbox erzeugen und Eigenschaften festlegen
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);

        //Auswahlmöglichkeiten erzeugen
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Beleuchtung") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            } // Ende if-Bedingung
        } // Ende for Schleife

        //Dekoartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");

        //Liste durch for Schleife erzeugen....für jedes Element:
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Deko") {

                //....eine Checkbox,...
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxDekoartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                //...den Text zur Auswahlmöglichkeit,...
                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);

                //..und den Stepper erzeugen.
                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperDekoartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "20";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br: HTMLElement = document.createElement("br");
                schmuckartikel.appendChild(br);
            } // Ende if-Bedingung
        } // Ende for Schleife

        //Deine Daten:
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
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
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Lieferung") {
                //Radiobutton erstellen
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);

                //Text zur Auswahlmöglichkeit erstellen
                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = posten[i].name;
                lieferopt.appendChild(label3);
                var br: HTMLElement = document.createElement("br");
                lieferopt.appendChild(br);
            } // Ende if-Bedingung
        } // Ende for Schleife

        //Button:

        //Submit button zur Überprüfung erstellen
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.style.padding = "0.75em 2em 0.75em 2em";
        submit.style.borderRadius = "0.5em";
        submit.style.border = "none";
        submit.innerText = "Zur Kasse gehen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    } // Ende function createElements

    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target; //target event setzt element das ausgewählt wird zurück 
        let stepper: HTMLInputElement[] = [];
        let stepper2: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let checkBoxes2: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < posten.length; i++) {

            //Schmuck Warenkorb
            if (posten[i].art == "Deko") { //wenn posten = deko und stepper ausgewählt zählt eins hoch
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            } // Ende if-Bedingung

            //Baumart Warenkorb
            if (target.id == "radio3." + i || target.id == "stepper2." + i) {
                stepper2[i] = <HTMLInputElement>document.getElementById("stepper2." + i);
                checkBoxes2[i] = <HTMLInputElement>document.getElementById("check" + i);
                cartTree[0] = posten[i].name;
                cartTree[1] = "" + (posten[i].preis * parseInt(stepper2[i].value));
            } // Ende if-Bedingung

            //Halter Warenkorb
            if (target.id == "radio" + i) {
                cartTreestand[0] = posten[i].name;
                cartTreestand[1] = "" + posten[i].preis;
            } // Ende if-Bedingung

            //Lieferoptionen Warenkorb
            if (target.id == "radio2." + i) {
                cartDelivery[0] = posten[i].name;
                cartDelivery[1] = "" + posten[i].preis;
            } // Ende if-Bedingung

            //Beleuchtung Warenkorb
            if (target.value == posten[i].name && target.id == "selectBeleuchtung") {
                cartLights[0] = posten[i].name;
                cartLights[1] = "" + posten[i].preis;
            } // Ende if-Bedingung

            //Schmuck Warenkorb
            if (target.id == "check" + i || target.id == "stepper" + i) {
                cartDecoration[i] = [posten[i].name, "" + Math.round((posten[i].preis * parseInt(stepper[i].value) * 100)) / 100];
            } // Ende if-Bedingung

        } // Ende for Schleife

        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
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
        for (let i: number = 0; i < stepper.length; i++) {
            //Wenn anzahl nicht gleich 0 und die checkbox ausgewählt ist dann
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(cartDecoration[i][1]); // preis dazurechnen
                korb.innerHTML += "" + cartDecoration[i][0] + " " + cartDecoration[i][1] + " <br>";
            } // Ende if-Bedingung
        } // Ende for Schleife

        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "";

        let price: HTMLElement = <HTMLElement>document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML += "Gesamtpreis: ";
        price.innerHTML += Math.round(gesamtpreis * 100) / 100 + "";

    }


    function handleMouseDown(_event: MouseEvent): void { //wartet auf MouseEvent
        let feedback: HTMLDivElement = document.createElement("div");
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnummer.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Du hast deine Daten nicht richtig angegeben. Bitte überprüfe sie nocheinmal.";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        } // Ende if-Bedingung
        else {
            feedback.innerText = "Deine Daten wurden korrekt angegeben, vielen Dan für deine Bestellung.";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    } // Ende function handleMouseDown
} // Ende Namespace