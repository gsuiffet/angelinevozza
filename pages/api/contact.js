import nodemailer from "nodemailer";

export default async function (req, res) {
  // Todo fix case if wrong password
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "dummysuiffet.g@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: "dummysuiffet.g@gmail.com",
    to: "angelinevozza@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.name} - ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  try {
    const info = await transporter.sendMail(mailData);
    res.send({
      to: "suiffet.g@gmail.com",
      message: req.body.message,
      ok: true,
      info,
    });
  } catch (err) {
    res.send({
      to: "suiffet.g@gmail.com",
      message: req.body.message,
      ok: false,
    });
  }
  res.status(200)
}
