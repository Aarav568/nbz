import cartBG from '../../assets/cartbg.png'
import CartItem from '../../components/cart-item/cart-item.component';
const CartPage = () => {
    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${cartBG})` }} >
                <div className='p-48 flex flex-col space-y-4' >
                    <h1 className='text-8xl text-white uppercase font-Kizard' >Your Cart</h1>
                </div>
            </div>
            <div className='mx-auto p-16 flex flex-col space-y-8' >
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    );
}

export default CartPage;