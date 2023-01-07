import ArtistCard from '../artist-card/artist-card.component';
import PlaylistCard from '../playlist-card/playlist-card.component';
import Slider from "react-slick";
import { slickConfig } from '../../slick.config';

const CardList = ({ artist, heading, data, loading }) => {
    return (
        <div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <h2 className='text-white text-lg' >{heading}</h2>
                {
                    artist ? (
                        <>
                            <Slider {...slickConfig}>
                                {
                                    data?.map(e => (
                                        <ArtistCard img={e.img} title={e.name} key={e._id} id={e._id} />
                                    ))
                                }
                            </Slider>
                        </>
                    ) : (
                        <>
                            <Slider {...slickConfig}>
                                {
                                    data?.map(e => (
                                        <PlaylistCard img={e.img} title={e.name} key={e._id} id={e._id} />
                                    ))
                                }
                            </Slider>
                        </>
                    )
                }
            </div >
        </div >
    );
}

export default CardList;