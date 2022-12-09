import './button.styles.css'
const Button = ({color, children, handleClick }) => {
    const primary = color === "p"
    const secondary = color === "s"
    const accent = color === "a"

    return (
        primary ? (
            <button data-color={color} onClick={handleClick} className="border-none rounded-lg px-6 py-2 text-xl uppercase cursor-pointer text-white outline-none drop-shadow-lg bg-center bg-p ripple">
                {children}
            </button>
        ) : secondary ? (
            <button data-color={color} onClick={handleClick} className="border-none rounded-lg px-6 py-2 text-xl uppercase cursor-pointer text-white outline-none drop-shadow-lg bg-center bg-s ripple">
                {children}
            </button>
        ) : accent ? (
            <button data-color={color} onClick={handleClick} className="border-none rounded-lg px-6 py-2 text-xl uppercase cursor-pointer text-white outline-none drop-shadow-lg bg-center bg-a ripple text-s">
                {children}
            </button>
        ) : null
    );
}

export default Button;