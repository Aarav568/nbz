import BeatsList from "../../components/beats-list/beats-list.component";
import PillButton from "../../components/pill-button/pill-button.component";
import SearchBar from "../../components/searchbar/searchbar.component";
import cardImg from '../../assets/card1.png'
import ArtistCard from "../../components/artist-card/artist-card.component";

const BeatsPage = () => {
    return (
        <div className='flex flex-col p-36 space-y-8' >
            <div className='flex justify-center space-x-8' >
                    <SearchBar />
                    <div>
                        <PillButton color={"p"} >Search</PillButton>
                    </div>
            </div>
            <div className='mx-auto flex flex-col space-y-8' >
                <div className="flex space-x-8" >
                    <ArtistCard img={cardImg} title={"Cherry Chill"} subtitle={"Viscinity of the cherry chill garden"} />
                    <div className="text-white p-8" >Title of the card is + description</div>
                </div>
            </div>
            <BeatsList />
        </div>
    );
}

export default BeatsPage;