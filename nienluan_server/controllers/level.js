const con = require('../configs/db')
class Level {
    getLevel(req, res) {
        con.query("SELECT * FROM capdo", function (err, result, fields) {
            if (err) throw err;
            res.json(result)
        });
    }

}

module.exports = new Level()