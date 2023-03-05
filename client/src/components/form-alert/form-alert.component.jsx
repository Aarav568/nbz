const FormAlert = ({ alert }) => {
    return (
        alert ? (
            <div className="flex justify-center bg-backdropDark border-b-1 border-white " >
                <div className="text-white text-lg text-center align-middle p-4" >
                    {alert}
                </div>
            </div>
        ) : null
    )
}

export default FormAlert;