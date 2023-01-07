import OrderItem from "../order-item/order-item.component";

const OrdersList = ({ order }) => {
    const { items } = order.data
    return (
        <div>
            <div className="" >
            <h2 className='text-white text-xl font-bold'>OrderID: {order.transactionId} </h2>
            <h2 className='text-white text-xl font-bold'>Placed At: {order.createdAt} </h2>
            <h2 className='text-white text-xl font-bold'>Status: <span className="text-green" >Completed</span></h2>
            </div>
            {
                items.map(item => (
                    <OrderItem item={item} key={order.createdAt}  />
                ))
            }
        </div>
    );
}

export default OrdersList;