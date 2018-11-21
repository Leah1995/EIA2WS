var christmastree;
(function (christmastree_1) {
    window.addEventListener("load", init);
    let treePrice = 0;
    let treestandPrice = 0;
    let decorationPrice = 0;
    let lightPrice = 0;
    let deliveryPrice = 0;
    // Weihnachtsbaum 
    let christmastree = ["Nordmanntanne", "Blaufichte", "Gr�nfichte", "Douglasie"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputChristmastree = [];
    // Halterung
    let treestand = ["Gr�ne Metallhalterung", "Gold Metallhalterung", "Braune Messinghalterung", "Silber Messinghalterung"];
    // Leeres HTMLInputElement Array um Artikel abzuspeichern
    let inputTreestand = [];
    // Dekoration 
    let decoration = ["Glitzerkugeln", "Glaskugeln", "Lametta", "Gl�ckchen", "Schneeflocken", "Tanzende Figuren"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputDecoration = [];
    // Beleuchtung
    let lights = ["Lichterketten", "Echtwachs-Kerzen", "Kunststoffkerzen"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputLights = [];
    // Lieferung
    let delivery = ["Standard", "Express", "Prime"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputDelivery = [];
    // Erstellte Variablen sollen HTML-Element sein
    let productTree;
    let productStand;
    let productDecoration;
    let productLights;
    let productDelivery;
    let price;
    let productCart;
    let cartButton;
    function init() {
        // Die erstellten Variablen werden der Id im HTML-Dokument zugewiesen
        productTree = document.getElementById("baum"); // Variable erh�lt zugriff auf ID im HTML
        productTree.addEventListener("change", changeOrder); //EventListener Change wird bei erfolgter �nderung ausgel�st
        //Wenn Wert ver�ndert wird, wird EventListener aktiviert
        productStand = document.getElementById("halterung");
        productStand.addEventListener("change", changeOrder);
        productDecoration = document.getElementById("dekoration");
        productDecoration.addEventListener("change", changeOrder);
        productDelivery = document.getElementById("lieferung");
        productDelivery.addEventListener("change", changeOrder);
        productLights = document.getElementById("beleuchtung");
        productLights.addEventListener("change", changeOrder);
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
        productTree.appendChild(label); // Append Label to Tree 
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
        productStand.appendChild(label); // Append Label to Halterung
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
        label.appendChild(input); // Append Input to Label 
        input.type = "number"; //Input vom Typ Number
        input.name = "NameDecoration";
        input.value = "0"; // Wert 0 
        input.min = "0"; // mindestwert
        input.max = "50"; // maximal
        productDecoration.appendChild(label); // Append label to Dekoration 
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
        input.max = "50"; // h�chstwert  
        productLights.appendChild(label); // Append label to Beleuchtung
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
        let label = document.createElement("label"); // label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _lieferung; //Artikel
        label.appendChild(input); //Append Input to Label
        input.type = "radio"; //Input vom Typ Radio
        input.name = "NameLieferung";
        input.value = "radioboxes";
        productDelivery.appendChild(label); //Append label to Lieferung
        inputDelivery.push(input); // Input wird ins leere Array gepusht
    } // Ende function create
    function changeOrder() {
        let sum = 0; //Warenkorb leer 
        for (let i = 0; i < inputChristmastree.length; i++) {
            if (inputChristmastree[i].checked) {
                sum += 60; //summe + 60
            }
        } // Ende for Schleife
        for (let i = 0; i < inputTreestand.length; i++) {
            if (inputTreestand[i].checked) {
                sum += 25;
            }
        } // Ende for Schleife
        for (let i = 0; i < inputDecoration.length; i++) {
        } // Ende for Schleife                                                    
        for (let i = 0; i < inputLights.length; i++) {
            sum += (parseInt(inputLights[i].value) * 7); //liest string ein und wird in number umgewandelt 
        } // Ende for Schleife
        handleChange(sum); //Funktion handleChange wird aufgerufen 
    } // Ende function changeOrder
    // Warenkorb 
    function handleChange(_summe) {
        //Greift auf Element Id im Html zu & f�gt einen Text ein 
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
                //                document.getElementById("warenLieferung").innerText += delivery[i] + " " + " 7 Euro" + "\n"; //Innertext = Artikel und Summe 
                inputDelivery[0] = delivery[i] + price + "\n";
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
    // Bestellung wird gepr�ft 
    function checkOrder() {
        let nachname = document.getElementById("nachname");
        let vorname = document.getElementById("vorname");
        let email = document.getElementById("email");
        let strasse = document.getElementById("strasse");
        let postleitzahl = document.getElementById("postleitzahl");
        let ort = document.getElementById("ort");
        // �berpr�fe, ob etwas eingegeben wurde
        // checkValidity = boolean 
        if (nachname.checkValidity() == false || vorname.checkValidity() == false || email.checkValidity() == false || strasse.checkValidity() == false || postleitzahl.checkValidity() == false || ort.checkValidity() == false) {
            //Wenn Fehlerhaft 
            alert("Achtung! Bitte in allen Feldern Daten eingeben.");
        }
        else {
            //            nachname.style.backgroundColor = "lightgreen";
            //            vorname.style.backgroundColor = "lightgreen";
            //            email.style.backgroundColor = "lightgreen";
            //            strasse.style.backgroundColor = "lightgreen";
            //            postleitzahl.style.backgroundColor = "lightgreen";
            //            ort.style.backgroundColor = "lightgreen";
            alert("Ihre Bestellung wurde erfolgreich abgeschickt");
        }
    } // Ende function checkOrder
})(christmastree || (christmastree = {})); // Ende Namespace
//# sourceMappingURL=aufg4.js.map