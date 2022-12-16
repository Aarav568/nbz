import play from '../../assets/play.png'
import cart from '../../assets/cart.png'

const BeatItem = () => {
    return (
        <div className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg" >
            <div className="flex space-x-8 items-center">
                <div>
                    Beat Name
                </div>
            </div>
            <div className="flex space-x-8 space-x-8 items-center">
                <div>
                    <img src={cart} height="50" width="50" alt="" />
                </div>
                <div>
                    <img src={play} height="50" width="50" alt="" />
                </div>
            </div>
        </div>
    );
}

export default BeatItem;