import { useNavigate } from 'react-router';
import './genre-card.styles.css'

const GenreCard = ({ img, title, id, s }) => {
    const navigate = useNavigate()
    return (
        <div className='mx-auto w-full flex justify-center' >
            <button className="text-text-grey w-56 bg-backdrop min-h-[10rem] shadow-lg rounded-md overflow-hidden  hover:bg-backdrop p-2 rippleCard" onClick={() => s ? {} :  navigate(`/beats/artist/${id}`)} >
                <div className='p-5 flex-col gap-3 space-y-2 text-white' >
                    {/* <span className='px-3 py-1 rounded-full text-xs bg-p'>two weeks ago</span> */}
                    <div>
                        <h2 className='font-semibold mb-2 text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
                            {title}
                        </h2>
                        <p>Genre</p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default GenreCard;