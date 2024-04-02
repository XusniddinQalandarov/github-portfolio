require('dotenv').config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xusniddinqalandarov2004@gmail.com',
    pass: process.env.GMAIL_PASSWORD
  }
});

let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'New Subscriber',
  text: 'You have a new subscriber with the following email: subscriber-email@example.com'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});