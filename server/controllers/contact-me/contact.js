import sendMail from "../../utils/nodemailer.js"
import Contact from "../../models/contact.js"

export const contactMe = async (req, res) => {
    const { name, from, message } = req.body
    try {
        const mailed = await sendMail({
            name, from, message,
            subject: "Contact Me"
        })
        res.status(200).json(mailed)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const sendQuery = async (req, res) => {
    const { name, from, message } = req.body
    try {
        const query = await Contact.create({ name, email: from, message })
        res.status(200).json(query)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}