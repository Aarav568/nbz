import cartBG from '../../assets/cartbg.png'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllOrders } from "../../api/order";
import OrdersList from "../../components/orders-list/orders-list.component";
import BackButton from '../../components/backbutton/back-button.component';

const OrdersPage = () => {
    const [orders, setOrders] = useState([])
    const uid = useSelector(state => state.user.currentUser._id)
    useEffect(() => {
        getAllOrders(uid).then(resp => setOrders(resp.data.orders))
    }, [])
    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${cartBG})` }} >
                <div className='p-48 pb-32 flex space-x-12 items-center' >
                    <div >
                        <BackButton />
                    </div>
                    <h1 className='text-8xl text-white uppercase font-Kizard' >Your Orders</h1>
                </div>
            </div>
            <div className='mx-auto p-16 flex-col flex text-white' >
                <div className='flex flex-col p-36 pt-12 space-y-8' >
                    {/* {
                        orders?.map(order => (
                            <OrdersList order={order} key={order._id} />
                        ))
                    } */}
                </div>
            </div>
        </div>
    );
}

export default OrdersPage;