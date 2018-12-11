namespace Aufgabe7 {
    
    export interface Bestellposten {
        typ: string;
        name: string;
        price: number;
    } // Ende export interface Bestellposten
      
    export interface AssocArray { // Interface ist Muster f�r Assoziatives Array
        [key: string]: Bestellposten[]; // Assoziatives Array
    }  // Ende export interface AssocArray
    
        export let associativeItem: AssocArray = {
        "Baumart": [
            { typ: "Baum", name: "Nordmanntanne", price: 20 },
            { typ: "Baum", name: "Rotfichte", price: 20 },
            { typ: "Baum", name: "Douglasie", price: 26 }
        ],

        "Halter": [
            { typ: "Halterung", name: "Holz-St�nder", price: 14 },
            { typ: "Halterung", name: "Plastik-St�nder", price: 16 },
            { typ: "Halterung", name: "Metall-St�nder", price: 60 }
        ],

        "Beleuchtung": [
            { typ: "Beleuchtung", name: "Lichterkette warmwei�", price: 21 },
            { typ: "Beleuchtung", name: "Lichterkette kaltwei�", price: 16 },
            { typ: "Beleuchtung", name: "Lichterkette mit Kerzen", price: 13 }
        ],

        "Deko": [
            { typ: "Deko", name: "Kugel, rot", price: 1 },
            { typ: "Deko", name: "Kugel, blau", price: 1 },
            { typ: "Deko", name: "Kugel, silber", price: 1.5 },
            { typ: "Deko", name: "Kugel, goldglitzer", price: 2 },
            { typ: "Deko", name: "Holz-Anh�nger", price: 5 },
            { typ: "Deko", name: "Metallsilber-Anh�nger", price: 3 },
            { typ: "Deko", name: "Metallgold-Anh�nger", price: 2 },
            { typ: "Deko", name: "Stern-Anh�nger", price: 7 }
        ],

        "Lieferart": [
            { typ: "Lieferoptionen", name: "Express-Lieferung", price: 3 },
            { typ: "Lieferoptionen", name: "Standard-Lieferung", price: 0.0 }
        ]

    }; // Ende export let associativeItem: AssocArray
    
} // Ende Namespace