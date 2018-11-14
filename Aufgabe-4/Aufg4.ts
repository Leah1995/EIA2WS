namespace Form {
    window.addEventListener("load", init);

    // Arrays
    let dec: string[] = ["glitzernde Kugeln (bunt)", "matte Kugeln (bunt)", "silber Kugeln", "goldene Kugeln", "Lametta", "tanzende Figuren"];
    let top: string[] = ["Engel", "Sternschnuppe", "Klassischer Stern"];
    let containers: string[] = ["grün", "gold", "braun", "silber"];
    let articleNumber: number = 0;
    let numberFields: HTMLInputElement[] = [];
    let toppingCheckboxes: HTMLInputElement[] = [];
    let toppingNumber: number = 0;
    //    console.log("d");


    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset"); // fieldset = gruppiert verwandte Elemente in einer Form

        // EventListener an fieldsets
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];

        } // for-Schleife Ende

    } // Ende Init Function
} //namespace