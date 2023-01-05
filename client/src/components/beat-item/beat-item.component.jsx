import play from '../../assets/play.png'
import cart from '../../assets/cart.png'
import './beat-item.styles.css'
import PillButton from '../pill-button/pill-button.component';
import { toggleModal } from "../../redux/modal/modal.actions";
import { useDispatch } from 'react-redux'

const BeatItem = ({ beat }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div role="button" className="p-4 text-white flex justify-between odd:bg-backdrop rounded-lg hover:bg-backdropDark rippleBeat" >
                <div className="flex space-x-8 items-center" >
                    <div onClick={() => { }} role="button" className="ripple">
                        <img src={play} height="50" width="50" alt="" />
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