import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "./services/firebaseConfig"
import { useAuthState } from "react-firebase-hooks/auth"
import { SignIn } from "./Profile"
import googleSvg from '../assets/svg/google.svg';
import envelope from '../assets/svg/square-envelope-solid.svg'

const Button = ({ title, activate, isActive }) => {
    return (
        <button onClick={activate} className={`w-full relative h-14 transition duration-500 ease-in-out hover:bg-gray-200 text-base font-sans ${isActive ? "font-semibold after:absolute" : ""
            } after:w-14 after:h-1 after:rounded-md after:bg-sky-600  after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2`}><Link>{title}</Link></button>
    )
}

const TimeLine = () => {
    return (
        <div className="h-screen flex flex-col overflow-y-auto w-full bg-black">
        </div>
    );
}


const DoTheLogin = () => {
    return (
        <div className="h-screen pt-14 flex flex-col items-center bg-slate-100">
            <div className="w-10/12 h-fit pb-10 rounded-md flex flex-col items-center bg-white  shadow-md shadow-gray-300">
                <h1 className="font-sans text text-center mt-10 mb-5 text-2xl font-medium">Faça seu Login para ter Acesso ao Site!</h1>
                <SignIn src={googleSvg} loginText="Logar com o Google!" />
                <SignIn src={envelope} loginText="Logar com o E-mail!" />
            </div>
        </div>
    )
}

const ForYou = () => {
    const [user] = useAuthState(auth);
    const [activeButton, setActiveButton] = useState(true);

    function handleClick(id) {
        setActiveButton(id == 0)
    }

    return (
        <div className={`flex flex-col w-full h-15 bg-white border-b`}>
            <h2 className="font-bold font-sans text-lg text-stone-800 mb-4 p-4 pb-0">Home</h2>
            <div className="flex flex-row justify-around">
                <Button title={"For You"} isActive={activeButton} activate={() => handleClick(0)} />
                <Button title={"Following"} isActive={!activeButton} activate={() => handleClick(1)} />
            </div>
            {user ? <TimeLine /> : <DoTheLogin />}
        </div>
    )
}

function Feed() {
    return (
        <>
            <div className="w-2/4 h-screen bg-slate-100 flex flex-col relative top-0">
                <ForYou />
            </div>
        </>
    )
}

export default Feed;