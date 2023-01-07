import banner from '../../assets/banner.jpg'
import contactUs from '../../assets/contactUsBg.png'
import YTbg from '../../assets/YTbg.png'
import YT from '../../assets/yt.png'
import CardList from '../../components/card-list/card-list.component';
import PillButton from '../../components/pill-button/pill-button.component';
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { taggedArtist, taggedPlaylist } from '../../api/tag'
import CardSkeleton from '../../components/skeletons/card-skeleton/card-skeleton.component'
import Slider from "react-slick";
import { slickConfig } from '../../slick.config';


const Landing = () => {
    const [featuredPlaylists, setFeaturedPlaylists] = useState([])
    const [featuredArtists, setFeaturedArtists] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        taggedArtist("featured").then(resp => setFeaturedArtists(resp.data))
        taggedPlaylist("featured").then(resp => {
            setFeaturedPlaylists(resp.data)
            setLoading(!loading)
        })
    }, [])

    const navigate = useNavigate()
    return (
        <div className="" >
            {/* HERO */}
            <div className="bg-center bg-cover w-full min-h-[1080px] flex justify-around items-center" style={{ backgroundImage: `url(${banner})` }} >
                <PillButton clickHandler={() => navigate("/explore")} color={"a"} >Explore Now</PillButton>
                <div >
                    <h1 className='text-8xl text-white uppercase font-Kizard' >Nashak <br /> Beatz</h1>
                    <p className='text-white uppercase' >Hottest Drops</p>
                </div>
            </div>

            {/* SECTION-1 Cards */}
            <div className='mx-auto p-24 flex flex-col space-y-16' >
                {
                    loading ? (
                        <>
                            {
                                [...Array(2)].map((e, i) => (
                                    <Slider {...slickConfig} key={e} >
                                        {
                                            [...Array(6)].map((e, i) => (
                                                <CardSkeleton key={i + 100} />
                                            ))
                                        }
                                    </Slider>
                                ))
                            }
                        </>
                    ) : (
                        <>
                            <CardList data={featuredPlaylists} heading={"Featured Playlist"} />
                            <CardList data={featuredArtists} artist heading={"Featured Artists"} />
                        </>
                    )
                }
                {/* <CardList heading={"Trending Playlists"} /> */}
            </div>

            {/* SECTION-2 Contact Us */}
            <div id="contact" className='bg-center bg-cover min-h-[930px] flex items-center justify-around' style={{ backgroundImage: `url(${contactUs})` }} >
                <div className='flex flex-col space-y-8' >
                    <div>
                        <h1 className='text-6xl text-white uppercase font-Kizard' >Need More ... </h1>
                        <p className='text-white uppercase' >Get yourself custom beats</p>
                    </div>
                    <div>
                        <h1 className='text-4xl text-white uppercase font-Kizard' >Write to Us</h1>
                        <div className="flex flex-col justify-center mb-20" >
                            <form className="w-full mx-auto rounded-lg" >
                                <div>
                                    <input onChange={(e) => { }} placeholder="Enter Your Name" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" type="text" />
                                </div>
                                <div>
                                    <input onChange={(e) => { }} placeholder="Enter Email Address" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" type="email" />
                                </div>
                                <div>
                                    <input onChange={(e) => { }} min="10" max="10" placeholder="Enter Phone Number (optional)" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" type="text" />
                                </div>
                                <div>
                                    <textarea rows={4} placeholder='Write Your Message ...' className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" />
                                </div>
                                <PillButton color="a">Send</PillButton>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-2xl flex flex-col space-y-8 justify-center mb-20 text-white" >
                        <h1 className='text-6xl text-white uppercase font-Kizard' >Contact Us</h1>
                        <p>Mob No. +91 9667676764</p>
                        <p>Email: nashakbeats@nashak.com</p>
                    </div>
                </div>
            </div>

            {/* SECTION-3 YT Channel */}
            <div className='bg-cover bg-center flex justify-center items-center min-h-[940px]' style={{ backgroundImage: `url(${YTbg})` }} >
                <div className='mx-auto flex justify-center items-center' >
                    <div className='bg-backdropDark p-16 flex rounded-lg space-y-8 items-center'>
                        <div className="text-text-grey w-56 min-h-[10rem] rounded-md overflow-hidden p-4" >
                            <img loading='lazy' src={YT} className="rounded-full" alt="" height="250" width="250" />
                            <div className='p-5 flex-col gap-3 flex-col space-y-2 text-white' >
                                <div>
                                    <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap '>
                                        Nashak Beatz
                                    </h2>
                                    <img loading='lazy' src={"https://www.dtl.coventry.domains/wp-content/uploads/2020/07/YouTube-Logo-1024x1024.png"} width="90" height="90" alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='text-white text-4xl p-8 font-Raleway'> <span>CHECK OUT MY </span><br /> <span className=' font-bold'> FREE FOR PROFIT</span><br />YOUTUBE CHANNEL</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
        </div >
    );
}

export default Landing;