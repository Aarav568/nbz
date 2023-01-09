import images from '../../utils/image-links'
import social from '../../assets/social.png'
import { useNavigate } from 'react-router'
const Footer = () => {
    const navigate = useNavigate()
    return (
        <div style={{ minHeight: "300px" }} className="w-full py-20 bg-p" >
            <div className="mx-auto flex justify-around items-center ">
                <div className='text-white text-sm' >
                    <span className='text-lg uppercase font-bold font-Raleway' >Quick Links</span>
                    <div className="flex flex-col space-y-2 " >
                        <button onClick={() => navigate("/")} className="text-left hover:bg-backdrop p-2 rounded-md " >
                            Home
                        </button>
                        <button onClick={() => navigate("/explore")} className="text-left hover:bg-backdrop p-2 rounded-md" >
                            Discover
                        </button>
                        <button onClick={() => navigate("/signup")} className="text-left hover:bg-backdrop p-2 rounded-md" >
                            Register
                        </button>
                        <button onClick={() => navigate("/login")} className="text-left hover:bg-backdrop p-2 rounded-md" >
                            Login
                        </button>
                        <button onClick={() => navigate("/pricing")} className="text-left hover:bg-backdrop p-2 rounded-md" >
                            Pricing
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center" >
                    <div role={"button"} onClick={() => navigate("/")} className="cursor-pointer">
                        <img src={images.logo} className="scale-50" loading="lazy" alt="" height="90" width="250" />
                    </div>
                    <span className='text-white uppercase' >Hottest Drops</span>
                </div>
                <div>
                    <img src={social} alt="" width="250" height="250" />
                </div>
            </div>
        </div>
    );
}

export default Footer;