var christmastree;
(function (christmastree_1) {
    window.addEventListener("load", init);
    // ARRAY Weihnachtsbaum 
    let christmastree = ["Nordmanntanne", "Blaufichte", "Grünfichte", "Douglasie"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputChristmastree = [];
    // ARRAY Halterung
    let treestand = ["Grüne Metallhalterung", "Gold Metallhalterung", "Braune Messinghalterung", "Silber Messinghalterung"];
    // Leeres HTMLInputElement Array um Artikel abzuspeichern
    let inputTreestand = [];
    // ARRAY Dekoration 
    let decoration = ["Glitzerkugeln", "Glaskugeln", "Lametta", "Glöckchen", "Schneeflocken", "Tanzende Figuren"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputDecoration = [];
    //Array Beleuchtung
    let lights = ["Lichterketten", "Echtwachs-Kerzen", "Kunststoffkerzen"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputLights = [];
    // ARRAY Lieferung
    let delivery = ["Standard", "Express", "Prime"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputDelivery = [];
    let productCart;
    let cartButton;
    function init() {
        // Die erstellten Variablen werden der Id im HTML-Dokument zugewiesen
        christmastree_1.productTree = document.getElementById("baum"); // Variable erhält zugriff auf ID im HTML
        christmastree_1.productTree.addEventListener("change", changeOrder); //EventListener Change wird bei erfolgter Änderung ausgelöst
        //Wenn Wert verändert wird, wird EventListener aktiviert
        christmastree_1.productStand = document.getElementById("halterung");
        christmastree_1.productStand.addEventListener("change", changeOrder);
        christmastree_1.productDecoration = document.getElementById("dekoration");
        christmastree_1.productDecoration.addEventListener("change", changeOrder);
        christmastree_1.productDelivery = document.getElementById("lieferung");
        christmastree_1.productDelivery.addEventListener("change", changeOrder);
        christmastree_1.productLights = document.getElementById("beleuchtung");
        christmastree_1.productLights.addEventListener("change", changeOrder);
        productCart = document.getElementById("warenkorb");
        cartButton = document.getElementById("warenkorbbutton");
        cartButton.addEventListener("click", checkOrder);
        // Funktionen zur Erstellung des Formulars
        createTree();
        createTreestand();
        createDecoration();
        createLights();
        createDelivery();
    }
    //For-Schleife zur Erzeugnung Weihnachtsbaum
    function createTree() {
        //erstellt pro Baum einen Input
        for (let i = 0; i < christmastree.length; i++) {
            createInputTree(christmastree[i]);
        } // Ende for Schleife
    } // Ende function createTree
    // Input und Label werden erzeugt 
    function createInputTree(_baum) {
        let label = document.createElement("label"); //Create Label 
        let input = document.createElement("input"); // Create Input 
        label.innerText = _baum; // Artikel
        label.appendChild(input); // Append Input to Label
        input.type = "radio"; // Radio Input
        input.name = "Radiogroup";
        input.value = "radioboxes";
        input.id = "radio";
        christmastree_1.productTree.appendChild(label); // Append Label to Tree 
        inputChristmastree.push(input); // input wird in das leere Array gepusht
    } // Ende function createInputTree
    //For-Schleife zur Erzeugnung der Baumhalterung
    function createTreestand() {
        //erstellt pro Halterung einen Input
        for (let i = 0; i < treestand.length; i++) {
            createInputStand(treestand[i]);
        } // Ende for Schleife
    } // Ende function create Treestand
    function createInputStand(_halterung) {
        let label = document.createElement("label"); //label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _halterung; // Artikel
        label.appendChild(input); // Append Input to Label
        input.type = "radio"; // Input vom Typ Radio
        input.name = "NameHalterung";
        input.value = "radioboxes";
        christmastree_1.productStand.appendChild(label); // Append Label to Halterung
        inputTreestand.push(input); // Input wird ins leere Array gepusht
    } // Ende function createInputStand
    // For-Schleife zur Erzeugung Dekoration 
    function createDecoration() {
        //erstellt pro Dekoration einen Input
        for (let i = 0; i < decoration.length; i++) {
            createInputDecoration(decoration[i]);
        } // Ende for Schleife
    } // Ende function createDecoration
    function createInputDecoration(_decoration) {
        let label = document.createElement("label"); //label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _decoration; //Artikel
        label.appendChild(input); //Append Input to Label 
        input.type = "number"; //Input vom Typ Number
        input.name = "NameDecoration";
        input.value = "0"; // Wert 0 
        input.min = "0"; // mindestwert
        input.max = "50"; // maximal
        christmastree_1.productDecoration.appendChild(label); // Append label to Dekoration 
        inputDecoration.push(input); //Input wird ins leere Array gepusht
    } // Ende function createInputDecoration
    //For-Schleife zur Erzeugung Beleuchtung
    function createLights() {
        //erstellt pro Beleuchtung einen Input 
        for (let i = 0; i < lights.length; i++) {
            createInputLights(lights[i]);
        }
    }
    function createInputLights(_lights) {
        let label = document.createElement("label"); // label wird erzeugt
        let input = document.createElement("input"); //  input wird erzeugt
        label.innerText = _lights; //Artikel
        label.appendChild(input); //Append Input to label
        input.type = "number"; // Input vom Typ number
        input.name = "NameDecoration";
        input.value = "0"; // Wert 0 
        input.min = "0"; // mindestwert
        input.max = "50"; // höchstwert  
        christmastree_1.productLights.appendChild(label); // Append label to Beleuchtung
        inputLights.push(input); // Input wird ins leere Array gepusht
    } // Ende Function 
    // For-Schleife zur Erzeugung Lieferung
    function createDelivery() {
        //erstellt pro Lieferung einen Input
        for (let i = 0; i < delivery.length; i++) {
            createInputDelivery(delivery[i]);
        } // Ende for Schleife
    } // Ende function createDelivery
    function createInputDelivery(_lieferung) {
        let label = document.createElement("label"); //label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _lieferung; //Artikel
        label.appendChild(input); //Append Input to Label
        input.type = "radio"; //Input vom Typ Radio
        input.name = "NameLieferung";
        input.value = "radioboxes";
        christmastree_1.productDelivery.appendChild(label); //Append label to Lieferung
        inputDelivery.push(input); //Input wird ins leere Array gepusht
    } // Ende function create
    function changeOrder() {
        let summe = 0; //Warenkorb leer 
        for (let i = 0; i < inputChristmastree.length; i++) {
            if (inputChristmastree[i].checked) {
                summe += 60; //summe + 60
            }
        } // Ende for Schleife
        for (let i = 0; i < inputTreestand.length; i++) {
            if (inputTreestand[i].checked) {
                summe += 25;
            }
        } // Ende for Schleife
        for (let i = 0; i < inputDelivery.length; i++) {
            if (inputDelivery[i].checked) {
                summe += 7;
            }
        } // Ende for Schleife
        for (let i = 0; i < inputDecoration.length; i++) {
            summe += (parseInt(inputDecoration[i].value) * 2.5); //liest string ein und wird in number umgewandelt
        } // Ende for Schleife                                                    // value = string
        for (let i = 0; i < inputLights.length; i++) {
            summe += (parseInt(inputLights[i].value) * 7); //liest string ein und wird in number umgewandelt 
        } // Ende for Schleife                                                  // value = string             
        handleChange(summe); //Funktion handleChange wird aufgerufen 
    } // Ende function changeOrder
    // Warenkorb 
    function handleChange(_summe) {
        //Greift auf Element Id im Html zu & fügt einen Text ein 
        document.getElementById("productTrees").innerText = " ";
        document.getElementById("productStand").innerText = " ";
        document.getElementById("productDec").innerText = " ";
        document.getElementById("productLight").innerText = " ";
        document.getElementById("warenLieferung").innerText = " ";
        for (let i = 0; i < inputChristmastree.length; i++) {
            if (inputChristmastree[i].checked) {
                document.getElementById("productTrees").innerText += christmastree[i] + "" + " 60 Euro" + "\n"; //Innertext = Artikel und Summe 
            }
        } // Ende for Schleife
        for (let i = 0; i < inputTreestand.length; i++) {
            if (inputTreestand[i].checked) {
                document.getElementById("productStand").innerText += treestand[i] + " " + " 25 Euro" + "\n"; //Innertext = Artikel und Summe
            }
        } // Ende for Schleife
        for (let i = 0; i < inputDelivery.length; i++) {
            if (inputDelivery[i].checked) {
                document.getElementById("warenLieferung").innerText += delivery[i] + " " + " 7 Euro" + "\n"; //Innertext = Artikel und Summe 
            }
        } // Ende for Schleife
        for (let i = 0; i < inputDecoration.length; i++) {
            if (parseInt(inputDecoration[i].value) > 0) {
                document.getElementById("productDec").innerText += decoration[i] + " " + " " + (parseInt(inputDecoration[i].value) * 2.5) + " Euro" + "\n";
            }
        } // Ende for Schleife
        for (let i = 0; i < inputLights.length; i++) {
            if (parseInt(inputLights[i].value) > 0) {
                document.getElementById("productLight").innerText += lights[i] + " " + " " + (parseInt(inputLights[i].value) * 3) + " Euro" + "\n";
            }
        } // Ende for Schleife
        document.getElementById("gesamtsumme").innerText = _summe.toString() + " Euro"; // wandelt Zahl in einen String 
    } // Ende function handleChane
    // Bestellung wird geprüft 
    function checkOrder() {
        let nachname = document.getElementById("nachname");
        let vorname = document.getElementById("vorname");
        let email = document.getElementById("email");
        let strasse = document.getElementById("strasse");
        let postleitzahl = document.getElementById("postleitzahl");
        let ort = document.getElementById("ort");
        // überprüfe, ob etwas eingegeben wurde
        // checkValidity = boolean 
        if (nachname.checkValidity() == false || vorname.checkValidity() == false || email.checkValidity() == false || strasse.checkValidity() == false || postleitzahl.checkValidity() == false || ort.checkValidity() == false) {
            //Wenn Fehlerhaft 
            alert("Achtung! Bitte in allen Feldern Daten eingeben.");
        }
        else {
            nachname.style.backgroundColor = "lightgreen";
            vorname.style.backgroundColor = "lightgreen";
            email.style.backgroundColor = "lightgreen";
            strasse.style.backgroundColor = "lightgreen";
            postleitzahl.style.backgroundColor = "lightgreen";
            ort.style.backgroundColor = "lightgreen";
            alert("Ihre Bestellung wurde erfolgreich abgeschickt");
        }
    } // Ende function checkOrder
})(christmastree || (christmastree = {})); // Ende Namespace
//# sourceMappingURL=Aufg4.js.map