import cartBG from '../../assets/cartbg.png'
const CartPage = () => {
    return (
        <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${cartBG})` }} >
            <div className='p-48 flex flex-col space-y-4' >
                <h1 className='text-8xl text-white uppercase font-Kizard' >Your Cart</h1>
            </div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
            </div>
        </div>
    );
}

export default CartPage;