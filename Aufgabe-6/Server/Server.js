"use strict";
const Http = require("http"); // kreiert http Objekt im Code, dann sucht der Interpreter nach jedem m�glichen Import im http-Modul und f�gt ihn nacheinander dem http Objekt im Code hinzu
// "http"-Objekte werden deklariert, das Modul HTTP wird aus der node.d.ts Datei importiert
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); // Konsole gibt "Starting Server" aus
    let port = process.env.PORT; // es wird eine Variable deklariert namens port und ihr wird der Typ number zugewiesen  und die process.env- Eigenschaft gibt ein Objekt zur�ck, das die Benutzerumgebung enth�lt 
    if (port == undefined)
        port = 8100; // wenn ja, wird port sicherheitshalber 8100 zugewiesen
    let server = Http.createServer(); // erstellt einen Server und die �bergebene R�ckruffunktion wird automatisch als Ereignishandler f�r das Anforderungsereignis registriert, l�sst Anwendung http requests empfangen und senden
    server.addListener("request", handleRequest); // es wird ein Listener hinzugef�gt, der bei request die Funktion handleRequest ausf�hrt
    server.addListener("listening", handleListen); // weiterer Listener, der bei listening die Funktion handleListen ausf�hrt
    server.listen(port); // Methode, bei der Listener auf festgelegten Port kreiert wird
    function handleListen() {
        console.log("Listening"); // Konsole gibt "Listening" aus
    } // Ende Function handleListen
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsole gibt "I hear voices!" aus
        console.log(_request.url); // damit im Terminal bzw in der Konsole der Text des Nutzers auftaucht
        let query = Url.parse(_request.url, true).query;
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Parameter _response wird mit Wert und Name in den Header gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //gibt an, ob die Antwort mit dem anfordernden Code des angegebenen Ursprungs gemeinsam genutzt werden kann
        _response.write("ausgabe");
        for (let key in query) {
            console.log(query[key]);
            _response.write("ausgabe");
        }
        _response.end(); // Ende Response, Server bekommt gesagt, dass alles gesendet wurde und Nachricht komplett ist
    } // Ende Function handleRequest
})(L06_SendData || (L06_SendData = {})); // Ende Namespace
//# sourceMappingURL=Server.js.map