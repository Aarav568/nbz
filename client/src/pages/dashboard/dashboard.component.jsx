import Tile from "../../components/tiles/tiles.component";
import images from "../../utils/image-links";

const Dashboard = () => {

    const TILES = [
        {
            title: "Create Genre",
            link: "/create/genre"
        },
        {
            title: "Create Artist",
            link: "/create/artist"
        },
        {
            title: "Create Beat",
            link: "/create/beat"
        },
        {
            title: "Create Playlist",
            link: "/create/playlist"
        },
        {
            title: "Set Featured",
            link: "/create/featured"
        },
    ]
    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                <div className='px-4 py-48 flex space-x-12 items-center' >
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Dashboard</h1>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col text-gray:400 space-y-8 pt-4" >
                {
                    TILES.map((e, i) => (
                        <Tile title={`${i+1}. ${e.title}`} key={e.title + i} link={e.link} />
                    ))
                }
            </div>
        </div>
    );
}

export default Dashboard;