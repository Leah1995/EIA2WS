namespace Aufgabe7 {

    // Heroku einbinden
    let address: string = "https://eia2ws.herokuapp.com";

    // Event-Listener hinzufügen
    document.addEventListener("DOMContentLoaded", init); // init versieht Seite mit Startwerten und initialisiert

    // Adress-Fieldsets
    document.addEventListener("DOMContentLoaded", fillFieldset2); // DOMContentLoaded wird ausgelöst, wenn das initiale HTML-Dokument vollständig geladen und geparst ist.
    document.addEventListener("DOMContentLoaded", fillFieldset3);
    document.addEventListener("DOMContentLoaded", fillFieldset4);
    document.addEventListener("DOMContentLoaded", fillFieldset5);
    document.addEventListener("DOMContentLoaded", fillFieldset6);

    // Listener
    document.addEventListener("DOMContentLoaded", changeListener);

    // initialisiere Seite bei event
    function init(_event: Event): void {
        showAssocarray(associativeItem);
        handleQuery();
    }; // Ende function init

    function showAssocarray(_associativeArray: AssocArray): void {

        // For Schleife für die Artikel
        for (let key in _associativeArray) {
            let value: Bestellposten[] = _associativeArray[key];

            if (key == "baumarten" || key == "halter" || key == "Lieferart") {
                // setze Variable i, bevor Schleife beginnt, lege i < value.length als Abbruchbedingung fest, und verändert schlussendlich durchgehend den Wert der Variable
                for (let i: number = 0; i < value.length; i++)
                    fillFieldsetCheck(value[i], i, key);
            } else {
                for (let i: number = 0; i < value.length; i++)
                    fillFieldset(value[i], i, key);
            }
        } // Ende for Schleife
    } // Ende function showAssocarray

    // Change Listener
    function changeListener(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset"); // gibt fieldset zurück

        fieldset.addEventListener("change", handleChange);
    } // Ende function changeListener

    let adress: string = "";
    let checkBaum: number = 0;
    let checkHalterung: number = 0;
    let checkLieferart: number = 0;

    function fillFieldsetCheck(_products: Bestellposten, i: number, key: string): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("send").addEventListener("click", checkOut);

        let childNodeHTML: string;

        // Anhängen der Auswahl
        if (i == 0) {
            childNodeHTML = "<h3>" + "Wähle deine " + key + "</h3>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        } // Ende if Bedingung

        // Radio Auswahl
        let radio: HTMLElement = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", _products.typ);
        radio.setAttribute("value", _products.name);
        radio.setAttribute("kindof", _products.name);
        radio.setAttribute("preis", _products.price.toFixed()); // toFixed: die Methode konvertiert eine Nummer in ein String und behält eine spezielle Anzahl an Dezimalen
        radio.setAttribute("item", _products.typ);
        radio.setAttribute("id", _products.name);
        radio.setAttribute("key", key);
        document.getElementById(key).appendChild(radio); // durchsuche DOM und liefere Verweis auf key
        let radioLabel: HTMLElement = document.createElement("label");
        radioLabel.setAttribute("for", _products.name);
        radioLabel.innerText = _products.name + " " + _products.price.toFixed() + " Euro";
        document.getElementById(key).appendChild(radioLabel);
    } // Ende function fillFieldsetCheck

    // bei Click auf Button
    function fillFieldset(_products: Bestellposten, i: number, key: string): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkOut);
        let childNodeHTML: string;
        // Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + "Wähle deine " + key + "</h3>"; // h3 anhängen
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>"; // section anhängen
            node.innerHTML += childNodeHTML;
        } // Ende if Bedingung

        // Anzahl der Items auswählen
        let option: HTMLElement = document.createElement("p");
        option.setAttribute("value", _products.name + " " + _products.price + " Euro");
        option.innerText = _products.name + " " + _products.price + " Euro";
        document.getElementById(key).appendChild(option);
        let stepper: HTMLElement = document.createElement("input");
        stepper.setAttribute("type", "number");
        stepper.setAttribute("name", _products.name);
        stepper.setAttribute("step", "1");
        stepper.setAttribute("min", "0");
        stepper.setAttribute("max", "20");
        stepper.setAttribute("value", "0");
        stepper.setAttribute("item", _products.typ);
        stepper.setAttribute("kindof", _products.name);
        stepper.setAttribute("preis", _products.price.toFixed());
        stepper.setAttribute("key", key);
        document.getElementById(key).appendChild(stepper);
    } // Ende fillFieldset

    // Adresse

    // Nachname
    function fillFieldset2(): void {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset: HTMLElement = document.getElementById("adress");

        fieldset.addEventListener("change", handleChange);

        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Nachname");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset2

    // Vorname
    function fillFieldset3(): void {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset: HTMLElement = document.getElementById("adress");

        fieldset.addEventListener("change", handleChange);

        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Vorname");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset3

    // Straße und Hausnummer
    function fillFieldset4(): void {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset: HTMLElement = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Straße und Hausnummer");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset4

    // Postleitzahl
    function fillFieldset5(): void {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset: HTMLElement = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "PLZ");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset5

    // Ort
    function fillFieldset6(): void {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset: HTMLElement = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Ort");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset6
    // Ende Adresse

    // Zusammenfassung der Auswahl
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let div: HTMLElement = document.getElementById("div");
        let section: HTMLElement = document.getElementById("zusammenfassung");
        section.innerHTML = "";

        // For Schleife, ob Auswahl getätigt wurde
        for (let i: number = 0; i < articles.length - 1; i++) {
            let item: HTMLInputElement = articles[i];
            let p: HTMLElement = document.createElement("p");
            let itemType: string = item.getAttribute("item");
            let itemTitle: string = item.getAttribute("kindof");
            let keyItems: string = item.getAttribute("key");
            let preisproItem: number = parseInt(item.getAttribute("preis"));
            if (item.type == "radio") {
                if (item.checked == true) {
                    item.setAttribute("value", "1");
                    if (target.name == "Baum") {
                        checkBaum = 1;
                    } // Ende if Bedingung Baum
                    if (target.name == "Halterung") {
                        checkHalterung = 1;
                    } // Ende if Bedingung Halterung
                    if (target.name == "Lieferoptionen") {
                        checkLieferart = 1;
                    } // Ende if Bedingung Lieferoptionen
                } // Ende if Bedingung item.checked == treu

                else if (item.checked == false) {
                    item.setAttribute("value", "0");
                } // Ende else if Bedingung
            } // Ende if Bedingung item.type == "radio"

            let domAmount: string = target.value;
            target.setAttribute("value", domAmount);
            let anzahlItems: number = parseInt(item.getAttribute("value")); // parseInt wandelt string (Zeichenkette) in Int (Ganzzahl) um
            let preis: number = preisproItem * anzahlItems;
            p.setAttribute("preis", preis.toString()); // toString konvertiert ein Boolean Value zu einem String und gibt das Result zurück
            if (anzahlItems > 0) {
                p.innerText += keyItems + ": " + anzahlItems + " " + itemTitle + " " + preis + " Euro";
            } // Ende if Bedingung
            section.appendChild(p);
        } // Ende for Schleife
    } // Ende function handleChange


    // Überprüfe, ob alles stimmt
    function checkOut(_event: Event): void {
        //            handleStateChange;
        console.log(handleClickOnAsync);
//        handleClickOnAsync;
//        handleStateChange;
    } // Ende functionCheckout

    function handleQuery(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", onSite);

    } // Ende function handleQuery

    // bleibe auf dieser Seite
    function onSite(_event: Event): void {
        let name: string = (<HTMLInputElement>document.querySelector("#zusammenfassung")).innerText;
        // alert(name); -> hier lag der Fehler
    } // Ende function onSite

    function handleClickOnAsync(_event: Event): void {
        let name: string = (<HTMLInputElement>document.querySelector("#zusammenfassung")).innerText;
        sendRequestWithCustomData(name);
    }

    function sendRequestWithCustomData(_name: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?name=" + _name, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    // bei Veränderung
    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        } // Ende if Bedingung
    } // Ende function handleStateChange

} // Ende namespace