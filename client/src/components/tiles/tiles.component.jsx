import { useState } from 'react';
import { useNavigate } from 'react-router';

const Tile = ({ title, s, link, data, handler }) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        console.log("set to ", data)
        handler(
            `${data}`
        )
    }


    return (
        < div className='mx-auto w-full flex justify-center' >
            {
                s ? (
                    <button className="text-text-grey ease w-56 min-h-[10rem] bg-backdrop hover:shadow-lg overflow-hidden rounded-md hover:bg-p p-2 rippleCard" onClick={handleClick} >
                        <div className='p-5 flex-col gap-3 flex-col space-y-2 text-white' >
                            <div>
                                <h2 className='font-semibold mb-2 text-2xl overflow-hidden whitespace-nowrap'>
                                    {title}
                                </h2>
                            </div>
                        </div>
                    </button>
                ) : (
                    <button className="text-text-grey ease w-56 min-h-[10rem] bg-backdrop hover:shadow-lg overflow-hidden rounded-md hover:bg-p p-2 rippleCard" onClick={(e) => navigate(`${link}`)} >
                        <div className='p-5 flex-col gap-3 flex-col space-y-2 text-white' >
                            <div>
                                <h2 className='font-semibold mb-2 text-2xl overflow-hidden whitespace-nowrap'>
                                    {title}
                                </h2>
                            </div>
                        </div>
                    </button>
                )
            }
        </div >

    )
}

export default Tile;