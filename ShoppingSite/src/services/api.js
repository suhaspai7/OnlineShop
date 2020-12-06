const axios = require('axios')

export const login= (req)=>{
    
return axios.post('http://localhost:3000/login', {
    email: req.email,
    password: req.password
  })
  .then(function (response) {
    console.log(response);
    return response;
  })
}


export const signup = (req)=>{
    
    return axios.post('http://localhost:3000/signup', {
        firstname:req.firstname,
        lastname:req.lastname,
        email: req.email,
        password: req.password
      })
      .then(function (response) {
        console.log(response);
        return response;
      })
    }
export const address = (req)=>{
    
    return axios.post('http://localhost:3000/address', {
        firstname: req.firstname,
        lastname:req.lastname,
        addressline1:req.addressline1,
        addressline2:req.addressline2,
        city:req.city,
        state:req.state,
        country:req.country,
        zip:req.zip,
          })
          .then(function (response) {
            console.log(response);
            return response;
          })
        }


export const payment = (req)=>{
    
return axios.post('http://localhost:3000/address', {
    cardname: req.cardname,
    cardnumber:req.cardnumber,
    expirydate:req.expirydate,
    cvv:req.cvv,
    }).then(function (response) {
                    console.log(response);
                    return response;
                  })
                }