import exploreHero from '../../assets/exploreHero.png'
import CardList from '../../components/card-list/card-list.component';
import Footer from '../../components/footer/footer.component';
import Navbar from '../../components/navbar/navbar.component';
import PillButton from '../../components/pill-button/pill-button.component';
import SearchBar from '../../components/searchbar/searchbar.component';

const Explore = () => {
    return (
        <div className='flex flex-col space-y-8' >
            <Navbar />
            <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" style={{ backgroundImage: `url(${exploreHero})` }} >
                <div className='p-48 flex flex-col space-y-4' >
                    <h1 className='text-8xl text-white uppercase font-Kizard' >We got what you need</h1>
                    <SearchBar />
                    <div>
                        <PillButton color={"p"} >Search</PillButton>
                    </div>
                </div>
            </div>
            <div className='flex flex-col' >
                <CardList artist heading={"Featured Artists"} />
                <CardList heading={"Featured Playlist"} />
                <CardList artist heading={"Featured Artists"} />
            </div>
        </div>
    );
}

export default Explore;