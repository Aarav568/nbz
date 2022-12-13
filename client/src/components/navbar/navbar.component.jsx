import logo from '../../assets/logo.png'
import { useLocation, useNavigate } from 'react-router'
import PillButton from '../pill-button/pill-button.component';
import SearchBar from '../searchbar/searchbar.component';

const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const landing = pathname === "/" ? true : false
    return (
        <div className="p-4 absolute w-full" style={{ backgroundColor: `${landing ? null : "#726EFF"}`, padding: `${landing ? "2rem" : null}` }} >
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
                        {
                            // currentUser ? (
                            //     <>
                            //         <button onClick={() => navigate("/explore")}>Explore</button>
                            //     </>
                            // ) : (
                            <>
                                <button onClick={() => navigate("/explore")}>Discover</button>
                                <button onClick={() => { }}>Contact Us</button>
                                {
                                    landing ?
                                        <PillButton color={"p"} >Register</PillButton>
                                        : <PillButton color={"a"} >Register</PillButton>
                                }
                            </>
                            // )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;