import BeatsList from "../../components/beats-list/beats-list.component";
import PillButton from "../../components/pill-button/pill-button.component";
import SearchBar from "../../components/searchbar/searchbar.component";
import ArtistCard from "../../components/artist-card/artist-card.component";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getBeats } from "../../api/beats";
import { getArtist } from "../../api/artists";
import { getPlaylist } from "../../api/playlist";
import PlaylistCard from "../../components/playlist-card/playlist-card.component";
import cartBG from '../../assets/cartbg.png'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import { hideModal } from "../../redux/modal/modal.actions";
import BeatsSkeleton from "../../components/skeletons/beats-skeleton/beats-skeleton.component";
import CardSkeleton from "../../components/skeletons/card-skeleton/card-skeleton.component";
import BackButton from "../../components/backbutton/back-button.component";
const BeatsPage = () => {
    // const history = useHistory()
    const dispatch = useDispatch()
    const modalHidden = useSelector(state => state.modal.hidden)
    const modalBeat = useSelector(state => state.modal.beat)
    const navigate = useNavigate()
    const { route, id } = useParams()
    const [beats, setBeats] = useState([])
    const [artist, setArtist] = useState({})
    const [playlist, setPlaylist] = useState({})
    const [purchaseType, setPurchaseType] = useState("LEASE")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getBeats(route, id).then(resp => {
            setBeats(resp.data)
            setLoading(!loading)
        })
        if (route === "artist")
            getArtist(id).then(resp => setArtist(resp.data))
        else
            getPlaylist(id).then(resp => setPlaylist(resp.data))
    }, [])
    return (
        <div>
            {
                modalHidden ? null : (
                    <div className="h-full w-full flex justify-center items-center bg-backdropDark fixed" style={{ zIndex: 2 }} >
                        <div className="bg-offWhite rounded p-16 w-3/4 flex flex-col space-y-8"  >
                            <div>
                                <p>Beat</p>
                                <h2 className='text-4xl font-bold'>{modalBeat.name}</h2>
                            </div>
                            <div className="flex flex-col space-y-6" >
                                <h2 className="text-lg" >Purchase Type</h2>
                                <select name="purchaseType" className="bg-white border text-black p-2 rounded" onChange={e => setPurchaseType(e.target.value)} >
                                    <option value="LEASE">LEASE - 15$</option>
                                    <option value="BUY">BUY - 20$</option>
                                    <option value="STEM">STEM - 35$</option>
                                </select>
                                <h2 className="text-lg" >Select the type of license you want to get for the purchase, <br /> for more info go to <span className="text-blue font-bold underline" > <button onClick={() => navigate("/signup")}>Pricing Page</button> </span> </h2>
                                <PillButton color={"p"} clickHandler={() => {
                                    dispatch(addToCart({ beat: modalBeat, purchaseType }))
                                    dispatch(hideModal())
                                }} >
                                    Add to Cart
                                    <svg className='inline-block ml-2' width="25px" height="25px" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="0.00048000000000000007"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <polygon points="8.649,10.27 14.857,28.896 9.923,40 20,40 32,40 40,40 40,36 16.078,36 18.3,31 38.441,31 44.775,12 13.441,12 11.441,6 4,6 4,10 8.333,10 "></polygon> <circle cx="20" cy="42" r="2"></circle> <circle cx="32" cy="42" r="2"></circle> </g> </g></svg>
                                </PillButton>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* PAGE */}
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${cartBG})` }} >
                <div className='p-48  pb-32 flex flex-col space-y-8' >
                    <div className='flex justify-center items-center space-x-8' >
                        <BackButton />
                        <SearchBar />
                        <div>
                            <PillButton color={"p"} >Search</PillButton>
                        </div>
                    </div>
                    <div className='mx-auto flex flex-col space-y-8' >
                        <div className="flex space-x-8" >
                            {
                                loading ? (
                                    <CardSkeleton />
                                ) : (
                                    route === "artist" ? (
                                        <ArtistCard img={artist.img} title={artist.name} s />
                                    ) : (
                                        <PlaylistCard img={playlist.img} title={playlist.name} s />
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col p-36 pt-12 space-y-8' >
                <h2 className='text-white text-4xl font-bold'>{artist.name || playlist.name}</h2>
                {
                    loading ? (
                        <BeatsSkeleton count={8} />
                    ) :
                        <BeatsList beats={beats} />
                }
            </div>

        </div>

    );
}

export default BeatsPage;