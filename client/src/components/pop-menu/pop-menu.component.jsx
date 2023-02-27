import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setNotification } from "../../redux/notification/notification.actions";
import { logoutUser } from "../../redux/user/user.actions";

const PopMenu = () => {
    const [hiddenMenu, setHiddenMenu] = useState(true)
    const name = useSelector(state => state.user.currentUser.name)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        setHiddenMenu(!hiddenMenu)
    }
    const handleLogout = () => {
        dispatch(logoutUser())
        dispatch(setNotification("Logged out successfully!"))
        navigate("/login")
    }
    return (
        <div>
            <button onClick={handleClick} className="block h-12 w-12 bg-backdropDark rounded-full overflow-hidden border-2 border-white focus:outline-none focus:border-white" >
                <h1 className="text-white" > {name[0]} </h1>
            </button>
            {
                hiddenMenu ? null : (
                    <div className="absolute" >
                        <div className="mt-2 p-2 bg-white rounded-lg" >
                            <button onClick={() => navigate("/orders")} className="w-full block rounded-lg px-4 py-2 text-text hover:bg-backdropDark hover:text-white" >My Orders</button>
                            <button onClick={handleLogout} className="w-full block rounded-lg px-4 py-2 text-text hover:bg-backdropDark hover:text-white" >Logout</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default PopMenu;