import images from "../../utils/image-links";

//COMPONENT IMPORTS 
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import PayPal from '../../components/paypal/paypal.component';
import BackButton from '../../components/backbutton/back-button.component';

//MODULE IMPORTS
import { useState } from 'react';
import { useSelector } from 'react-redux'


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
                            <div className="flex justify-between" >
                                <div>
                                    <p>Cart</p>
                                    <h2 className='text-4xl font-bold'>Checkout</h2>
                                </div>
                                <div role={"button"} onClick={e => setModal(!modal)} >
                                    <svg viewBox="0 0 1024 1024" height={25} width={25} xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></g></svg>
                                </div>
                            </div>
                            <PayPal />
                        </div>
                    </div>
                ) : null
            }

            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                <div className='px-4 py-48 flex space-x-12 items-center' >
                    {/* <div >
                        <BackButton />
                    </div> */}
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Your Cart</h1>
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