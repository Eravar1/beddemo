var mysql = require('mysql');
var connection = {
    getConnection: function() {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "beddemo"
        });
        return conn;
    }
}
module.exports = connection;