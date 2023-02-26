import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PopMenu = () => {
    const [hiddenMenu, setHiddenMenu] = useState(true)
    const name = useSelector(state => state.user.currentUser.name)
    const navigate = useNavigate()
    const handleClick = () => {
        setHiddenMenu(!hiddenMenu)
    }
    return (
        <div>
            <button onClick={handleClick} className="block h-12 w-12 bg-backdropDark rounded-full overflow-hidden border-2 border-white focus:outline-none focus:border-white" >
                <h1 className="text-white" > {name[0]} </h1>
                {/* <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1668093375941-ccfe6c34c89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> */}
            </button>
            {
                hiddenMenu ? null : (
                    <div className="absolute" >
                        <div className="mt-2 p-2 bg-white rounded-lg" >
                            <button onClick={() => navigate("/orders")} className="block rounded-lg px-4 py-2 text-text hover:bg-backdropDark hover:text-white" >My Orders</button>
                            <button onClick={() => navigate("/logout")} className="block rounded-lg px-4 py-2 text-text hover:bg-backdropDark hover:text-white" >Logout</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default PopMenu;