var app = require("./controller/app");
var port = 8081;
var server = app.listen(port, function(){
    console.log("Successfully hosted at port " + port);
});