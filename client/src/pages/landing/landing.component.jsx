import images from '../../utils/image-links'

//Module Imports
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { taggedBeats, taggedPlaylist } from '../../api/tag.js'
import { slickConfig } from '../../utils/slick.config';

//Component Imports
import CardList from '../../components/card-list/card-list.component';
import PillButton from '../../components/pill-button/pill-button.component';
import CardSkeleton from '../../components/skeletons/card-skeleton/card-skeleton.component'
import Slider from "react-slick";
import { sendQuery } from '../../api/contact';
import ContactForm from '../../components/contact-form/contact-form.component';


const Landing = () => {
    const [trendingPlaylist, setTrendingPlaylist] = useState([])
    const [featuredBeats, setFeaturedBeats] = useState([])
    const [trendingBeats, setTrendingBeats] = useState([])
    const [loading, setLoading] = useState(true)
    const [contactData, setContactData] = useState({
        name: "",
        from: "",
        message: ""
    })

    useEffect(() => {
        //get featured beats
        taggedBeats("featured").then(resp => setFeaturedBeats(resp.data))
        taggedBeats("trending").then(resp => setTrendingBeats(resp.data))
        taggedPlaylist("featured").then(resp => {
            setTrendingPlaylist(resp.data)
            setLoading(!loading)
        })
    }, [])

    const navigate = useNavigate()
    return (
        <div className="" >
            {/* HERO */}
            <div className="bg-center bg-cover w-full lg:min-h-[1080px] min-h-[850px] flex flex-col lg:flex-row justify-around items-center" style={{ backgroundImage: `url(${images.banner})` }} >
                <div className='bg-backdrop lg:bg-transparent p-8 text-white' >
                    <h1 className='lg:text-8xl text-6xl uppercase font-Kizard' >Kulture </h1>
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
                            <CardList data={featuredBeats} artist heading={"Featured Beats"} />
                            <CardList data={trendingPlaylist} heading={"Trending Playlist"} />
                            <CardList data={trendingBeats} artist heading={"Trending Beats"} />
                        </>
                    )
                }
                {/* <CardList heading={"Trending Playlists"} /> */}
            </div>

            {/* SECTION-2 Contact Us */}
            <div id="contact" className='bg-center bg-cover min-h-[930px] pt-4 flex flex-col lg:flex-row items-center justify-around' style={{ backgroundImage: `url(${images.contactBG})` }} >
                <ContactForm />
                <div className='w-[2px] h-96 bg-white hidden lg:block' >
                </div>
                <div>
                    <div className="text-xl p-8 rounded flex flex-col space-y-8 justify-center mb-20 text-white bg-backdrop" >
                        <h1 className='text-6xl text-white uppercase font-Kizard' >Get in touch</h1>
                        <div className='flex items-center space-x-4' >
                            <svg viewBox="0 0 24 24" width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z" fill="#ffffff" /> </g></svg>
                            <span>kulturegotbeats@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION-3 YT Channel */}
            <div className='bg-cover bg-center flex justify-center items-center min-h-[940px]' style={{ backgroundImage: `url(${images.ytBG})` }} >
                <div className='mx-auto flex lg:flex-row flex-col p-8 justify-center items-center bg-backdropDark' >
                    <a href='https://youtube.com/@Kulturegotbeats' target='_blank' className="w-56 p-8 min-h-[10rem] cursor-pointer hover:scale-105 rounded-md overflow-hidden flex flex-col justify-center" >
                        <img loading='lazy' src={images.ytChannel} className="rounded-full" alt="" height="250" width="250" />
                        <div className='flex flex-col justify-center items-center text-white ' >
                            <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap '>
                                Prod by KULTURE
                            </h2>
                            <img loading='lazy' src={"https://www.dtl.coventry.domains/wp-content/uploads/2020/07/YouTube-Logo-1024x1024.png"} width="90" height="90" alt="" />
                        </div>
                    </a>
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