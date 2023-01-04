import play from '../../assets/play.png'
import cross from '../../assets/cross.png'
import { useState } from 'react'

const CartItem = () => {
    const [price, setPrice] = useState("15$") //DONT PUSH WIHTOUT TESTING THIS
    const changeHandler = (e) => {
        if (e === "BUY")
            setPrice("20$")
        else if (e === "LEASE")
            setPrice("15$")
        else if (e === "STEM")
            setPrice("35$")
    }
    return (
        <div className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg rippleBeat" >
            <div className="flex space-x-8 items-center">
                <div role={"button"} className="ripple">
                    <img src={play} height="50" width="50" alt="" />
                </div>
                <div>
                    Beat Name
                </div>
            </div>
            <div className="flex space-x-8 items-center ripple">
                <div>
                    <select name="purchaseType" onChange={e => changeHandler(e.target.value)} className="text-black p-2 rounded" >
                        <option value="LEASE">LEASE</option>
                        <option value="BUY">BUY</option>
                        <option value="STEM">STEM</option>
                    </select>
                </div>
                <div className='text-lg font-bold' >
                    {price}
                </div>
                <div>
                    <img src={cross} height="25" width="25" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CartItem;