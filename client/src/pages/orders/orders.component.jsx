import images from '../../utils/image-links';
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
        getAllOrders(uid).then(resp => setOrders(resp.data.orders))
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
                        orders.length == 0 ? (
                            <div className='flex flex-col pt-0 space-y-8' >
                                <h2 className='text-white text-4xl font-bold'>No Orders Yet!</h2>
                            </div>
                        ) : (
                            // POPULATE ORDERS
                            null
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default OrdersPage;