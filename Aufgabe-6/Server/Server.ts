import * as Http from "http"; // kreiert http Objekt im Code, dann sucht der Interpreter nach jedem möglichen Import im http-Modul und fügt ihn nacheinander dem http Objekt im Code hinzu

namespace L06_SendData { // Namespace definiert die Sektion einer Lagerung oder Speicherung um Daten als Variablen, Funktionen, Arrays, Objekte usw abzuspeichern

    console.log("Starting server"); // Konsole gibt "Starting Server" aus
    let port: number = process.env.PORT; // es wird eine Variable deklariert namens port und ihr wird der Typ number zugewiesen
    if (port == undefined) // if Abfrage, bei der mit dem Vergleichsoperator untersucht wird ob port undefined ist
        port = 8100; // wenn ja, wird port 8100 zugewiesen

    let server: Http.Server = Http.createServer(); // erstellt einen Server und die übergebene Rückruffunktion wird automatisch als Ereignishandler für das Anforderungsereignis registriert, lässt Anwendung http requests empfangen und senden
    server.addListener("request", handleRequest); // es wird ein Listener hinzugefügt, der bei request die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); // weiterer Listener, der bei listening die Funktion handleListen ausführt
    server.listen(port); // Methode, bei der Listener auf festgelegten Port kreiert wird

    function handleListen(): void { // deklariere Function handleListen vom Typ void
        console.log("Listening"); // Konsole gibt "Listening" aus
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);
        
        _response.end();
    }
}