document.addEventListener('DOMContentLoaded', function() {
    var name : string;
    name = prompt("Wie heiﬂt du?"); 
    document.getElementById("greeting").innerHTML += name; 
});
