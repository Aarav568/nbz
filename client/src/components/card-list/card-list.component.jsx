import cardImg from '../../assets/card1.png'
import ArtistCard from '../artist-card/artist-card.component';
import PlaylistCard from '../playlist-card/playlist-card.component';
import Slider from "react-slick";
import LeftArrow from '../../assets/arrow-left.png'
import RightArrow from '../../assets/arrow-right.png'

const CardList = ({ artist, heading, data }) => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft className="hover:scale-150" />,
        nextArrow: <SlickArrowRight className="hover:scale-150" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <h2 className='text-white text-lg' >{heading}</h2>
                {
                    artist ? (
                        <>
                            <Slider {...settings}>
                                {
                                    data?.map(e => (
                                        <ArtistCard img={e.img} title={e.name} key={e._id} id={e._id} />
                                    ))
                                }
                            </Slider>
                        </>
                    ) : (
                        <>
                            <Slider {...settings}>
                                {
                                    data?.map(e => (
                                        <PlaylistCard img={e.img} title={e.name} key={e._id} id={e._id}/>
                                    ))
                                }
                            </Slider>
                        </>
                    )
                }
            </div>
        </div >
    );
}

export default CardList;