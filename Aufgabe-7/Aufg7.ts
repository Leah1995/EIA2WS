namespace Aufgabe7 {
    
    // Heroku verlinken
    let address: string = "https://eia2ws.herokuapp.com";
    
    document.addEventListener("DOMContentLoaded", init); // init versieht Seite mit Startwerten und initialisiert
    document.addEventListener("DOMContentLoaded", fillFieldset2);  // DOMContentLoaded wird ausgelöst, wenn das initiale HTML-Dokument vollständig geladen und geparst ist.
    document.addEventListener("DOMContentLoaded", fillFieldset3); // DOMContentLoaded wird ausgelöst, wenn das DOM vollständig aufgebaut, aber noch nicht alle externen Ressourcen geladen sind
    document.addEventListener("DOMContentLoaded", fillFieldset4);
    document.addEventListener("DOMContentLoaded", fillFieldset5);
    document.addEventListener("DOMContentLoaded", fillFieldset6);
    document.addEventListener("DOMContentLoaded", changeListener);
    


    
} // Ende namespace