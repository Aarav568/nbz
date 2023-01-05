import FileBase64 from 'react-file-base64';
import { useState } from 'react'
import { saveBeatSample } from '../../api/beats';

const Upload = () => {
    const [item, setItem] = useState("")
    const doneHandler = ({ base64 }) => {
        // saveBeatSample({data: base64})
    }
    return (
        <div className='p-48' >
            <FileBase64 multiple={false} onDone={doneHandler} />
            {
                item ? (
                    <audio controls="controls" >
                        <source src={item.base64} type="audio/ogg" />
                    </audio>
                ) : null
            }
            <h1>HI</h1>
        </div>
    );
}

export default Upload;