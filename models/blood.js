var db = require('../db/config');

var bloodusers = {};

// create a method that gets all the data from the "bloodusers" table
bloodusers.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id;")  // query the database
    .then(function (result) {   // return the data as a javascript object "result"
      res.locals.bloodusers = result;  
      next(); 
    })
    .catch(function (error) {
      console.log(error);
      next(); 
    })
}

bloodusers.find = function (req, res, next) {
  var id = req.params.id;
  db.oneOrNone("SELECT * FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE bloodusers.id = $1;", [id])
    .then(function (result) {
      res.locals.bloodusers = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })

}

bloodusers.findby = function (req, res, next) {
  var city = req.query.type1;
  var blood = req.query.type2;
  console.log("city : ", city);
  db.manyOrNone("SELECT * FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE bloodusers.city = $1 AND bloodusers.blood_type = $2;", [city, blood])
    .then(function (result) {
      res.locals.bloodusers = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}
var idd;
bloodusers.create = function (req, res, next) {
  var bloodData = {
    name: req.body.name,
    city: req.body.city,
    blood_type : req.body.blood_type  || "",
    gender: req.body.gender,
    phone: req.body.phone,
    my_date: req.body.my_date,
    details: req.body.details
  }
  console.log(req.body)

  db.one(
    `INSERT INTO bloodusers
    (name, city, blood_type, phone, details, my_date ) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`,
    [bloodData.name, bloodData.city, bloodData.blood_type, bloodData.phone,
    bloodData.details , bloodData.my_date])
    .then(function (result) {
      console.log(result);
      res.locals.bloodusers_id = result.id;
      idd = res.locals.bloodusers_id;
      console.log("after : ", idd);
      db.none(
    `INSERT INTO gender
    (id, gender) 
    VALUES ($1, $2);`,
    [idd, bloodData.gender])
    .then(function (result) {
              console.log("the locals : ",idd);
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })

}

bloodusers.update = function (req, res, next) {
  var bloodData = {
    name: req.body.name,
    city: req.body.city,
    blood_type : req.body.blood_type  || "",
    gender: req.body.gender,
    phone: req.body.phone,
    my_date: req.body.my_date,
    details: req.body.details
  }

  db.one(`UPDATE bloodusers SET name = $1, city = $2, blood_type = $3, phone = $4,
  details = $5, location = $6 WHERE id = $7 RETURNING id;`, [bloodData.name, bloodData.city, bloodData.blood_type, bloodData.gender, bloodData.phone, bloodData.details, req.params.id])
    db.one(`UPDATE gender SET gender = $1 WHERE id = $2 RETURNING id;`, [bloodData.gender, req.params.id])
    .then(function (result) {
      res.locals.bloodusers_id = result.id;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

bloodusers.delete = function (req, res, next) {
  db.none('DELETE FROM bloodusers WHERE id=$1;', [req.params.id])
    .then(function () {
      console.log('successful delete');
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

module.exports = bloodusers;