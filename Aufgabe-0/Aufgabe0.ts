document.addEventListener('DOMContentLoaded', function() {
    var name : string;
    name = prompt("Wie hei�t du?"); 
    document.getElementById("greeting").innerHTML += name; 
});
