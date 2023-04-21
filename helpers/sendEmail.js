const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

/*
const data = {
    to: "liher54411@gam1fy.com",
    subject: "Verify email",
    html: "<p>Verify email.</p>"
};
*/

const sendEmail = async (data) => {
  const email = { ...data, from: "iren.bughaychuk.jetup@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
