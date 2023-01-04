import BeatItem from "../beat-item/beat-item.component";

const BeatsList = ({ beats }) => {
    return (
        <div>
            {
                beats.map(e =>
                    <BeatItem name={e.name} key={e._id} />
                )
            }
        </div>
    );
}

export default BeatsList;