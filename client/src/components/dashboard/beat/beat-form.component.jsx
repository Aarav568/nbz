import { useState } from "react";
import images from "../../../utils/image-links";
import Button from "../../button/button.component";
import SearchBar from "../../searchbar/searchbar.component";
import Tile from "../../tiles/tiles.component";
import { getGenres } from "../../../api/genres";
import { createArtist, getArtists } from "../../../api/artists";
import { createBeat } from "../../../api/beats";

const BeatForm = () => {
    const [genres, setGenres] = useState([])
    const [artists, setArtists] = useState([])
    const [genreId, setGenreId] = useState("")
    const [artistId, setArtistId] = useState("")

    const [mp3, setMp3] = useState(null)
    const [wav, setWav] = useState(null)
    const [stem, setStem] = useState(null)
    const [sample, setSample] = useState(null)

    const [formData, setFormData] = useState({
        name: "",
        artistId: "",
        genreId: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("mp3", mp3)
        form.append("wav", wav)
        form.append("stem", stem)
        form.append("sample", sample)
        form.append("name", formData.name)
        form.append("artistId", artistId)
        form.append("genreId", genreId)
        createBeat(form).then(resp => console.log(resp))
    }

    const handleFileChange = (e) => {
        setFormData({ ...formData, files: [...formData.files, e.target.files[0]] })
    }

    useState(() => {
        getGenres(2).then(resp => setGenres(resp.data))
        getArtists(2).then(resp => setArtists(resp.data))
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
                    <div className="max-w-[400px]">
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat Name</label>
                            <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} placeholder="Name" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat MP3</label>
                            <input type="file" onChange={e => setMp3(e.target.files[0])} className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat WAV</label>
                            <input type="file" onChange={e => setWav(e.target.files[0])} placeholder="Genre" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat STEM</label>
                            <input type="file" onChange={e => setStem(e.target.files[0])} placeholder="Genre" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Beat Sample</label>
                            <input type="file" onChange={e => setSample(e.target.files[0])} placeholder="Genre" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                        </div>
                    </div>
                    <div className="py-2" >
                        <label>Beat Genre</label>
                        <div className="flex flex-col text-gray:400 space-y-8 pt-4">
                            <SearchBar ph="Search Genre" />
                            <div className="flex flex-col space-y-8 lg:flex-row" >
                                {
                                    genres.map(e => (
                                        <Tile title={e.genre} key={e._id} s handler={setGenreId} data={e._id} />
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
                                        <Tile title={e.name} key={e._id} s handler={setArtistId} data={e._id} />
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