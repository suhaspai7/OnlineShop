var mongoose = require('mongoose');
const product = mongoose.Schema({
   id:{
     type:String,
     require:true
   },
   title:{
    type:Number,
    require:true
   },
   image:{
    type:Date,
    require:true
   },
   rating:{
     type:Number,
     require:true
   },
    price:{
     type:Number,
     require:true
   },

});
module.exports = User = mongoose.model('product',product);