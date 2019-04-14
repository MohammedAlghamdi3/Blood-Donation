var db = require('../db/config');

var bloodrio = {};

bloodrio.getnumber = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(city) FROM bloodusers ;")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodnum = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
// city

bloodrio.getRiyadh = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(city) FROM bloodusers WHERE city='Riyadh';")  
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodrio = result.count; 
        next();  
      })
      .catch(function (error) { 
        console.log(error); 
        next(); 
      })
  }
  
  bloodrio.getMakkah = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(city) FROM bloodusers WHERE city='Makkah';")  
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.Makkah = result.count;  
        next();  
      })
      .catch(function (error) { 
        console.log(error);
        next(); 
      })
  }


  bloodrio.getDammam = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(city) FROM bloodusers WHERE city='Dammam';")  
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.Dammam = result.count; 
        next(); 
      })
      .catch(function (error) { 
        console.log(error);
        next();
      })
  }

  bloodrio.getMedina = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(city) FROM bloodusers WHERE city='Medina';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.Medina = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }


  // Gender Blood type 

  bloodrio.getFA = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE gender.gender='Female' AND bloodusers.blood_type='A';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodTFA = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  
  bloodrio.getFAB = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE gender.gender='Female' AND bloodusers.blood_type='AB';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodTFAB = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }


  bloodrio.getFB = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE gender.gender='Female' AND bloodusers.blood_type='B';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
          res.locals.bloodFB= result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }

  bloodrio.getFO = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE gender.gender='Female' AND bloodusers.blood_type='O';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodFO = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }

  // males 

  bloodrio.getMA = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE gender.gender='Male' AND bloodusers.blood_type='A';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodMA = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  
  bloodrio.getMAB = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE  gender.gender='Male' AND bloodusers.blood_type='AB';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodMAB = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }


  bloodrio.getMB = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE gender.gender='Male' AND bloodusers.blood_type='B';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodMB = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }

  bloodrio.getMO = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(gender) FROM bloodusers INNER JOIN gender on bloodusers.id = gender.id WHERE gender.gender='Male' AND bloodusers.blood_type='O';")  // query the database
      .then(function (result) {  
          console.log('blood', result.count)
        res.locals.bloodMO = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  
  //my_dates
  bloodrio.getDJAN = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 1 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('january', result.count)
        res.locals.bloodDJAN = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDFE = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date)  = 2 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('february', result.count)
        res.locals.bloodDFE = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDMAR = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 3 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('march', result.count)
        res.locals.bloodDMAR = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDAPR = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 4 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('April', result.count)
        res.locals.bloodDAPR = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDMAY = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 5 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('may', result.count)
        res.locals.bloodDMAY = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDJUN = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 6 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('jun', result.count)
        res.locals.bloodDJUN = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDJULY = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 7 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('july', result.count)
        res.locals.bloodDJULY = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDAUG = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 8 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('aug', result.count)
        res.locals.bloodDAUG = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDSEP = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 9 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('aug', result.count)
        res.locals.bloodDSEP = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDOCT = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 10 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('OCT', result.count)
        res.locals.bloodDOCT = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDNOV = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 11 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('NOV', result.count)
        res.locals.bloodDNOV = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  bloodrio.getDDEC = function (req, res, next) {
    db.oneOrNone("SELECT COUNT(name) FROM bloodusers WHERE EXTRACT(MONTH FROM my_date) = 12 AND date_part('year', my_date) = date_part('year', CURRENT_DATE);")  // query the database
      .then(function (result) {  
          console.log('DEC', result.count)
        res.locals.bloodDDEC = result.count;  
        next(); 
      })
      .catch(function (error) {
        console.log(error); 
        next();
      })
  }
  
  

module.exports = bloodrio;