import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react";
import { useSelector } from "react-redux";
import { checkout } from "../../api/order";
import { useNavigate } from 'react-router'
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/cart/cart.actions";

const PayPal = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const currentUser = useSelector(state => state.user.currentUser)
    // const [orderData, setOrderData] = useState({
    //     cart: cart,
    //     user: currentUser,
    //     transactionId: ""
    // })

    const handleApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            // checkout({ ...orderData, transactionId: details.id })
            //     .then(resp => {
            //         navigate("/orders")
            //         dispatch(emptyCart())
            //         console.log(resp.data)
            //     })
            console.log(details)
        });
    }
    const amount = useSelector(state => state.cart.total)

    return (
        <div className='flex flex-col space-y-8' >
            <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" >

                <div className='p-36 flex flex-col space-y-4' >
                    <PayPalScriptProvider options={{ "client-id": "AQ1nSsVBG_I2DpEW4L5e3fHCRRyNMHNPEb3P0uUdiJg6apHJOSKK3NTn-1Z9dGXKZoO9kacLIcCC_flE" }} >
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: "USD",
                                                value: amount,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={handleApprove}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>

    );
}

export default PayPal;