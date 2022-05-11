var express = require('express');
var router = express.Router();

//database connection
let dbConnection = require('./../database/conn').localConnect();


/* GET users listing. */
router.get('/', function (req, res, next) {

  dbConnection.query('SELECT * FROM api_learn.user_profile', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });
  //res.send('respond with a resource');
});

router.post('/contact', function (req, res, next) {

  console.log(req.body);
  
  res.send('I am post call');
  // dbConnection.query('select * from user_profile', (error, results, fields) => {
  //   if (error) throw error;
  //   res.send(results)
  // });
});



//post method
router.post('/profile', (req, res, next) => {
  let{
    Fname,
    Lname,
    Company,
    Designation,
    Address,
    join_date
}=req.body

  let insertquery= `INSERT INTO api_learn.user_profile
  (Fname,Lname,Company,Designation,Address,join_date)
   VALUES ('${Fname}','${Lname}','${Company}','${Designation}','${Address}','${join_date}')`;

  dbConnection.query(insertquery,(err,result)=>{
    if(err){
      res.send(error);
      throw error;
    }
    else{
res.send('user details added');
    }
    
  });
})

router.get('/profile', function (req, res, next) {

  dbConnection.query('SELECT * FROM api_learn.user_profile', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });
  //res.send('respond with a resource');
});

module.exports = router;
