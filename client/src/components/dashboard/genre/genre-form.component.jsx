import { useEffect, useState } from "react";
import { createGenre, getGenres } from "../../../api/genres";
import images from "../../../utils/image-links";
import Button from "../../button/button.component";
import SearchBar from "../../searchbar/searchbar.component";
import Tile from "../../tiles/tiles.component";
const GenreForm = () => {
    const [genreName, setGenreName] = useState("")
    const [genres, setGenres] = useState([])

    useEffect(() => {
        getGenres(5).then(resp => setGenres(resp.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        createGenre(genreName)
    }

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
                                <Tile title={e.genre} key={e._id} s />
                            ))
                        }
                    </div>
                </div>
                <h2 className="text-white text-4xl">Create Genre</h2>
                <form onSubmit={handleSubmit} className="bg-p max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg" >
                    <div>
                        <label className="flex flex-col text-gray:400 py-2">Genre Name</label>
                        <input onChange={(e) => setGenreName(e.target.value)} value={genreName} placeholder="Genre" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
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