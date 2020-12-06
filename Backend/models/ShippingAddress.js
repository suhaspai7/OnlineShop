var mongoose = require('mongoose');
const AddressSchema = mongoose.Schema({
   firstname:{
     type:String,
     require:true
   },
   lastname:{
    type:String,
    require:true
   },
   addressline1:{
    type:String,
    require:true
   },
   addressline2:{
     type:String,
   },
   city:{
       type:String,
       require:true,
   },
   state:{
    type:String,
    require:true,
   },
   country:{
    type:String,
    require:true,
    },

   Zip:{
       type:Number,
       require:true
   }

});
module.exports = User = mongoose.model('AddressSchema',AddressSchema);