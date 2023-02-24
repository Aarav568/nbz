import images from "../../utils/image-links";

import Button from "../button/button.component";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../api/user";
import { setCurrentUser } from "../../redux/user/user.actions";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const user = loginUser({
                email, password
            })
            const response = await user
            console.log(response)
            dispatch(setCurrentUser(response.data))
            navigate("/explore")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='flex flex-col p-32 space-y-8' >
                <div className="mx-auto"  >
                    <div className="flex w-full bg-bg items-center justify-center">
                        <div className="hidden sm:block">
                            <img className="object-cover shadow-lg rounded mb-20" src={images.authBanner} height={"500"} width="512" alt="" />
                        </div>
                        <div className="flex flex-col justify-center ml-[-30px] mb-20" data-aos="fade-left"  >
                            <form className="bg-p max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg" >
                                <h2 className="text-4xl dark:text-white font-bold text-center font-Raleway" >Login</h2>
                                <div>
                                    <label className="flex flex-col text-gray:400 py-2">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email@abc" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" type="email" />
                                </div>
                                <div>
                                    <label className="flex flex-col text-gray:400 py-2">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter a Password" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white" type="password" />
                                </div>
                                <div className="mt-4" >
                                    <Button color="a" handleClick={(e) => handleSubmit(e)} >Login</Button>
                                </div>
                                <div className="flex text-white justify-between py-2 space-x-4 text-text-grey" >
                                    <div>
                                        <p>Don't have an account?</p>
                                        <p className="text-green" > <button onClick={() => navigate("/signup")}>Register here ... </button> </p>
                                    </div>
                                    <p> <button> Forgot Password? </button></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;