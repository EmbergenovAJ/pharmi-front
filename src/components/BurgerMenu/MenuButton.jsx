import CrossIcon from "./CrossIcon"
import MenuIcon from "./MenuIcon"


export default function MenuButton({ isOpen, toggleOpen }) {
    return (
        <div className="cursor-pointer bg-white rounded" onClick={() => toggleOpen(!isOpen)}>
            {isOpen ? <CrossIcon isOpen={isOpen} /> : <MenuIcon isOpen={isOpen} />}
        </div>
    )
}