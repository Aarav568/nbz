import pricingBG from '../../assets/pricingbg.png'
import check from '../../assets/check.png'
import cross from '../../assets/cross.png'
import Button from '../../components/button/button.component';

const Pricing = () => {
    return (
        <div className='flex flex-col space-y-8' >
            <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" style={{ backgroundImage: `url(${pricingBG})` }} >
                <div className='p-48 flex flex-col space-y-4' >
                    <h1 className='text-8xl text-white uppercase font-Kizard' >Unbeatable Prices</h1>
                </div>
            </div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <div className='flex mb-16 space-x-12' >
                    {/* CARD 1 */}
                    <div className="rounded-xl border flex flex-col space-y-8 p-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >Lease</h1>
                        <div className="flex flex-col text-center"  >
                            <h2 className="text-5xl text-white">700₹ <span className="text-lg text-grey" >/ per beat</span></h2>
                        </div>
                        <p className="text-white" >You can rent a beat for a year,
                            you will be provided with proper
                            license and certificate of lease.</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={check} height="24" width={"24"} alt="" />
                                <p>Anything</p>
                            </div>
                        </div>
                        <Button color={"p"}>EXPLORE</Button>
                    </div>
                    {/* Featured CARD */}
                    <div style={{ background: "rgba(255,255,255, 0.1)" }} className="scale-[1.1] flex flex-col space-y-8 rounded-xl border p-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >Purchase</h1>
                        <div className="flex flex-col"  >
                            <h2 className="text-5xl text-white text-center">1200₹ <span className="text-lg text-grey" >/ per beat</span></h2>
                        </div>
                        <p className="text-white" >You can purchase a beat with
                            its complete ownership with
                            legitimate copyrights</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={check} height="24" width={"24"} alt="" />
                                <p>Anything</p>
                            </div>
                        </div>
                        <Button color={"p"}>EXPLORE</Button>
                    </div>
                    {/* CARD 2 */}
                    <div className="rounded-xl border p-8 flex flex-col space-y-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >STEM</h1>
                        <div className="flex flex-col text-center"  >
                            <h2 className="text-5xl text-white">1700₹ <span className="text-lg text-grey" >/ per pack</span></h2>
                        </div>
                        <p className="text-white" >You can buy a complete beat pack
                            with its pattern to customize or
                            tweak the beats to suit your needs</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={check} height="24" width={"24"} alt="" />
                                <p>Anything</p>
                            </div>
                        </div>
                        <Button color={"p"}>EXPLORE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;