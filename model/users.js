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
    //Endpoint 3
    createUser: function(userData, callback){
        var connection = db.getConnection();
        connection.connect(function(err){
            if(err){
                return callback(err, null)
            } else{
                const getSqlQuery = `INSERT INTO users (name, email, dob, password) VALUES (?,?,?,?);`
                connection.query(getSqlQuery, [userData.name, userData.email, userData.dob, userData.password], (error, result) => {
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
    //Endpoint 4
    deleteUser: function(userid, callback){
        var connection = db.getConnection();
        connection.connect(function(err){
            if(err){
                return callback(err, null)
            } else{
                const getSqlQuery = `DELETE FROM users WHERE id = ?;`
                connection.query(getSqlQuery, userid, (error, result) => {
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
    //Endpoint 5
    updateUser: function(userid, userData, callback){
        var connection = db.getConnection();
        connection.connect(function(err){
            if(err){
                return callback(err, null)
            } else{
                const getSqlQuery = `UPDATE users SET name=?, email=?, dob=?, password=? WHERE id=?;`
                connection.query(getSqlQuery, [userData.name, userData.email, userData.dob, userData.password, userid], (error, result) => {
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