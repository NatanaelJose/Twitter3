import { useState } from "react"
import { Link } from "react-router-dom"

const Button = ({ title, activate, isActive }) => {
    return (<button onClick={activate} className={`border-b-sky-700 border-b-4 w-full h-14 transition duration-500 ease-in-out hover:bg-slate-200 text-base ${isActive ? "font-semibold" : ""}`}><Link>{title}</Link></button>
    )
}
const ForYou = () => {
    const [activeButton, setActiveButton] = useState(true);
    const FY = document.getElementById('FY');
    const FW = document.getElementById('FW');

    function handleClick(id) {
        setActiveButton(id == 0)
    }

    return (
        <div className="flex flex-col fixed w-2/4 h-15 bg-white border-b border-r border-r-gray-200">
            <h2 className="font-semibold text-lg text-stone-800 mb-4 p-4 pb-0">Home</h2>
            <div className="flex flex-row justify-around">
                <Button title="For You" isActive={activeButton} activate={() => handleClick(0)} />
                <Button title="Following" isActive={!activeButton} activate={() => handleClick(1)} />
            </div>
        </div>
    )
}

export default function Feed() {
    return (
        <>
            <div className="w-2/4 h-screen bg-slate-100 flex flex-col">
                <ForYou />
            </div>
        </>
    )
}