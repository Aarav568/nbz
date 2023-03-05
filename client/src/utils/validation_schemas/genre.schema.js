import * as yup from 'yup'

const nameRules = /^(?=.*[a-zA-z]).{2,}$/

const genreSchema = yup.object().shape({
    name: yup.string().min(2).matches(nameRules, { message: "Please enter a valid name" }).required("Required"),
})

export default genreSchema;