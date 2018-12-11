namespace Aufgabe7 {
    
    export interface Bestellposten {
        typ: string;
        name: string;
        price: number;
    } // Ende export interface Bestellposten
      
    export interface AssocArray { // Interface ist Muster für Assoziatives Array
        [key: string]: Bestellposten[]; // Assoziatives Array
    }  // Ende export interface AssocArray
    
        export let associativeItem: AssocArray = {
        "Baumart": [
            { typ: "Baum", name: "Nordmanntanne", price: 20 },
            { typ: "Baum", name: "Rotfichte", price: 20 },
            { typ: "Baum", name: "Douglasie", price: 26 }
        ],

        "Halter": [
            { typ: "Halterung", name: "Holz-Ständer", price: 14 },
            { typ: "Halterung", name: "Plastik-Ständer", price: 16 },
            { typ: "Halterung", name: "Metall-Ständer", price: 60 }
        ],

        "Beleuchtung": [
            { typ: "Beleuchtung", name: "Lichterkette warmweiß", price: 21 },
            { typ: "Beleuchtung", name: "Lichterkette kaltweiß", price: 16 },
            { typ: "Beleuchtung", name: "Lichterkette mit Kerzen", price: 13 }
        ],

        "Deko": [
            { typ: "Deko", name: "Kugel, rot", price: 1 },
            { typ: "Deko", name: "Kugel, blau", price: 1 },
            { typ: "Deko", name: "Kugel, silber", price: 1.5 },
            { typ: "Deko", name: "Kugel, goldglitzer", price: 2 },
            { typ: "Deko", name: "Holz-Anhänger", price: 5 },
            { typ: "Deko", name: "Metallsilber-Anhänger", price: 3 },
            { typ: "Deko", name: "Metallgold-Anhänger", price: 2 },
            { typ: "Deko", name: "Stern-Anhänger", price: 7 }
        ],

        "Lieferart": [
            { typ: "Lieferoptionen", name: "Express-Lieferung", price: 3 },
            { typ: "Lieferoptionen", name: "Standard-Lieferung", price: 0.0 }
        ]

    }; // Ende export let associativeItem: AssocArray
    
} // Ende Namespace