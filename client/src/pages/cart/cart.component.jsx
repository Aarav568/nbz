import cartBG from '../../assets/cartbg.png'
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
const CartPage = () => {
    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${cartBG})` }} >
                <div className='p-48 pb-32 flex flex-col space-y-4' >
                    <h1 className='text-8xl text-white uppercase font-Kizard' >Your Cart</h1>
                </div>
            </div>
            <div className='mx-auto p-16 flex-col flex text-white' >
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className='mx-auto p-16 pb-4 justify-end flex text-white' >
                <h1 className="text-4xl">Total: 1200 <span>₹</span></h1>
            </div>
            <div className='mx-auto px-16 mb-16 justify-end flex text-white' >
                <Button color={"p"} >Checkout</Button>
            </div>
        </div>
    );
}
export default CartPage;