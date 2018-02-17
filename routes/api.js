var db = require ("../models");

module.exports = function(app){
    app.get("/requests", function(req, res){
        console.log("this is our Request param", req);
        db.Renter.findAll({
            where: {
                username: req.query.username
            }
        }).then(function(rentersDB){
          console.log(rentersDB);
           res.json(rentersDB);
        });
    });

          app.get("/Adminrequests", function(req, res){
        db.Renter.findAll({}).then(function(rentersDB){
            res.json(rentersDB);
            console.log(rentersDB[0].first_name);
        });
    });

    app.post("/newrequest", function(req, res) {
        console.log(req.body);
        db.Renter.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        request_detail: req.body.request_detail,
        contractor_name: req.body.contractor_name,
        request_status: "New",
        username: req.body.username,
        contractor_name: "Unassigned",
        scheduled_date: "N/A"
        });

        res.send(200);
    });



    app.post("/adminupdate", function (req, res) {
        console.log ('this is our req.body!!!!!',req.body);


        var status = req.body.request_status;
        var contractor_name = req.body.contractor_name

        db.Renter.update({
            request_status: status,
            contractor_name: contractor_name
        },{
            where:{
                id: req.body.id
            }
        })
        .then(function(thingFromDb) {
            console.log('this the confimatino from the DB!!!', thingFromDb);
        })
        res.send(200);
    });

    app.post("/contupdate",function(req,res){
        var status = req.body.request_status;
        var scheduled_date = req.body.scheduled_date

        db.Renter.update({
            request_status: status,
            scheduled_date: scheduled_date
        },{
            where:{
                id: req.body.id
            }
        })
        .then(function(thingFromDb){
            console.log('this is the thing from DB', thingFromDb);
        })
        res.send(200);
    });
    

    app.post("/signup", function(req, res) {
       console.log(res.body);
   db.User.create({
     role: req.body.role,
     username: req.body.username,
     address: req.body.address,
     city: req.body.city,
     state: req.body.state,
     zip: req.body.zip,
     email: req.body.email,
     password: req.body.password
   }).then(function() {
     res.redirect(307, "/renter");
   }).catch(function(err) {
     console.log(err);
     res.json(err);
   });
 });

}