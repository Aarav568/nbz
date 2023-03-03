import sendMail from "../../utils/nodemailer.js"

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