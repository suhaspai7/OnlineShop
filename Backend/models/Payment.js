var mongoose = require('mongoose');
const PaymentSchema = mongoose.Schema({
   cardname:{
     type:String,
     require:true
   },
   cardnumber:{
    type:Number,
    require:true
   },
   expirydate:{
    type:Date,
    require:true
   },
   cvv:{
     type:Number,
     require:true
   },

});
module.exports = User = mongoose.model('PaymentSchema',PaymentSchema);