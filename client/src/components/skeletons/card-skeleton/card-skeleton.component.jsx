const CardSkeleton = () => {
    return (
        <>

            <div className='mx-auto w-full flex animate-pulse justify-center' >
                <div className="w-56 shadow-lg rounded-md overflow-hidden hover:bg-backdrop rippleCard" >
                    <div className="w-[250px] h-[250px] bg-grey-500" >
                    </div>
                    <div className="p-5" >
                        <div className="w-24 bg-grey-500 h-6 rounded-md ">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardSkeleton;