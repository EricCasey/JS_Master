var http = require("http");

function printExampleHTML(callback) {

    var requestOptions = {
        host: "casey.works",
        path: "/"
    };

    http.get(requestOptions, (response) => { // HTTP Response Callback

        response.setEncoding("utf8"); // Use UTF-8 encoding

        response.on("data", callback);

        response.on("end", function() { // On Data Completed
            console.log("Response stream complete.");
        });

    });


}


printExampleHTML(console.log);
