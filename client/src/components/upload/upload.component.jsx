import { useState } from 'react'
import { saveBeatSample } from '../../api/beats';

const Upload = () => {
    const [item, setItem] = useState("")
    const doneHandler = ({ base64 }) => {
        // saveBeatSample({data: base64})
    }
    return (
        <div className='p-48' >
            <button onClick={() => {}} >HEYLO</button>
        </div>
    );
}

export default Upload;