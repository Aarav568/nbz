import * as yup from 'yup'

const nameRules = /^(?=.*[a-zA-z]).{2,}$/

const artistsSchema = yup.object().shape({
    name: yup.string().min(2).matches(nameRules, { message: "Please enter a valid name" }).required("Required"),
    img: yup.string().min(2, "Please Select an Image").required("Required"),
    genreId: yup.string().required("Required"),
})

export default artistsSchema;