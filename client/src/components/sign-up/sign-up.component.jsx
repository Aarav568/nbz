import images from "../../utils/image-links";

import Button from "../button/button.component";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Notification from "../notification/notification.component";

// import { setCurrentUser } from "../../redux/actions/user.actions";
// import { signUp } from "../../api/user";

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        try {
            // e.preventDefault()
            // const user = signUp({
            //     email, password, username, name
            // })
            // const response = await user
            // console.log(response)
            // // dispatch(setCurrentUser(response.data))
            // navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <Notification />
            <div className='flex flex-col pt-36 space-y-8' >
                <div className="mx-auto"  >
                    <div className="flex w-full bg-bg items-center justify-center">
                        <div className="hidden sm:block">
                            <img className="object-cover shadow-lg rounded mb-20" src={images.authBanner} height={"500"} width="512" alt="" />
                        </div>
                        <div className="flex flex-col ml-[-30px] mb-20" data-aos="fade-left"  >
                            <form action="" className="bg-p max-w-[400px] w-full p-16 rounded-lg" >
                                <h2 className="text-4xl dark:text-white font-bold text-center font-Raleway" >Sign Up</h2>
                                <div>
                                    <label className="flex flex-col text-gray:400 py-2">Name</label>
                                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Full Name" className="focus:text-white rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="text" />
                                </div>
                                <div>
                                    <label className="flex flex-col text-gray:400 py-2">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email@abc" className="focus:text-white rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="email" />
                                </div>
                                <div>
                                    <label className="flex flex-col text-gray:400 py-2">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter a Password" className="focus:text-white rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="password" />
                                </div>
                                <div className="mt-4" >
                                    <Button color="a" handleClick={(e) => handleSubmit(e)} >Sign Up</Button>
                                </div>
                                <div className="flex text-white justify-between py-2 space-x-4 text-text-grey" >
                                    <div>
                                        <p>Already have an account?</p>
                                        <p className="text-green" > <button onClick={() => navigate("/login")}>Login here ... </button> </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;