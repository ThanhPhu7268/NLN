const con = require('../configs/db')
class Blog {
    getBlog(req, res) {
        con.query("SELECT * FROM blog", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result)
        });
    }
    getBlogHome(req, res) {
        con.query("select * from blog limit 6", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result)
        });
    }
}
module.exports = new Blog()