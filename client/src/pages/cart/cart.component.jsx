import cartBG from '../../assets/cartbg.png'
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import PayPal from '../../components/paypal/paypal.component';

const CartPage = () => {
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const [modal, setModal] = useState(false)
    return (
        <div>
            {/* MODAL */}
            {
                modal ? (
                    <div className="h-full w-full flex justify-center items-center bg-backdropDark fixed" style={{ zIndex: 2 }} >
                        <div className="bg-offWhite rounded p-8 w-3/4"  >
                            <div>
                                <p>Cart</p>
                                <h2 className='text-4xl font-bold'>Checkout</h2>
                                <PayPal />
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${cartBG})` }} >
                <div className='p-48 pb-32 flex flex-col space-y-4' >
                    <h1 className='text-8xl text-white uppercase font-Kizard' >Your Cart</h1>
                </div>
            </div>
            <div className='mx-auto p-16 flex-col flex text-white' >
                {
                    items.map(e => (
                        <CartItem item={e} key={e.beat._id} />
                    ))
                }
            </div>
            {
                items.length == 0 ? (
                    <div className='flex flex-col p-36 pt-0 space-y-8' >
                        <h2 className='text-white text-4xl font-bold'>Cart is Empty!</h2>
                    </div>
                ) : (
                    <div>
                        <div className='mx-auto p-16 pb-4 justify-end flex text-white' >
                            <h1 className="text-4xl">Total: {total} <span>$</span></h1>
                        </div>
                        <div className='mx-auto px-16 mb-16 justify-end flex text-white' >
                            <Button color={"p"} handleClick={() => setModal(!modal)} >Checkout</Button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}
export default CartPage;