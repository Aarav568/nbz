import play from '../../assets/play.png'
import cart from '../../assets/cart.png'
import './beat-item.styles.css'
const BeatItem = ({ name }) => {
    return (
        <div role="button" className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg hover:bg-backdropDark rippleBeat" >
            <div className="flex space-x-8 items-center">
                <div>
                    {name}
                </div>
            </div>
            <div className="flex space-x-8 space-x-8 items-center">
                <div onClick={() => { }} role="button" >
                    <img src={play} height="50" width="50" className="ripple" alt="" />
                </div>
                <div onClick={() => { }} role="button" className="ripple">
                    <img src={cart} height="50" width="50" alt="" />
                </div>
            </div>
        </div>
    );
}

export default BeatItem;