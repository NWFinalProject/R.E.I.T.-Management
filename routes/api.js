var db = require ("../models");

module.exports = function(app){
    app.get("/requests", function(req, res){
        db.Renters.findAll({}).then(function(rentersDB){
            res.json(rentersDB);
            console.log(rentersDB[0].first_name);
        });
    });




}