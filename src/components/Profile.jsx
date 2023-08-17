import { useEffect, useState, useRef } from "react";
import { auth, signOutAccount, signInWithGoogle } from "./services/firebaseConfig";
import defaultProfilePic from '../assets/images/default-profile-pic.png'
import googleSvg from '../assets/svg/google.svg';
import envelope from '../assets/svg/square-envelope-solid.svg'
import { useAuthState } from "react-firebase-hooks/auth";

//Profile pic
function getFirstName(user) {
    const nameParts = user.split(" ");
    if (nameParts.length > 0) {
        return nameParts[0];
    }
    return "";
}
export const ProfilePic = () => {
    const [user] = useAuthState(auth);
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const firstName = getFirstName(user.displayName);

    return (
        <div className="flex flex-row w-4/5 h-12">
            <div className='w-14 h-14 mr-2'>
                <img className="w-full h-full object-cover rounded-full" src={user.providerData[0].providerId == "google.com" ? user.photoURL : defaultProfilePic} alt="default-profile-pic" />
            </div>
            <div className="flex flex-row items-center h-full">
                <h2 className='font-sans text-lg'>{firstName}</h2>
                <div className='relative'>
                    <button className='flex ml-12 text-lg w-10 h-10 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 items-middle justify-center' onClick={toggleMenu}>...</button>
                    {menuVisible && (
                        <div ref={menuRef} className="absolute -top-14 mt-2 py-2 w-max bg-white border border-gray-200 rounded-lg shadow-2xl">
                            <div onClick={() => { signOutAccount() }} className="block px-4 py-2 w-24 text-gray-800 hover:bg-gray-100 cursor-pointer">Sair</div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export const SignInButton = ({ src, loginText, activate }) => {
    return (
        <div className='w-4/6 flex flex-row justify-center items-center py-3 font-sans font-semibold border border-solid shadow-md rounded-lg mb-3 transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer shadow-slate-300 ' onClick={activate}>
            <img className='w-12 h-12 object-cover' src={src} />
            <button className="ml-4 text-lg"> {loginText} </button>
        </div>
    )
}
export const DoTheLogin = () => {
    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            console.log('Usuário logado:', user);
        } catch (error) {
            console.error('Erro ao fazer login com o Google:', error);
        }
    };
    return (
        <div className="h-screen pt-14 flex flex-col items-center bg-slate-100">
            <div className="w-10/12 h-fit pb-10 rounded-md flex flex-col items-center bg-white  shadow-md shadow-gray-300">
                <h1 className="font-sans text text-center mt-10 mb-5 text-2xl font-medium">Faça seu Login para ter Acesso ao Site!</h1>
                <SignInButton src={googleSvg} loginText="Logar com o Google!" activate={handleGoogleSignIn} />
                <SignInButton src={envelope} loginText="Logar com o E-mail!" activate={() => window.open('/login', '_blank')} />
            </div>
        </div>
    )
}

export default function ProfilePage() {
    return (
        <div>
            <h1>Perfil do Usuário</h1>
        </div>
    );
}