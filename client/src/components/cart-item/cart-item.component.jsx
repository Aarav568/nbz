import play from '../../assets/play.png'
import cart from '../../assets/cart.png'

const CartItem = () => {
    return (
        <div className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg" >
            <div className="flex space-x-8 items-center">
                <div>
                    <img src={play} height="50" width="50" alt="" />
                </div>
                <div>
                    Beat Name
                </div>
            </div>
            <div className="flex space-x-8 items-center">
                <div>
                    <img src={cart} height="50" width="50" alt="" />
                </div>
                <div>
                    <select name="" id=""></select>
                </div>
                <div>
                    1700 <span>₹</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;