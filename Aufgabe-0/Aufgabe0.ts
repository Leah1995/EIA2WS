document.addEventListener("DOMContentLoaded", function(): void {
    var name: string;
    name = prompt("Wie hei�t du?");
    document.getElementById("greeting").innerHTML += name;
    console.log("Hallo!", name);
});
