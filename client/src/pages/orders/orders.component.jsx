import images from '../../utils/image-links';
import PillButton from "../../components/pill-button/pill-button.component";

//COMPONENT IMPORTS 
import BackButton from '../../components/backbutton/back-button.component';
//MODULE IMPORTS
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//APIs & Functions
import { getAllOrders } from "../../api/order";


const OrdersPage = () => {
    const [orders, setOrders] = useState([])
    const uid = useSelector(state => state.user.currentUser._id)
    useEffect(() => {
        getAllOrders(uid).then(resp => {
            setOrders(resp.data.orders)
        })
    }, [])
    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                <div className='px-4 py-48 flex space-x-12 items-center' >
                    {/* <div >
                        <BackButton />
                    </div> */}
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Your Orders</h1>
                </div>
            </div>
            <div className='mx-auto p-16 flex-col flex text-white' >
                <div className='flex flex-col p-36 pt-12 space-y-8' >
                    {
                        !orders ? (
                            <div className='flex flex-col pt-0 space-y-8' >
                                <h2 className='text-white text-4xl font-bold'>No Orders Yet!</h2>
                            </div>
                        ) : (
                            orders.map((e, i) => (
                                <div key={e._id} >
                                    <div role="button" className="p-4 text-white flex justify-between bg-backdrop rounded-lg rippleBeat" >
                                        <div className="flex space-x-8 items-center" >
                                            <div onClick={() => { }} role="button" className="ripple">
                                                <div>
                                                    <span>{i + 1}. </span>
                                                    Order Id: <span className="text-grey-400" >{e._id}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-8 items-center">
                                            <div onClick={() => { }} role="button" className="ripple">
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        e.order_items.map((j, i) => (
                                            <div key={e._id + i} className="px-8 py-4 bg-backdropDark" >
                                                <div role="button" className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg hover:bg-backdropDark rippleBeat" >
                                                    <div className="flex space-x-8 items-center" >
                                                        <div onClick={() => { }} role="button" className="ripple">
                                                            <div>
                                                                Beat: <span className="text-grey-400" >{j.beat.name}</span>
                                                            </div>
                                                        </div>
                                                        <div className='bg-offWhite font-Raleway text-text-grey p-2 rounded-full cursor-default text-sm' >
                                                            {j.purchaseType}
                                                        </div>
                                                    </div>
                                                    <div className="flex space-x-8 items-center">
                                                        <PillButton color="p" clickHandler={() => window.open(j.link.wav || j.link.mp3 || j.link.stem)} >
                                                            <svg viewBox="0 0 24 24" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M11 3.01254C10.9983 2.46026 11.4446 2.01114 11.9969 2.00941C12.5492 2.00768 12.9983 2.45399 13 3.00627L11 3.01254Z" fill="#ffffff" /> <path d="M14.3158 10.2951L13.0269 11.592L13 3.00627L11 3.01254L11.0269 11.5983L9.73003 10.3095C9.33828 9.92018 8.7051 9.92214 8.3158 10.3139C7.9265 10.7056 7.92849 11.3388 8.32024 11.7281L8.32275 11.7306L8.32374 11.7316L12.039 15.4236L15.7206 11.7187L15.7262 11.7131L15.727 11.7123L15.7278 11.7115L15.7337 11.7056L15.7344 11.7049L14.3158 10.2951Z" fill="#ffffff" /> <path d="M15.7344 11.7049C16.1237 11.3131 16.1217 10.6799 15.73 10.2906C15.3382 9.90134 14.705 9.90335 14.3158 10.2951L15.7344 11.7049Z" fill="#ffffff" /> <path d="M4 12C4 10.8954 4.89543 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44771 6.55228 8 6 8C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H17C19.7614 22 22 19.7614 22 17V12C22 9.79086 20.2091 8 18 8C17.4477 8 17 8.44771 17 9C17 9.55228 17.4477 10 18 10C19.1046 10 20 10.8954 20 12V17C20 18.6569 18.6569 20 17 20H6C4.89543 20 4 19.1046 4 18V12Z" fill="#ffffff" /> </g></svg>
                                                        </PillButton>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default OrdersPage;