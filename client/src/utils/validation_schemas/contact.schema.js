import * as yup from 'yup'

const nameRules = /^(?=.*[a-zA-z]).{2,}$/

const contactSchema = yup.object().shape({
    name: yup.string().min(2).matches(nameRules, { message: "Please enter a valid name" }).required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    message: yup.string().min(8, 'Message too short').required("Required"),
})

export default contactSchema;