import { useState } from "react";
import images from "../../../utils/image-links";
import Button from "../../button/button.component";
import SearchBar from "../../searchbar/searchbar.component";
import Tile from "../../tiles/tiles.component";
import { getGenres } from "../../../api/genres";
import { createArtist, getArtists } from "../../../api/artists";
import { createBeat } from "../../../api/beats";
import TileSelectable from "../../tile-selectable/tile-selectable.component";
import { useFormik } from "formik"
import beatsSchema from "../../../utils/validation_schemas/beats.schema";
import FormAlert from "../../form-alert/form-alert.component";
import FileBase64 from 'react-file-base64';

const BeatForm = () => {
    const [genres, setGenres] = useState([])
    const [artists, setArtists] = useState([])
    const [formAlert, setFormAlert] = useState(null)

    const onSubmit = (values, actions) => {
        const {mp3, wav, sample, genreId, artistId, name, img} = values
        const form = new FormData()
        form.append("name", name)
        form.append("mp3", mp3)
        form.append("wav", wav)
        form.append("sample", sample)
        form.append("img", img)
        // form.append("stem", stem)
        form.append("genreId", genreId)
        form.append("artistId", artistId)
        createBeat(form).then(resp => setFormAlert(`${resp.data.name} is created!`))
        actions.resetForm()
    }
    const { values, handleBlur, handleChange, handleSubmit, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            name: "",
            genreId: "",
            artistId: "",
            mp3: "",
            wav: "",
            // stem: "",
            sample: "",
            img: ""
        },
        validationSchema: beatsSchema,
        onSubmit
    })

    // const handleFileChange = (e) => {
    //     setFormData({ ...formData, files: [...formData.files, e.target.files[0]] })
    // }

    useState(() => {
        getGenres(5).then(resp => setGenres(resp.data))
        getArtists(5).then(resp => setArtists(resp.data))
    }, [])

    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                <div className='px-4 py-48 flex space-x-12 items-center' >
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Create Beat</h1>
                </div>
            </div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <div className="flex flex-col space-y-8" >
                    <h2 className="text-white text-4xl">Existing Beats</h2>
                    <SearchBar />
                    <div className="flex flex-col text-gray:400 space-y-8 pt-4">
                        <Tile title={"Beat"} />
                        <Tile title={"Beat"} />
                    </div>
                </div>
                <h2 className="text-white text-4xl">Create Beat</h2>
                <form encType="multipart/form-data" onSubmit={handleSubmit} className="bg-p w-full mx-auto p-8 px-8 rounded-lg" >
                    <FormAlert alert={formAlert} />
                    <div className="max-w-[400px]">
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat Name</label>
                            <input
                                autoComplete="off"
                                style={errors.name && touched.name ? { border: "1px solid red" } : {}}
                                onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur}
                                placeholder="Beat Name"
                                name="name"
                                className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                                type="text"
                            />
                            {errors.name && touched.name ? <p className="text-red-300 " >{errors.name}</p> : null}
                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat Image</label>
                            <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => setFieldValue("img", base64)} />
                            {errors.img ? <p className="text-red-300 " >Select Image</p> : null}

                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat MP3</label>
                            <input
                                style={errors.mp3 && touched.mp3 ? { border: "1px solid red" } : {}}
                                onChange={(e) => setFieldValue("mp3", e.currentTarget.files[0])}
                                onBlur={handleBlur}
                                name="mp3"
                                className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                                type="file"
                            />
                            {errors.mp3 && touched.mp3 ? <p className="text-red-300 " >{errors.mp3}</p> : null}
                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat WAV</label>
                            <input
                                style={errors.wav && touched.wav ? { border: "1px solid red" } : {}}
                                onChange={(e) => setFieldValue("wav", e.currentTarget.files[0])}
                                onBlur={handleBlur}
                                name="wav"
                                className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                                type="file"
                            />
                            {errors.wav && touched.wav ? <p className="text-red-300 " >{errors.wav}</p> : null}
                        </div>
                        {/* <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat STEM</label>
                            <input
                                style={errors.stem && touched.stem ? { border: "1px solid red" } : {}}
                                onChange={(e) => setFieldValue("stem", e.currentTarget.files[0])}
                                onBlur={handleBlur}
                                name="stem"
                                className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                                type="file"
                            />
                            {errors.stem && touched.stem ? <p className="text-red-300 " >{errors.wav}</p> : null}
                        </div> */}
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat Sample</label>
                            <input
                                style={errors.sample && touched.sample ? { border: "1px solid red" } : {}}
                                onChange={(e) => setFieldValue("sample", e.currentTarget.files[0])}
                                onBlur={handleBlur}
                                name="sample"
                                className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                                type="file"
                            />
                            {errors.sample && touched.sample ? <p className="text-red-300 " >{errors.sample}</p> : null}
                        </div>
                    </div>
                    <div className="py-2" >
                        <label>Beat Genre</label>
                        <div className="flex flex-col text-gray:400 space-y-8 pt-4">
                            <SearchBar ph="Search Genre" />
                            <div className="flex flex-col space-y-8 lg:flex-row" >
                                {
                                    genres.map(e => (
                                        <TileSelectable title={e.genre} key={e._id} s handler={setFieldValue} selector="genreId" data={e._id} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="py-2" >
                        <label>Beat Artist</label>
                        <div className="flex flex-col text-gray:400 space-y-8 pt-4">
                            <SearchBar ph="Search Artist" />
                            <div className="flex flex-col space-y-8 lg:flex-row" >
                                {
                                    artists.map(e => (
                                        <TileSelectable title={e.name} key={e._id} s handler={setFieldValue} selector="artistId" data={e._id} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-4" >
                        <Button color="a" handleClick={(e) => handleSubmit(e)} >Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BeatForm;