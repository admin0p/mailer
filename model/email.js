const {Schema,model} = require("mongoose");

const emailSchema = new Schema({
   emailId : {
    type : String,
    required : true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
   }
});

module.exports = EmailModel = model("Email",emailSchema);