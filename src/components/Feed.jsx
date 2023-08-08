import { Link } from "react-router-dom"

const Button = (title) => {
    return (<button className="w-full h-14 hover:bg-slate-200 text-base"><Link>{title}</Link></button>
    )
}
const ForYou = () => {
    return (
        <div className="flex flex-col w-full h-15 bg-white border-b border-r border-r-gray-200">
            <h2 className="font-semibold text-lg text-stone-800 mb-4 p-4 pb-0">Home</h2>
            <div className="flex flex-row justify-around">
                <Button title="For You" />
                <Button title="Following" />
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