const cron = require('cron');
const axios = require("axios")

const {config} = require("../config");
const sendMail = require("./sendMail")

var cronJob = cron.job("55 59 23 * * *", async ()=>{
    const {data} = await axios.get("http://localhost:3000/getmailid")
    //send mail
    const emails = data.emails.map((email)=>{
      return email.emailId
    }).join(",")
   sendMail(config,emails,"reqular greetings","welcome")
}); 

module.exports = cronJob