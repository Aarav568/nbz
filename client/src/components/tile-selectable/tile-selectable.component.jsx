import { useState } from 'react';

const TileSelectable = ({ title, handler, data, selector }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setIsSelected(!isSelected)
        handler(
            selector,
            `${data}`
        )
    }
    return (
        < div className='mx-auto w-full flex justify-center' >
            <button style={isSelected ? { backgroundColor: "#2a2c41" } : {}} className="text-text-grey ease w-56 min-h-[10rem] bg-backdrop hover:shadow-lg overflow-hidden rounded-md hover:bg-p p-2 rippleCard" onClick={handleClick} >
                <div className='p-5 flex-col gap-3 flex-col space-y-2 text-white' >
                    <div >
                        <h2 className='font-semibold mb-2 text-2xl overflow-hidden whitespace-nowrap'>
                            {title}
                        </h2>
                        {isSelected ? <p className="text-green-300">selected</p> : null}
                    </div>
                </div>
            </button>
        </div>
    );
}

export default TileSelectable;