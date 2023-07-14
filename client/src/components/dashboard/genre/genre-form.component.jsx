import { useEffect, useState } from "react";
import { createGenre, getGenres } from "../../../api/genres";
import { searchGenre } from "../../../api/search";
import images from "../../../utils/image-links";
import Button from "../../button/button.component";
import SearchBar from "../../searchbar/searchbar.component";
import Tile from "../../tiles/tiles.component";
import genreSchema from "../../../utils/validation_schemas/genre.schema";
import { useFormik } from "formik"
import { useDispatch } from 'react-redux'
import FormAlert from "../../form-alert/form-alert.component";

const GenreForm = () => {
    const [genreName, setGenreName] = useState("")
    const [genres, setGenres] = useState([])
    const [formAlert, setFormAlert] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        getGenres(5).then(resp => setGenres(resp.data))
        // searchGenre("boombap").then(resp => setGenres(resp.data))
    }, [formAlert])

    const onSubmit = (values, actions) => {
        createGenre(values.name).then(resp => setFormAlert(`${resp.data.genre} is created!`))
        actions.resetForm()
    }

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: genreSchema,
        onSubmit
    })

    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                <div className='px-4 py-48 flex space-x-12 items-center' >
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Create Genre</h1>
                </div>
            </div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <div className="flex flex-col space-y-8" >
                    <h2 className="text-white text-4xl">Existing Genres</h2>
                    <SearchBar />
                    <div className="flex flex-col space-y-8 lg:flex-row">
                        {
                            genres.map(e => (
                                <Tile staticTile title={e.genre} key={e._id} s />
                            ))
                        }
                    </div>
                </div>
                <h2 className="text-white text-4xl">Create Genre</h2>
                <form onSubmit={handleSubmit} className="bg-p max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg" >
                    <FormAlert alert={formAlert} />
                    <div>
                        <label className="flex flex-col text-gray:400 py-2">Genre Name</label>
                        <input
                            autoComplete="off"
                            style={errors.name && touched.name ? { border: "1px solid red" } : {}}
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                            placeholder="Genre Name"
                            name="name"
                            className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                            type="text"
                        />
                        {errors.name && touched.name ? <p className="text-red-300 " >{errors.name}</p> : null}
                    </div>
                    <div className="mt-4" >
                        <Button color="a" handleClick={(e) => handleSubmit(e)} >Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GenreForm;