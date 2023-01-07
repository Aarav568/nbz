const BeatsSkeleton = ({ count }) => {
    return (
        <>
            {
                [...Array(count)].map((e, i) => (
                    <div role="button" className="p-4 animate-pulse text-white flex justify-between odd:bg-backdrop rounded-lg hover:bg-backdropDark" key={i} >
                        <div className="flex space-x-8 items-center" >
                            <div className="flex items-center h-full justify-center space-x-5">
                                <div className="w-12 bg-grey-300 h-12 rounded-full ">
                                </div>
                                <div className="w-36 bg-grey-500 h-6 rounded-md ">
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-8 items-center">
                            <div className="w-28 bg-grey-500 h-12 rounded-full ">
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default BeatsSkeleton;

