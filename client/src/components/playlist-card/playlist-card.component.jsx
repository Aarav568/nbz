import { useNavigate } from 'react-router';

const PlaylistCard = ({ img, title, id, s }) => {
    const navigate = useNavigate()

    return (
        <div className='mx-auto w-full flex justify-center' >
            <button className="text-text-grey w-56 min-h-[10rem] shadow-lg rounded-md overflow-hidden  hover:bg-backdrop rippleCard" onClick={() => s ? {} : navigate(`/beats/playlist/${id}`)} >
                <img src={img} alt="" height="250" width="250" />
                {/* badge */}
                <div className='p-5 flex-col gap-3 flex-col space-y-2 text-white' >
                    <span className='px-3 py-1 rounded-full text-xs bg-p'>two weeks ago</span>
                    {/* product title */}
                    <div>
                        <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
                            {title}
                        </h2>
                        <p>by Vnashak</p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default PlaylistCard;