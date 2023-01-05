import BeatItem from "../beat-item/beat-item.component";

const BeatsList = ({ beats }) => {
    return (
        <div>
            {
                beats.map(beat =>
                    <BeatItem beat={beat} key={beat._id} />
                )
            }
        </div>
    );
}

export default BeatsList;