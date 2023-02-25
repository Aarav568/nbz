import images from '../../utils/image-links'

//Module Imports
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { taggedArtist, taggedPlaylist } from '../../api/tag'
import { slickConfig } from '../../utils/slick.config';

//Component Imports
import CardList from '../../components/card-list/card-list.component';
import PillButton from '../../components/pill-button/pill-button.component';
import CardSkeleton from '../../components/skeletons/card-skeleton/card-skeleton.component'
import Slider from "react-slick";


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
            <div className="bg-center bg-cover w-full lg:min-h-[1080px] min-h-[850px] flex flex-col lg:flex-row justify-around items-center" style={{ backgroundImage: `url(${images.banner})` }} >
                <div className='bg-backdrop lg:bg-transparent p-8 text-white' >
                    <h1 className='lg:text-8xl text-6xl uppercase font-Kizard' >Nashak <br /> Beatz</h1>
                    <p className='uppercase' >Hottest Drops</p>
                </div>
                <div className='scale-150' >
                    <PillButton clickHandler={() => navigate("/explore")} color={"a"} >Explore Now</PillButton>
                </div>
            </div>
            {/* SECTION-1 Cards */}
            <div className='mx-auto lg:p-24 pt-4 flex flex-col space-y-16' >
                {
                    loading ? (
                        <>
                            {
                                <>
                                    <Slider {...slickConfig} >
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                    </Slider>
                                    <Slider {...{ ...slickConfig, speed: 800 }} >
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                        <CardSkeleton />
                                    </Slider>
                                </>
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
            <div id="contact" className='bg-center bg-cover min-h-[930px] pt-4 flex flex-col lg:flex-row items-center justify-around' style={{ backgroundImage: `url(${images.contactBG})` }} >
                <div className='flex flex-col space-y-8 bg-backdrop p-8 rounded ' >
                    <div>
                        <h1 className='text-6xl text-white uppercase font-Kizard' >Need More ... </h1>
                        <p className='text-white uppercase' >Get yourself custom beats</p>
                    </div>
                    <div>
                        <h1 className='text-4xl text-white uppercase font-Kizard' >Write to Us</h1>
                        <div className="flex flex-col justify-center" >
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
                                <PillButton color="p">Send</PillButton>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='w-[2px] h-96 bg-white hidden lg:block' >
                </div>
                <div>
                    <div className="text-xl p-8 rounded flex flex-col space-y-8 justify-center mb-20 text-white bg-backdrop" >
                        <h1 className='text-6xl text-white uppercase font-Kizard' >Get in touch</h1>
                        <div className='flex items-center space-x-4' >
                            <svg fill="#ffffff" viewBox="0 0 56 56" width={50} height={50} xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.8827 33.8360 C 16.0702 28.0469 12.3671 20.6640 16.7499 16.2813 C 17.0077 16.0234 17.2890 15.7656 17.5468 15.5078 C 18.8827 14.2422 20.1718 14.3125 21.3202 15.9297 L 24.3671 20.2656 C 25.3983 21.7656 25.1405 22.6094 24.0390 23.7813 L 23.0780 24.8360 C 22.7265 25.1640 22.8671 25.6094 23.0312 25.8906 C 23.4765 26.7344 24.7421 28.2344 26.1014 29.5938 C 27.5077 31.0000 28.9374 32.1953 29.8280 32.6875 C 30.1562 32.875 30.6249 32.9219 30.9296 32.6406 L 31.9374 31.6797 C 33.0624 30.5781 33.9765 30.2969 35.4296 31.3281 C 37.4452 32.7578 38.6640 33.6016 39.8593 34.4219 C 41.3358 35.5000 41.6874 36.8360 40.1874 38.1953 C 39.9296 38.4531 39.6952 38.7344 39.4374 38.9922 C 35.0546 43.3516 27.6952 39.6484 21.8827 33.8360 Z"></path></g></svg>
                            <span> +91-9667676764</span>
                        </div>
                        <div className='flex items-center space-x-4' >
                            <svg viewBox="0 0 24 24" width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z" fill="#ffffff" /> </g></svg>
                            <span>nashakbeats@nashak.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION-3 YT Channel */}
            <div className='bg-cover bg-center flex justify-center items-center min-h-[940px]' style={{ backgroundImage: `url(${images.ytBG})` }} >
                <div className='mx-auto flex lg:flex-row flex-col p-8 justify-center items-center bg-backdropDark' >
                    <div className="w-56 p-8 min-h-[10rem] rounded-md overflow-hidden p-2 flex flex-col justify-center" >
                        <img loading='lazy' src={images.ytChannel} className="rounded-full" alt="" height="250" width="250" />
                        <div className='flex flex-col justify-center items-center text-white ' >
                            <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap '>
                                Nashak Beatz
                            </h2>
                            <img loading='lazy' src={"https://www.dtl.coventry.domains/wp-content/uploads/2020/07/YouTube-Logo-1024x1024.png"} width="90" height="90" alt="" />
                        </div>
                    </div>
                    <div className='bg-backdrop' >
                        <p className='text-white text-4xl p-8 font-Raleway'> <span>CHECK OUT MY </span><br /> <span className=' font-bold'> FREE FOR PROFIT</span><br />YOUTUBE CHANNEL</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
        </div >
    );
}

export default Landing;