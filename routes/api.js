var db = require ("../models");

module.exports = function(app){
    app.get("/requests", function(req, res){
        db.Renters.findAll({}).then(function(rentersDB){
            res.json(rentersDB);
            console.log(rentersDB[0].first_name);
        });
    });

    app.post("/newrequest", function(req, res) {
    	console.log(req.body);
    	db.Renters.create({
    	first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        request_detail: req.body.request_detail,
        request_status: "New"
    	});

    	res.send(200);
    })


}