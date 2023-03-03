import * as yup from 'yup'

const nameRules = /^(?=.*[a-zA-z]).{2,}$/

const signupSchema = yup.object().shape({
    name: yup.string().min(2).matches(nameRules, { message: "Please enter a valid name" }).required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(8, 'Password is too short').required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passowrds should match").required("Required")
})

export default signupSchema