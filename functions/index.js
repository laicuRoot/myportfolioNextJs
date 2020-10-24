import { config, https } from 'firebase-functions'
import { createTransport } from 'nodemailer'
const cors = require('cors')({
  origin: true
})

const gmailEmail = config().gmail.email
const gmailPassword = config().gmail.password

const mailTransport = createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

export const submit = https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");

    if (req.method === 'OPTIONS') {
    res.end()
      } else {
    cors(req, res, async () => {
      if (req.method !== 'POST') {
        return
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.name} just messaged me from my website`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
      }

      await mailTransport.sendMail(mailOptions)
      console.log('New email sent to:', gmailEmail)
      res.status(200).send({
        isEmailSend: true
      })
      return
    })
  }
})