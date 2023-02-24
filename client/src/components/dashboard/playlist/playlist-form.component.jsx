import { useState } from "react";
import images from "../../../utils/image-links";
import Button from "../../button/button.component";
import SearchBar from "../../searchbar/searchbar.component";
import Tile from "../../tiles/tiles.component";

const PlaylistForm = () => {
    const handleSubmit = () => { }
    const [artistName, setArtistName] = useState("")
    const [img, setImg] = useState("")
    const [artistGenre, setArtistGenres] = useState("")
    const [genres, setGenres] = useState("")
    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                <div className='px-4 py-48 flex space-x-12 items-center' >
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Create Playlist</h1>
                </div>
            </div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <div className="flex flex-col space-y-8" >
                    <h2 className="text-white text-4xl">Existing Playlists</h2>
                    <SearchBar ph="Search Playlist" />

                    <div className="flex flex-col text-gray:400 space-y-8 pt-4">
                        <Tile title={"Playlist"} />
                    </div>
                </div>
                <h2 className="text-white text-4xl">Create Playlist</h2>
                <form onSubmit={handleSubmit} className="bg-p w-full mx-auto p-8 px-8 rounded-lg" >
                    <div className="max-w-[400px]">
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Playlist Name</label>
                            <input onChange={(e) => setArtistName(e.target.value)} value={artistName} placeholder="Name" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                        </div>
                        <div>
                            <label className="flex flex-col text-gray:400 py-2">Playlist Image</label>
                            <input type="file" onChange={(e) => setArtistName(e.target.value)} value={artistName} placeholder="Genre" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                        </div>
                    </div>
                    <div className="py-2" >
                        <label>Beats</label>
                        <div className="flex flex-col text-gray:400 space-y-8 pt-4">
                            <SearchBar ph="Search Beats" />
                            <div className="flex flex-col space-y-8 lg:flex-row" >
                                <Tile title={"gebnre"} s={true} onClick={() => console.log("CLICKED")} />
                                <Tile title={"gebnre"} />
                                <Tile title={"gebnre"} />
                            </div>
                        </div>
                    </div>
                    <div className="py-2" >
                        <label>Selected Beats</label>
                        <div className="flex flex-col text-gray:400 space-y-8 pt-4">
                            <h1>Beat</h1>
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

export default PlaylistForm;