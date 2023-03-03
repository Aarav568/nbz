import nodemailer from 'nodemailer'

const sendMail = async ({ message, from, name, subject }) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
    })
    const options = {
        from: "aaravtester@outlook.com",
        subject,
        to: "cool.aarav568@gmail.com",
        replyTo: "cool.aarav568@gmail.com",
        html: `
        <h2>${name} wants to say/ask, </h2>
        <p>From ${from}</p>
        <p>${message}</p>
        `
    }
    try {
        const mailed = await transporter.sendMail(options)
        return mailed
    } catch (err) {
        console.log(err)
    }
}

export default sendMail

