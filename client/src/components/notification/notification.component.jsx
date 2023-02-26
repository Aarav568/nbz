import { useSelector } from "react-redux";

const Notification = () => {
    const notification = useSelector(state => state.notification)
    return (
        <>
            {
                notification.hidden ? null : (
                    <div className="flex justify-center" >
                        <div className="relative top-28 bg-backdrop w-3/4 rounded-md border-bottom border-b-4 border-white" >
                            <div className="text-white text-lg text-center align-middle p-4" >
                                {notification.notification}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Notification;