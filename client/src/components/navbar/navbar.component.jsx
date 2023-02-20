import images from '../../utils/image-links';

import { useLocation, useNavigate } from 'react-router'
import PillButton from '../pill-button/pill-button.component';
import SearchBar from '../searchbar/searchbar.component';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const landing = pathname === "/" ? true : false

    if (landing) {
        return (
            <div className="absolute w-full bg-backdrop" >
                <div className='p-4' >
                    {/* //container */}
                    <div className="lg:min-w-6xl xl:max-w-7xl w-full mx-auto ">
                        <div className="flex lg:justify-around justify-between items-center">
                            <div className="hidden lg:block"  >
                                <SearchBar />
                            </div>
                            <div>
                                <button onClick={() => navigate("/")} className="cursor-pointer p-0 m-0">
                                    <img src={images.logo} alt="" height="40" width="60" />
                                </button>
                            </div>
                            <div className="flex space-x-4 font-Raleway" >
                                <div className='lg:flex hidden' >
                                    <button className='hover:bg-backdropDark hover:text-white ease-out p-2 rounded duration-200' onClick={() => navigate("/explore")}>Discover</button>
                                    <button className='hover:bg-backdropDark hover:text-white ease-out p-2 rounded duration-200' onClick={() => navigate("/pricing")}>Pricing</button>
                                </div>
                                {
                                    currentUser ? (
                                        <PillButton color={"a"} clickHandler={() => navigate("/cart")} >
                                            <svg width="25px" height="25px" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="0.00048000000000000007"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <polygon points="8.649,10.27 14.857,28.896 9.923,40 20,40 32,40 40,40 40,36 16.078,36 18.3,31 38.441,31 44.775,12 13.441,12 11.441,6 4,6 4,10 8.333,10 "></polygon> <circle cx="20" cy="42" r="2"></circle> <circle cx="32" cy="42" r="2"></circle> </g> </g></svg>
                                        </PillButton>
                                    ) :
                                        <PillButton color={"p"} clickHandler={() => navigate("/signup")} >Register</PillButton>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                <img src={images.logo} alt="" height="40" width="60" />
                            </button>
                        </div>

                        {/* secondary */}
                        <div className="flex space-x-4 font-Raleway" >
                            <div className='lg:flex hidden' >
                                <button className='hover:bg-backdropDark hover:text-white ease-out p-2 rounded duration-200' onClick={() => navigate("/explore")}>Discover</button>
                                <button className='hover:bg-backdropDark hover:text-white ease-out p-2 rounded duration-200' onClick={() => navigate("/pricing")}>Pricing</button>
                            </div>
                            {
                                currentUser ? (
                                    <PillButton color={"a"} clickHandler={() => navigate("/cart")} >
                                        <svg width="25px" height="25px" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="0.00048000000000000007"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <polygon points="8.649,10.27 14.857,28.896 9.923,40 20,40 32,40 40,40 40,36 16.078,36 18.3,31 38.441,31 44.775,12 13.441,12 11.441,6 4,6 4,10 8.333,10 "></polygon> <circle cx="20" cy="42" r="2"></circle> <circle cx="32" cy="42" r="2"></circle> </g> </g></svg>
                                    </PillButton>
                                ) :
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