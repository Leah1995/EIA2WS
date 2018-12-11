import * as Http from "http"; // kreiert http Objekt im Code, dann sucht der Interpreter nach jedem möglichen Import im http-Modul und fügt ihn nacheinander dem http Objekt im Code hinzu
// "http"-Objekte werden deklariert, das Modul HTTP wird aus der node.d.ts Datei importiert
import * as Url from "url";
namespace L06_SendData { // Namespace definiert die Sektion einer Lagerung oder Speicherung um Daten als Variablen, Funktionen, Arrays, Objekte usw abzuspeichern

    interface Bestellposten { 
        [key: string]: string; // Assoziatives Array, wie Array aber werden nicht mit Nummer angesprochen, meistens ist der Key vom Typ string
    }

    console.log("Starting server"); // Konsole gibt "Starting Server" aus
    let port: number = process.env.PORT; // es wird eine Variable deklariert namens port und ihr wird der Typ number zugewiesen  und die process.env- Eigenschaft gibt ein Objekt zurück, das die Benutzerumgebung enthält 
    if (port == undefined) // if Abfrage, bei der mit dem Vergleichsoperator untersucht wird ob port undefined ist
        port = 8100; // wenn ja, wird port sicherheitshalber 8100 zugewiesen

    let server: Http.Server = Http.createServer(); // erstellt einen Server und die übergebene Rückruffunktion wird automatisch als Ereignishandler für das Anforderungsereignis registriert, lässt Anwendung http requests empfangen und senden
    server.addListener("request", handleRequest); // es wird ein Listener hinzugefügt, der bei request die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); // weiterer Listener, der bei listening die Funktion handleListen ausführt
    server.listen(port); // Methode, bei der Listener auf festgelegten Port kreiert wird

    function handleListen(): void { // deklariere Function handleListen vom Typ void, dadurch besitzt sie keinen Rückgabewert
        console.log("Listening"); // Konsole gibt "Listening" aus

    } // Ende Function handleListen

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Parameter _request und _response wird an Function handleRequest übergeben, request: eingehendes Nachrichtenobjekt, response: Antwort, die vom Server kommt
        console.log("I hear voices!"); // Konsole gibt "I hear voices!" aus
        console.log(_request.url); // damit im Terminal bzw in der Konsole der Text des Nutzers auftaucht

        let query: Bestellposten = Url.parse(_request.url, true).query;
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Parameter _response wird mit Wert und Name in den Header gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //gibt an, ob die Antwort mit dem anfordernden Code des angegebenen Ursprungs gemeinsam genutzt werden kann



        for (let key in query) {
            console.log(query[key]);

            _response.write(key + " = " + query[key] + "<br>");
            //_response.write(_request.url); // mit dem Parameter _response.write auf URL von _request zugreifen
        }

        _response.end(); // Ende Response, Server bekommt gesagt, dass alles gesendet wurde und Nachricht komplett ist

    } // Ende Function handleRequest
} // Ende Namespace