import logo from '../../assets/logo.png'
import { useLocation, useNavigate } from 'react-router'
import PillButton from '../pill-button/pill-button.component';
import SearchBar from '../searchbar/searchbar.component';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Navbar = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const landing = pathname === "/" ? true : false

    if (landing) {
        return (
            <div className="p-4 absolute w-full" style={{ padding: "2rem" }} >
                {/* //container */}
                <div className="min-w-6xl xl:max-w-7xl mx-auto ">
                    <div className="flex justify-around items-center">
                        {
                            landing ?
                                <SearchBar /> :
                                null
                        }
                        {/* logo */}
                        <div>
                            <button onClick={() => navigate("/")} className="cursor-pointer p-0 m-0">
                                <img src={logo} alt="" height="40" width="60" />
                            </button>
                        </div>

                        {/* secondary */}
                        <div className="flex space-x-4 font-Raleway" >
                            <button onClick={() => navigate("/explore")}>Discover</button>
                            <button role="a" href="/#contact" >Contact Us</button>
                            <button onClick={() => navigate("/pricing")}>Pricing</button>
                            {
                                currentUser ? null :
                                    <PillButton color={"p"} clickHandler={() => navigate("/signup")} >Register</PillButton>
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className="p-4 absolute w-full" style={{ backgroundColor: "#726EFF" }} >
                {/* //container */}
                <div className="min-w-6xl xl:max-w-7xl mx-auto ">
                    <div className="flex justify-around items-center">
                        {
                            landing ?
                                <SearchBar /> :
                                null
                        }
                        {/* logo */}
                        <div>
                            <button onClick={() => navigate("/")} className="cursor-pointer p-0 m-0">
                                <img src={logo} alt="" height="40" width="60" />
                            </button>
                        </div>

                        {/* secondary */}
                        <div className="flex space-x-4 font-Raleway text-white" >
                            <button onClick={() => navigate("/explore")}>Discover</button>
                            <button role="a" href="/#contact" >Contact Us</button>
                            <button onClick={() => navigate("/pricing")}>Pricing</button>
                            {
                                currentUser ? null :
                                    <PillButton color={"a"} clickHandler={() => navigate("/signup")} >Register</PillButton>
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Navbar;