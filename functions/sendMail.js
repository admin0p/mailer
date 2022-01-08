const mailer = require('nodemailer');


const sendMail = async (config,toid,subject,content)=>{
  const transporter = mailer.createTransport(config);
  
  var mailOptions = {
    from: config.auth.user,
    to: toid,
    subject: subject,
    text: content
  };
  try{
    const info =await transporter.sendMail(mailOptions);
    console.log("mail sent")
  }catch(err){
    console.log(err)
  }
 
  
}

module.exports = sendMail