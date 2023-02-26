import loader from '../../assets/loader.svg'
const FullLoader = () => {
    return (
        <div className="h-[100vh] w-full bg-backdropDark animate-pulse flex justify-center items-center" >
           <img height={100} width={100} src={loader} />
        </div>
    );
}

export default FullLoader;