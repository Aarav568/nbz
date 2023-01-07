import exploreHero from '../../assets/exploreHero.png'
import CardList from '../../components/card-list/card-list.component';
import PillButton from '../../components/pill-button/pill-button.component';
import SearchBar from '../../components/searchbar/searchbar.component';
import { useEffect, useState } from 'react'
import { taggedArtist, taggedPlaylist } from '../../api/tag'
import Slider from "react-slick";
import CardSkeleton from '../../components/skeletons/card-skeleton/card-skeleton.component';
import { slickConfig } from '../../slick.config';
import BackButton from '../../components/backbutton/back-button.component';

const Explore = () => {

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

    return (
        <>
            <div className='flex flex-col space-y-8' >
                <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" style={{ backgroundImage: `url(${exploreHero})` }} >
                    <div className='lex p-16 justify-center items-start' >
                        <BackButton />
                    </div>
                    <div className='p-48 flex flex-col space-y-4' >
                        <h1 className='text-8xl text-white uppercase font-Kizard' >We got what you need</h1>
                        <SearchBar />
                        <div>
                            <PillButton color={"p"}>Search</PillButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto p-24 flex flex-col space-y-8' >
                {
                    loading ? (
                        <>
                            {
                                [...Array(3)].map((e1, i1) => (
                                    <Slider {...slickConfig} key={i1 + 100} >
                                        {
                                            [...Array(6)].map((e2, i1) => (
                                                <CardSkeleton key={i1 + 100} />
                                            ))
                                        }
                                    </Slider>
                                ))
                            }
                        </>
                    ) : (
                        <>
                            <CardList artist heading={"Featured Artists"} data={featuredArtists} />
                            <CardList heading={"Featured Playlist"} data={featuredPlaylists} />
                            <CardList artist heading={"Featured Artists"} data={featuredArtists} />
                        </>
                    )
                }
            </div>
        </>
    );
}

export default Explore;