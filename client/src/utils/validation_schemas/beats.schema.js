import * as yup from 'yup'

const nameRules = /^(?=.*[a-zA-z]).{2,}$/

const beatsSchema = yup.object().shape({
    name: yup.string().min(2).matches(nameRules, { message: "Please enter a valid name" }).required("Required"),
    artistId: yup.string().required("Required"),
    genreId: yup.string().required("Required"),
    mp3: yup.mixed().required("Required"),
    wav: yup.mixed().required("Required"),
    stem: yup.mixed().required("Required"),
    sample: yup.mixed().required("Required"),
    img: yup.string().min(2, "Please Select an Image").required("Required"),
})

export default beatsSchema;