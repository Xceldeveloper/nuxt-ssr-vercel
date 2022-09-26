/* eslint-disable @typescript-eslint/no-unused-vars */
// file for send mail with nodemailer

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.freesmtpservers.com',
  port: 25,
})

const mailer = (mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return Promise.reject(error)
    }
    // console.log('Message sent: %s', info.messageId)
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  })
}

module.exports = mailer
