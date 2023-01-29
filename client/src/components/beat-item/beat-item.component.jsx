import './beat-item.styles.css'
import PillButton from '../pill-button/pill-button.component';
import { toggleModal } from "../../redux/modal/modal.actions";
import { useDispatch } from 'react-redux'
import { useState } from 'react';

const BeatItem = ({ beat }) => {
    const dispatch = useDispatch()
    const [playing, setPlaying] = useState(false)
    const [audio] = useState(new Audio("https://firebasestorage.googleapis.com/v0/b/nbzz-91837.appspot.com/o/BEATS%2FControlla%2FSample%2FControlla.mp3?alt=media&token=239dd26f-4020-43fe-8b25-07f919b82eed"))
    
    return (
        <>
            <div role="button" className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg hover:bg-backdropDark rippleBeat" >
                <div className="flex space-x-8 items-center" >
                    <div onClick={() => { }} role="button" className="ripple">
                        <PillButton color={"p"} clickHandler={async () => {
                            if(!playing) {
                                audio.play()
                            } else {
                                audio.pause()
                            }
                            setPlaying(!playing)
                        }} >
                            {
                                playing
                                    ?
                                    <svg fill="#ffffff" height="25px" width="20px" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"> <g id="Pause--Filled"> <path d="M15,22V2h5v20H15z M9,22V2H4v20H9z" /> </g> </g></svg>
                                    :
                                    <svg fill="#ffffff" height="25px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"> <path d="M464.7,221.5L86.1,7.3C52.5-11.7,25,7.5,25,50v412c0,42.5,27.5,61.7,61.1,42.7l378.6-214.1 C498.2,271.5,498.2,240.5,464.7,221.5z" /> </g></svg>
                            }
                        </PillButton>
                    </div>
                    <div>
                        {beat.name}
                    </div>
                </div>
                <div className="flex space-x-8 items-center">
                    <div onClick={() => { }} role="button" className="ripple">
                        <PillButton color={"p"} clickHandler={() => dispatch(toggleModal(beat))} >
                            Buy
                            <svg className='inline-block ml-2' width="25px" height="25px" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="0.00048000000000000007"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <polygon points="8.649,10.27 14.857,28.896 9.923,40 20,40 32,40 40,40 40,36 16.078,36 18.3,31 38.441,31 44.775,12 13.441,12 11.441,6 4,6 4,10 8.333,10 "></polygon> <circle cx="20" cy="42" r="2"></circle> <circle cx="32" cy="42" r="2"></circle> </g> </g></svg>
                        </PillButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BeatItem;

