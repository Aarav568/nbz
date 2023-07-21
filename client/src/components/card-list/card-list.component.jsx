import GenreCard from '../genre-card/genre-card.component';
import PlaylistCard from '../playlist-card/playlist-card.component';
import Slider from "react-slick";
import { slickConfig } from '../../utils/slick.config';

const CardList = ({ genre, heading, data, loading }) => {
    return (
        <div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <h2 className='text-white text-lg' >{heading}</h2>
                {
                    genre ? (
                        <>
                            <Slider {...slickConfig}>
                                {
                                    data?.map(e =>
                                        <GenreCard title={e.genre} key={e._id} id={e._id} />
                                    )
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