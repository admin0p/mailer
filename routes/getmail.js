const router = require("express").Router();
const EmailModel = require("../model/email")

router.get("/getmailid",async (req,res)=>{
    try{
        const emailData = await EmailModel.find({})
        res.status(200).json({emails: emailData})
    }catch(err){
        res.status(404).json({message: "database err "})
    }
   
})

module.exports = router;