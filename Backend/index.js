var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var User = require("./models/User");
var Address = require("./models/ShippingAddress");
var Product = require("./models/Product");
var Payment = require("./models/Payment");
var db = require("./mysetup/myurl").myurl;
var app = express();
var cors = require('cors');

var port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log("Error is ", err.message);
  });

app.get("/", (req, res) => {
  res.status(200).send(`This is the login and sign up`);
});

app.post("/signup", async (req, res) => {
  
  var newUser = new User({
    firstname: req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password: req.body.password,
  });
  await User.findOne({ email: newUser.email })
  .then(profile => {
      if(profile)
      {
        res.send("Gmail Id already exists");
      }
  })
  .catch(err => {
    console.log("Error is ", err.message);
  });



  await newUser
    .save()
    .then(() => {
      res.status(200).send(newUser);
    })
    .catch(err => {
      res.status(400).send(err.message);
      console.log("Error is ", err.message);
    });
});
app.post("/login", async (req, res) => {
    var newUser = {};
    newUser.email = req.body.email;
    newUser.password = req.body.password;
  
    await User.findOne({ email: newUser.email })
      .then(profile => {
        if (!profile) {
          res.send("User not exist");
        } else {
          if (profile.password == newUser.password) {
            res.send("User authenticated");
          } else {
            res.send("User Unauthorized Access");
          }
        }
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  });
app.post("/address", async (req, res) => {
    var address = new Address({
      firstname: req.body.firstname,
      lastname:req.body.lastname,
      addressline1:req.body.addressline1,
      addressline2:req.body.addressline2,
      city:req.body.city,
      state:req.body.state,
      country:req.body.country,
      zip:req.body.zip,
    
    });
    await address
      .save()
      .then(() => {
        res.status(200).send(address);
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  });

app.post("/checkout/payment", async (req, res) => {
    var payment = new Payment({
      cardname: req.body.cardname,
      cardnumber:req.body.cardnumber,
      expirydate:req.body.expirydate,
      cvv:req.body.cvv,
    });
    await payment
      .save()
      .then(() => {
        res.status(200).send(payment);
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  });

  app.get("/product", async (req, res) => {
    Product
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ");
    });
  });




app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});