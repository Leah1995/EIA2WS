import * as Http from "http"; // kreiert http Objekt im Code, dann sucht der Interpreter nach jedem m�glichen Import im http-Modul und f�gt ihn nacheinander dem http Objekt im Code hinzu

namespace L06_SendData { // Namespace definiert die Sektion einer Lagerung oder Speicherung um Daten als Variablen, Funktionen, Arrays, Objekte usw abzuspeichern

    console.log("Starting server"); // Konsole gibt "Starting Server" aus
    let port: number = process.env.PORT; // es wird eine Variable deklariert namens port und ihr wird der Typ number zugewiesen
    if (port == undefined) // if Abfrage, bei der mit dem Vergleichsoperator untersucht wird ob port undefined ist
        port = 8100; // wenn ja, wird port 8100 zugewiesen

    let server: Http.Server = Http.createServer(); // erstellt einen Server und die �bergebene R�ckruffunktion wird automatisch als Ereignishandler f�r das Anforderungsereignis registriert, l�sst Anwendung http requests empfangen und senden
    server.addListener("request", handleRequest); // es wird ein Listener hinzugef�gt, der bei request die Funktion handleRequest ausf�hrt
    server.addListener("listening", handleListen); // weiterer Listener, der bei listening die Funktion handleListen ausf�hrt
    server.listen(port); // Methode, bei der Listener auf festgelegten Port kreiert wird

    function handleListen(): void { // deklariere Function handleListen vom Typ void
        console.log("Listening"); // Konsole gibt "Listening" aus

    } // Ende Function handleListen

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Parameter _request und _response wird an Function handleRequest �bergeben 
        console.log("I hear voices!"); // Konsole gibt "I hear voices!" aus
        console.log(_request.url); // damit im Terminal bzw in der Konsole der Text des Nutzers auftaucht
       

        _response.setHeader("content-type", "text/html; charset=utf-8"); // Parameter _response gibt den Header mit Text zur�ck
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Access-Control-Allow-Origin l�sst Nutzer wissen, ob es erlaubt ist, Zielressource zu verwenden

        _response.write(_request.url); // mit dem Parameter _response.write auf URL von _request zugreifen

        _response.end(); // Ende Response

    } // Ende Function handleRequest
} // Ende Namespace