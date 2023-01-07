import play from '../../assets/play.png'
import PillButton from '../pill-button/pill-button.component';

const OrderItem = ({ item }) => {
    return (
        <div className="p-4 text-white flex justify-between bg-backdropDark rounded-lg rippleBeat" >
            <div className="flex space-x-8 items-center">
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
                <div role={"button"} className="ripple">
                    <PillButton color={"p"} >
                        <svg viewBox="0 0 24 24" width={"25"} height={"25"} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5V20m0 0l3-3m-3 3l-3-3M8 7.036a3.484 3.484 0 011.975.99M17.5 14c1.519 0 2.5-1.231 2.5-2.75 0-1.265-.854-2.33-2.016-2.65A5 5 0 008.37 7.108a3.5 3.5 0 00-1.87 6.746" /> </g></svg>
                    </PillButton>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;