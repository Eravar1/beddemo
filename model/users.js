const db = require("./databaseConfig")
let users = {
    //Endpoint 1
    getAllUsers: function(callback){
        var connection = db.getConnection();
        connection.connect(function(err){
            if(err){
                return callback(err, null)
            } else{
                const getSqlQuery = `SELECT id, datecreated, name, email, dob, permission, password FROM users;`
                connection.query(getSqlQuery, null, (error, result) => {
                    connection.end()
                    if(error){
                        return callback(error, null);
                    }
                    if(result.length == 0){
                        return callback(null, null);
                    } else{
                        return callback(null, result)
                    }
                })
            }
        })
    },
    //Endpoint 2
    getUser: function(userid, callback){
        var connection = db.getConnection();
        connection.connect(function(err){
            if(err){
                return callback(err, null)
            } else{
                const getSqlQuery = `SELECT id, datecreated, name, email, dob, permission, password FROM users WHERE id = ?;`
                connection.query(getSqlQuery, [userid], (error, result) => {
                    connection.end()
                    if(error){
                        return callback(error, null);
                    }
                    if(result.length == 0){
                        return callback(null, null);
                    } else{
                        return callback(null, result[0])
                    }
                })
            }
        })
    },
}
module.exports = users;