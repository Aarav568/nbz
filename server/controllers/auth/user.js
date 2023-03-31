import User from '../../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const exsistingUser = await User.findOne({ email: email })
        if (!exsistingUser) return res.status(404).json({ message: "User not found!" })
        const isPasswordCorrect = await bcrypt.compare(password, exsistingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials" })
        //SIGN JWT TOKEN
        const token = jwt.sign({ email: exsistingUser.email, id: exsistingUser._id }, ')H@McQfThWmZq4t7w!z%C*F-JaNdRgUk', { expiresIn: '3d' })
        res.status(200).json({ user: exsistingUser, token })
    } catch (error) {
        res.status(500).json(error)
    }
}
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const exsistingUser = await User.findOne({ email })
        if (exsistingUser) return res.status(404).json({ message: "User already exists!" })

        const hashedPassword = await bcrypt.hash(password, 10)
        const createdUser = await User.create({
            name, email,
            password: hashedPassword
        })
        //SIGN JWT TOKEN
        const token = jwt.sign({ email: createdUser.email, id: createdUser._id }, ')H@McQfThWmZq4t7w!z%C*F-JaNdRgUk', {})
        res.status(200).json({ user: createdUser, token })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUserDetails = req.body
        const updatedUser = await User.findByIdAndUpdate(req.userId, updatedUserDetails, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}