const router = require("express").Router();
const EmailModel = require("../model/email")

router.post("/postmailid",async (req,res)=>{
    try{
        const insertedData = await EmailModel.insertMany(req.body);
        return res.status(200).json({insertedData}); 
    }catch (err){
        return res.status(503).json({message : err._message});
    }

})

module.exports = router;