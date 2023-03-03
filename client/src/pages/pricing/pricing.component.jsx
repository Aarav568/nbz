import images from '../../utils/image-links';
//COMPONENT IMPORTS 
import Button from '../../components/button/button.component';
import BackButton from '../../components/backbutton/back-button.component';

const Pricing = () => {
    return (
        <div className='flex flex-col space-y-8' >
            <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" style={{ backgroundImage: `url(${images.pricingBG})` }} >
                <div className='px-4 py-36 flex space-x-12 items-center' >
                    {/* <div >
                        <BackButton />
                    </div> */}
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Unbeatable Prices</h1>
                </div>
            </div>
            <div className='mx-auto p-8 flex flex-col space-y-8' >
                <div className='flex lg:flex-row flex-col space-y-12 mb-16 lg:space-x-12' >
                    {/* CARD 1 */}
                    <div className="rounded-xl bg-backdrop border p-8 flex flex-col space-y-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >STEM</h1>
                        <div className="flex flex-col text-center"  >
                            <h2 className="text-5xl text-white">35$ <span className="text-lg text-grey" >/ per pack</span></h2>
                        </div>
                        <p className="text-white" >You can buy a complete beat pack
                            with its pattern to customize or
                            tweak the beats to suit your needs</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Anything</p>
                            </div>
                        </div>
                        <Button color={"p"}>EXPLORE</Button>
                    </div>
                    {/* CARD 3 */}
                    <div className="rounded-xl border p-8 flex flex-col space-y-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >STEM</h1>
                        <div className="flex flex-col text-center"  >
                            <h2 className="text-5xl text-white">35$ <span className="text-lg text-grey" >/ per pack</span></h2>
                        </div>
                        <p className="text-white" >You can buy a complete beat pack
                            with its pattern to customize or
                            tweak the beats to suit your needs</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Anything</p>
                            </div>
                        </div>
                        <Button color={"p"}>EXPLORE</Button>
                    </div>
                    {/* CARD 4 */}
                    <div className="rounded-xl border p-8 flex flex-col space-y-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >STEM</h1>
                        <div className="flex flex-col text-center"  >
                            <h2 className="text-5xl text-white">35$ <span className="text-lg text-grey" >/ per pack</span></h2>
                        </div>
                        <p className="text-white" >You can buy a complete beat pack
                            with its pattern to customize or
                            tweak the beats to suit your needs</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Anything</p>
                            </div>
                        </div>
                        <Button color={"p"}>EXPLORE</Button>
                    </div>
                    {/* CARD 5 */}
                    <div className="rounded-xl border p-8 flex flex-col space-y-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >STEM</h1>
                        <div className="flex flex-col text-center"  >
                            <h2 className="text-5xl text-white">35$ <span className="text-lg text-grey" >/ per pack</span></h2>
                        </div>
                        <p className="text-white" >You can buy a complete beat pack
                            with its pattern to customize or
                            tweak the beats to suit your needs</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Anything</p>
                            </div>
                        </div>
                        <Button color={"p"}>EXPLORE</Button>
                    </div>
                    {/* CARD 5 */}
                    <div className="rounded-xl border p-8 flex flex-col space-y-8 max-w-[400px] shadow-lg" >
                        <h1 className="text-4xl bold font-Kizard text-white" >STEM</h1>
                        <div className="flex flex-col text-center"  >
                            <h2 className="text-5xl text-white">35$ <span className="text-lg text-grey" >/ per pack</span></h2>
                        </div>
                        <p className="text-white" >You can buy a complete beat pack
                            with its pattern to customize or
                            tweak the beats to suit your needs</p>
                        <div className='flex flex-col space-y-4 mt-8 text-white'>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
                                <p>Something</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.cross} height="24" width={"24"} alt="" />
                                <p>Nothing</p>
                            </div>
                            <div className='flex space-x-4' >
                                <img src={images.check} height="24" width={"24"} alt="" />
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