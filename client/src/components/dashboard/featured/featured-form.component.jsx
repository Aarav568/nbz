import { useEffect, useState } from "react";
import { createGenre, getGenres } from "../../../api/genres";
import { searchGenre } from "../../../api/search";
import images from "../../../utils/image-links";
import Button from "../../button/button.component";
import SearchBar from "../../searchbar/searchbar.component";
import Tile from "../../tiles/tiles.component";
import genreSchema from "../../../utils/validation_schemas/genre.schema";
import { useFormik } from "formik"
import { taggedBeats } from "../../../api/tag";
import CardList from '../../../components/card-list/card-list.component';
import ArtistCard from "../../artist-card/artist-card.component";
import { getArtists } from "../../../api/artists";
import PillButton from "../../../components/pill-button/pill-button.component";
import { setArtistFeatured } from "../../../api/artists";
import { removeArtistFeatured } from "../../../api/artists";
import { getAllBeats } from "../../../api/beats";
import { getAllGenres } from "../../../api/genres";

const FeaturedForm = () => {
    const [featuredBeat, setFeaturedBeat] = useState([])
    const [featuredArtists, setFeaturedArtists] = useState([])
    const [artists, setArtists] = useState([])
    const [beats, setBeats] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalHidden, setModalHidden] = useState(true)
    const [modalData, setModalData] = useState(true)
    const [formAlert, setFormAlert] = useState(null)

    useEffect(() => {
        getAllGenres(5).then(resp => setArtists(resp.data))
        getAllBeats(5).then(resp => setBeats(resp.data))

        taggedBeats("featured").then(resp => {
            setFeaturedArtists(resp.data)
            setLoading(false)
        })
        // taggedPlaylist("featured").then(resp => {
        //     setFeaturedPlaylists(resp.data)
        //     setLoading(false)
        // })
    }, [])

    return (
        <>
            {
                modalHidden ? null : (
                    <div className="h-full w-full flex justify-center items-center bg-backdropDark fixed" style={{ zIndex: 2 }} >
                        <div className="bg-offWhite rounded lg:p-16 p-2 w-1/3 flex flex-col space-y-8"  >
                            <div role={"button"} onClick={() => setModalHidden(!modalHidden)} className="flex self-end" >
                                <svg viewBox="0 0 1024 1024" height={25} width={25} xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></g></svg>
                            </div>
                            <div>
                                <img src={modalData.img} alt="" height="250" width="250" className='rounded-full' />
                                <h2 className='text-4xl font-bold'>{modalData.name}</h2>
                            </div>
                            <div className="flex flex-col space-y-6" >
                                {
                                    modalData.tags[0] === "featured" ?
                                        <PillButton color={"a"} clickHandler={() => { removeArtistFeatured(modalData._id) }} >
                                            Remove Featured
                                        </PillButton> :
                                        <PillButton color={"p"} clickHandler={() => setArtistFeatured(modalData._id)} >
                                            Set Featured
                                        </PillButton>
                                }
                            </div>
                        </div>
                    </div>
                )
            }

            <div>
                <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                    <div className='px-4 py-48 flex space-x-12 items-center' >
                        <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Set Featured</h1>
                    </div>
                </div>
                {/* Artists */}
                <div>
                    <div className='mx-auto p-8 flex flex-col space-y-8' >
                        <h2 className="text-white text-4xl">Featured Artists</h2>
                        <SearchBar />
                        <div className="flex flex-col lg:flex-row space-x-8" >
                            {
                                featuredArtists.map(e => (
                                    <div key={e._id}  >
                                        <div className='mx-auto w-full flex justify-center' >
                                            <button className="text-text-grey w-56 min-h-[10rem] shadow-lg rounded-md overflow-hidden  hover:bg-backdrop p-2 rippleCard" onClick={() => setModalHidden(!modalHidden)} >
                                                <img src={e.img} alt="" height="250" width="250" className='rounded-full' />
                                                <div className='p-5 flex-col gap-3 flex-col space-y-2 text-white' >
                                                    <span className='px-3 py-1 rounded-full text-xs bg-p'>{e.tags[0]}</span>
                                                    <div>
                                                        <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
                                                            {e.name}
                                                        </h2>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mx-auto p-8 flex flex-col space-y-8' >
                        <h2 className="text-white text-4xl">Set Featured Artists</h2>
                        <SearchBar />
                        <div className="flex flex-col lg:flex-row space-x-8" >
                            {
                                artists.map(e => (
                                    <div key={e._id}  >
                                        <div className='mx-auto w-full flex justify-center' >
                                            <button className="text-text-grey w-56 min-h-[10rem] shadow-lg rounded-md overflow-hidden  hover:bg-backdrop p-2 rippleCard"
                                                onClick={() => {
                                                    setModalHidden(!modalHidden)
                                                    setModalData(e)
                                                }}
                                            >
                                                <img src={e.img} alt="" height="250" width="250" className='rounded-full' />
                                                <div className='p-5 flex-col gap-3 flex-col space-y-2 text-white' >
                                                    {
                                                        (e.tags.length > 0) ? (
                                                            <span className='px-3 py-1 rounded-full text-xs bg-p'>{e.tags[0]}</span>
                                                        ) : null
                                                    }
                                                    <div>
                                                        <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
                                                            {e.name}
                                                        </h2>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Plalists */}
                {/* <div>
                <div className='mx-auto p-8 flex flex-col space-y-8' >
                    <h2 className="text-white text-4xl">Featured Playlists</h2>
                    <SearchBar />
                    <div className="flex flex-col lg:flex-row space-x-8" >
                        {
                            featuredPlaylists.map(e => (
                                <div className="" >
                                    <ArtistCard {...e} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mx-auto p-8 flex flex-col space-y-8' >
                    <h2 className="text-white text-4xl">Set Featured Playlists</h2>
                    <SearchBar />
                    <div className="flex flex-col lg:flex-row space-x-8" >
                        {
                            playlists.map(e => (
                                <div className="" >
                                    <ArtistCard {...e} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div> */}
            </div >
        </>
    );
}

export default FeaturedForm;