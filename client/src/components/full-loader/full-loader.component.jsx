const FullLoader = () => {
    return (
        <div className="h-[100vh] w-full bg-backdropDark animate-pulse flex justify-center items-center" >
            <div className="w-24 h-24 rounded-full bg-grey-500" >
            </div>
            <div className="w-14 h-14 bg-white rounded-full absolute" >
            </div>
            <div className="w-8 h-8 rounded-full bg-grey-500 absolute" >
            </div>
        </div>
    );
}

export default FullLoader;