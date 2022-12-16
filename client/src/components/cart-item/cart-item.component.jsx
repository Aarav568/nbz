const CartItem = () => {
    return (
        <div className="border-y p-4 text-white flex justify-between even:bg-backdrop" >
            <div className="flex space-x-8">
                <div>
                    Play
                </div>
                <div>
                    Beat Name
                </div>
            </div>
            <div className="flex space-x-8">
                <div>
                    Play
                </div>
                <div>
                    Beat Name
                </div>
            </div>
        </div>
    );
}

export default CartItem;