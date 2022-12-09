import Button from "../button/button.component";
import Navbar from "../navbar/navbar.component";
import img from '../../images/auth.jpg'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentUser } from "../../redux/actions/user.actions";
import { signUp } from "../../api/user";

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const user = signUp({
                email, password, username, name
            })
            const response = await user
            console.log(response)
            dispatch(setCurrentUser(response.data))
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <div className="mx-auto"  >
                <div className="flex w-full bg-bg items-center justify-center">
                    <div className="hidden sm:block">
                        <img className="object-cover shadow-lg rounded mb-20" height={"500"} width="512" src={img} alt="" />
                    </div>
                    <div className="flex flex-col justify-center ml-[-30px] mb-20"  data-aos="fade-left"  >
                        <form action="" className="bg-s max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg" >
                            <h2 className="text-4xl dark:text-white font-bold text-center font-Raleway" >Sign Up</h2>
                            <div>
                                <label className="flex flex-col text-gray:400 py-2">Name</label>
                                <input onChange={(e) => setName(e.target.value) } value={name} placeholder="Enter Full Name" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="text" />
                            </div>
                            <div>
                                <label className="flex flex-col text-gray:400 py-2">Username</label>
                                <input onChange={(e) => setUsername(e.target.value) } value={username} placeholder="Enter a Username" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="name" />
                            </div>
                            <div>
                                <label className="flex flex-col text-gray:400 py-2">Email</label>
                                <input onChange={(e) => setEmail(e.target.value) } value={email} placeholder="email@abc" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="email" />
                            </div>
                            <div>
                                <label className="flex flex-col text-gray:400 py-2">Password</label>
                                <input onChange={(e) => setPassword(e.target.value) } value={password} placeholder="Enter a Password" className="rounded-lg w-full bg-white mt-2 p-2 focus:border-blue focus:bg-bg focus:outline-none" type="password" />
                            </div>
                            <div className="mt-4" >
                                <Button color="p" handleClick={(e) => handleSubmit(e)} >Sign Up</Button>
                            </div>
                            <div className="flex justify-between py-2 space-x-4 text-text-grey" >
                                <div>
                                    <p>Already have an account?</p>
                                    <p className="text-blue" > <button onClick={() => navigate("/login")}>Login here ... </button> </p>
                                </div>
                                <p> <button> Forgot Password? </button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;