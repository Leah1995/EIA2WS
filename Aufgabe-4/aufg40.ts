namespace christmastree {

    export interface ProductsShop {
        name: string;
        price: number;
    }

    export let christmastree: ProductsShop[] = [{ name: " ", price: 0}, { name: "Nordmanntanne", price: 40.50}, { name: "Blaufichte", price: 45}, { name: "Grünfichte", price: 55}, { name: "Douglasie", price: 49.90}];
    export let treestand: ProductsShop[] = [{ name: " ", price: 0}, { name: "Grüne Metallhalterung", price: 20}, { name: "Gold Metallhalterung", price: 30}, { name: "Braune Messinghalterung", price: 15}, { name: "Silber Messinghalterung", price: 17.50}];
    export let decoration: ProductsShop[] = [{ name: " ", price: 0}, { name: "Glitzerkugeln", price: 1.50}, { name: "Glaskugeln", price: 3}, { name: "Lametta", price: 0.75}, { name: "Glöckchen", price: 2}, { name: "Schneeflocken", price: 2.10}, { name: "Tanzende Figuren", price: 3.20}];
    export let lights: ProductsShop[] = [{ name: " ", price: 0}, { name: "Lichterketten", price: 5}, { name: "Echtwachs-Kerzen", price: 10}, { name: "Kunststoffkerzen", price: 4}];
    export let delivery: ProductsShop[] = [{ name: " ", price: 0}, { name: "Standard", price: 3}, { name: "Express", price: 5}, { name: "Prime", price: 7}];
}