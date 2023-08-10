import { useState } from "react"
import { Link } from "react-router-dom"

const Button = ({ title, activate, isActive }) => {
    return (
        <button onClick={activate} className={`w-full relative h-14 transition duration-500 ease-in-out hover:bg-slate-200 text-base font-sans ${isActive ? "font-bold after:absolute" : ""
            } after:w-14 after:h-1 after:rounded-md after:bg-sky-600  after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2`}><Link>{title}</Link></button>
    )
}

const ForYou = () => {
    const [activeButton, setActiveButton] = useState(true);

    function handleClick(id) {
        setActiveButton(id == 0)
    }

    return (
        <div className="flex flex-col w-full h-15 bg-white border-b">
            <h2 className="font-bold font-sans text-lg text-stone-800 mb-4 p-4 pb-0">Home</h2>
            <div className="flex flex-row justify-around">
                <Button title="For You" isActive={activeButton} activate={() => handleClick(0)} />
                <Button title="Following" isActive={!activeButton} activate={() => handleClick(1)} />
            </div>
        </div>
    )
}

const WhatsHappening = () => {
    return (
        <div className="flex flex-row">
            <div>
                <img src="" alt="" />
            </div>
            <div className="flex flex-col">
            </div>
        </div>
    )
}

export default function Feed() {
    return (
        <>
            <div className="w-2/4 h-screen bg-slate-100 flex flex-col fixed top-0">
                <ForYou />
            </div>
        </>
    )
}