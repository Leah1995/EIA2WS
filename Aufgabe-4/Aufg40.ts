namespace christmastree {

    export interface ProductsShop {
        name: string;
    }

    export let christmastree: ProductsShop[] = [{ name: "Nordmanntanne"}, { name: "Blaufichte"}, { name: "Grünfichte"}, { name: "Douglasie"}];
    export let treestand: ProductsShop[] = [{ name: "Grüne Metallhalterung"}, { name: "Gold Metallhalterung"}, { name: "Braune Messinghalterung"}, { name: "Silber Messinghalterung"}];
    export let decoration: ProductsShop[] = [{ name: "Glitzerkugeln"}, { name: "Glaskugeln"}, { name: "Lametta"}, { name: "Glöckchen"}, { name: "Schneeflocken"}, { name: "Tanzende Figuren"}];
    export let lights: ProductsShop[] = [{ name: "Lichterketten"}, { name: "Echtwachs-Kerzen"}, { name: "Kunststoffkerzen"}];
    export let delivery: ProductsShop[] = [{ name: "Standard"}, { name: "Express"}, { name: "Prime"}];

}