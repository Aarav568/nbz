import images from "../../../utils/image-links";

const SetFeatured = () => {
    return (
        <div>
            <div className="bg-center bg-cover w-full flex justify-around items-center" style={{ backgroundImage: `url(${images.cartBG})` }} >
                <div className='px-4 py-48 flex space-x-12 items-center' >
                    <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Set Featured</h1>
                </div>
            </div>
        </div>
    );
}

export default SetFeatured;