var Aufgabe7;
(function (Aufgabe7) {
    // Heroku einbinden
    let address = "https://eia2ws.herokuapp.com";
    // Event-Listener hinzuf�gen
    document.addEventListener("DOMContentLoaded", init); // init versieht Seite mit Startwerten und initialisiert
    // Adress-Fieldsets
    document.addEventListener("DOMContentLoaded", fillFieldset2); // DOMContentLoaded wird ausgel�st, wenn das initiale HTML-Dokument vollst�ndig geladen und geparst ist.
    document.addEventListener("DOMContentLoaded", fillFieldset3);
    document.addEventListener("DOMContentLoaded", fillFieldset4);
    document.addEventListener("DOMContentLoaded", fillFieldset5);
    document.addEventListener("DOMContentLoaded", fillFieldset6);
    // Listener
    document.addEventListener("DOMContentLoaded", changeListener);
    // initialisiere Seite bei event
    function init(_event) {
        showAssocarray(Aufgabe7.associativeItem);
        handleQuery();
    }
    ; // Ende function init
    function showAssocarray(_associativeArray) {
        // For Schleife f�r die Artikel
        for (let key in _associativeArray) {
            let value = _associativeArray[key];
            if (key == "baumarten" || key == "halter" || key == "Lieferart") {
                // setze Variable i, bevor Schleife beginnt, lege i < value.length als Abbruchbedingung fest, und ver�ndert schlussendlich durchgehend den Wert der Variable
                for (let i = 0; i < value.length; i++)
                    fillFieldsetCheck(value[i], i, key);
            }
            else {
                for (let i = 0; i < value.length; i++)
                    fillFieldset(value[i], i, key);
            }
        } // Ende for Schleife
    } // Ende function showAssocarray
    // Change Listener
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset"); // gibt fieldset zur�ck
        fieldset.addEventListener("change", handleChange);
    } // Ende function changeListener
    let adress = "";
    let checkBaum = 0;
    let checkHalterung = 0;
    let checkLieferart = 0;
    function fillFieldsetCheck(_products, i, key) {
        let node = document.getElementById("fieldset");
        document.getElementById("send").addEventListener("click", checkOut);
        let childNodeHTML;
        // Anh�ngen der Auswahl
        if (i == 0) {
            childNodeHTML = "<h3>" + "W�hle deine " + key + "</h3>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        } // Ende if Bedingung
        // Radio Auswahl
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", _products.typ);
        radio.setAttribute("value", _products.name);
        radio.setAttribute("kindof", _products.name);
        radio.setAttribute("preis", _products.price.toFixed()); // toFixed: die Methode konvertiert eine Nummer in ein String und beh�lt eine spezielle Anzahl an Dezimalen
        radio.setAttribute("item", _products.typ);
        radio.setAttribute("id", _products.name);
        radio.setAttribute("key", key);
        document.getElementById(key).appendChild(radio); // durchsuche DOM und liefere Verweis auf key
        let radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", _products.name);
        radioLabel.innerText = _products.name + " " + _products.price.toFixed() + " Euro";
        document.getElementById(key).appendChild(radioLabel);
    } // Ende function fillFieldsetCheck
    // bei Click auf Button
    function fillFieldset(_products, i, key) {
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkOut);
        let childNodeHTML;
        // Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + "W�hle deine " + key + "</h3>"; // h3 anh�ngen
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>"; // section anh�ngen
            node.innerHTML += childNodeHTML;
        } // Ende if Bedingung
        // Anzahl der Items ausw�hlen
        let option = document.createElement("p");
        option.setAttribute("value", _products.name + " " + _products.price + " Euro");
        option.innerText = _products.name + " " + _products.price + " Euro";
        document.getElementById(key).appendChild(option);
        let stepper = document.createElement("input");
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
    function fillFieldset2() {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Nachname");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset2
    // Vorname
    function fillFieldset3() {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Vorname");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset3
    // Stra�e und Hausnummer
    function fillFieldset4() {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Stra�e und Hausnummer");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset4
    // Postleitzahl
    function fillFieldset5() {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "PLZ");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset5
    // Ort
    function fillFieldset6() {
        document.getElementById("button").addEventListener("click", checkOut);
        let fieldset = document.getElementById("adress");
        fieldset.addEventListener("change", handleChange);
        let input = document.createElement("input");
        input.setAttribute("id", "ad");
        input.setAttribute("placeholder", "Ort");
        document.getElementById("adress").appendChild(input);
    } // Ende function fillFieldset6
    // Ende Adresse
    // Zusammenfassung der Auswahl
    function handleChange(_event) {
        let target = _event.target;
        let articles = document.getElementsByTagName("input");
        let div = document.getElementById("div");
        let section = document.getElementById("zusammenfassung");
        section.innerHTML = "";
        // For Schleife, ob Auswahl get�tigt wurde
        for (let i = 0; i < articles.length - 1; i++) {
            let item = articles[i];
            let p = document.createElement("p");
            let itemType = item.getAttribute("item");
            let itemTitle = item.getAttribute("kindof");
            let keyItems = item.getAttribute("key");
            let preisproItem = parseInt(item.getAttribute("preis"));
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
            let domAmount = target.value;
            target.setAttribute("value", domAmount);
            let anzahlItems = parseInt(item.getAttribute("value")); // parseInt wandelt string (Zeichenkette) in Int (Ganzzahl) um
            let preis = preisproItem * anzahlItems;
            p.setAttribute("preis", preis.toString()); // toString konvertiert ein Boolean Value zu einem String und gibt das Result zur�ck
            if (anzahlItems > 0) {
                p.innerText += keyItems + ": " + anzahlItems + " " + itemTitle + " " + preis + " Euro";
            } // Ende if Bedingung
            section.appendChild(p);
        } // Ende for Schleife
    } // Ende function handleChange
    // �berpr�fe, ob alles stimmt
    function checkOut(_event) {
        //            handleStateChange;
        console.log(handleClickOnAsync);
        setupAsyncForm();
        //        handleStateChange;
    } // Ende functionCheckout
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleQuery() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", onSite);
    } // Ende function handleQuery
    // bleibe auf dieser Seite
    function onSite(_event) {
        let name = document.querySelector("#zusammenfassung").innerText;
        // alert(name); -> hier lag der Fehler
    } // Ende function onSite
    function handleClickOnAsync(_event) {
        //        let name: string = (<HTMLInputElement>document.querySelector("#zusammenfassung")).innerText;
        let name = JSON.stringify(document.querySelector("#zusammenfassung").innerText);
        console.log(name);
        sendRequestWithCustomData(name);
    }
    function sendRequestWithCustomData(_name) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?name=" + _name, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    // bei Ver�nderung
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        } // Ende if Bedingung
    } // Ende function handleStateChange
})(Aufgabe7 || (Aufgabe7 = {})); // Ende namespace
//# sourceMappingURL=Aufg7.js.map