import play from '../../assets/play.png'

const CartItem = ({ item }) => {
    return (
        <div className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg rippleBeat" >
            <div className="flex space-x-8 items-center">
                <div role={"button"} className="ripple">
                    <img src={play} height="50" width="50" alt="" />
                </div>
                <div>
                    {item.beat.name}
                </div>
            </div>
            <div className="flex space-x-8 items-center">
                <div className='bg-offWhite font-Raleway text-text-grey p-2 rounded-full cursor-default text-sm' >
                    {item.purchaseType}
                </div>
                <div className='text-lg font-bold' >
                    {item.price}$
                </div>
                <div role={"button"}  >
                    <svg viewBox="0 0 64 64" height={"25"} width={"25"} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"><path d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10v40z" fill="#ff5a79" /><path fill="#ffffff" d="M50 21.2L42.8 14L32 24.8L21.2 14L14 21.2L24.8 32L14 42.8l7.2 7.2L32 39.2L42.8 50l7.2-7.2L39.2 32z" /></g></svg>
                </div>
            </div>
        </div>
    );
}

export default CartItem;