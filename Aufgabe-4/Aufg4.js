var Form;
(function (Form) {
    window.addEventListener("load", init);
    // Arrays
    let dec = ["glitzernde Kugeln (bunt)", "matte Kugeln (bunt)", "silber Kugeln", "goldene Kugeln", "Lametta", "tanzende Figuren"];
    let top = ["Engel", "Sternschnuppe", "Klassischer Stern"];
    let containers = ["grün", "gold", "braun", "silber"];
    let articleNumber = 0;
    let numberFields = [];
    let toppingCheckboxes = [];
    let toppingNumber = 0;
    //    console.log("d");
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset"); // fieldset = gruppiert verwandte Elemente in einer Form
        // EventListener an fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
        } // for-Schleife Ende
    } // Ende Init Function
})(Form || (Form = {})); //namespace
//# sourceMappingURL=Aufg4.js.map