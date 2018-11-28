import * as Http from "http"; // kreiert http Objekt im Code, dann sucht der Interpreter nach jedem möglichen Import im http-Modul und fügt ihn nacheinander dem http Objekt im Code hinzu

namespace L06_SendData { // Namespace definiert die Sektion einer Lagerung oder Speicherung um Daten als Variablen, Funktionen, Arrays, Objekte usw abzuspeichern

    console.log("Starting server"); // Konsole gibt "Starting Server" aus
    let port: number = process.env.PORT; // es wird eine Variable deklariert namens port und ihr wird der Typ number zugewiesen
    if (port == undefined) // if Abfrage, bei der mit dem Vergleichsoperator untersucht wird ob port undefined ist
        port = 8100; // wenn ja, wird port 8100 zugewiesen

    let server: Http.Server = Http.createServer(); // es wird die Variable namens server vom Typ Http.Server deklariert und ihr wird Http.createServer zugewiesen, dabei wird ein Http Server Objekt erstellt
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);
        
        _response.end();
    }
}