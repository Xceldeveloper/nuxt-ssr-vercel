import express from 'express'
import bodyParser from 'body-parser'
import mailer from './mailer'

const app = express()
app.use(bodyParser.json())

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/api/', (req, res) => {
  res.send({ message: 'Nuxt server is running...' })
})

// It is important that the full path is specified here
app.post('/api/express', function (req, res) {
  const { info } = req.body
  res.status(200).json({ info }).end()
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/api/express', function (req, res) {
  res.status(200).json({ msg: 'get' }).end()
})

app.get('/api/express/:id', function (req, res) {
  const { id } = req.params
  res.status(200).json({ id }).end()
})

// endpoint to send email

// async post request also catch errors

// eslint-disable-next-line @typescript-eslint/no-unused-vars

app.post('/api/send-email', async (req, res) => {
  const { email, name, message } = req.body
  const mailOptions = {
    from: email,
    to: 'hello@site.com',
    subject: `Message from ${name}`,
    text: message,
  }

  //   if (!email || !name || !message) {
  //     res
  //       .status(400)
  //       .json({
  //         msg: 'Please enter all fields',
  //         fields: { email, name, message },
  //       })
  //       .end()
  //   }

  try {
    await mailer(mailOptions)
    res
      .status(200)
      .json({
        msg: 'Email sent',
      })
      .end()
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Email not sent', error: JSON.stringify(error) })
      .end()
  }
})

export default app
