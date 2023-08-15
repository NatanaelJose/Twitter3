import { useEffect, useState, useRef } from "react";
import { auth, signInWithGoogle } from "./services/firebaseConfig";
import defaultProfilePic from '../assets/images/default-profile-pic.png'


//Profile pic
function getFirstName(user) {
    if (user != null && user.displayName) {
        const nameParts = user.displayName.split(" ");
        if (nameParts.length > 0) {
            return nameParts[0];
        }
    }
    return "";
}
export const ProfilePic = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuRef = useRef(null);
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

    const firstName = getFirstName(auth.currentUser);

    return (
        <div className="flex flex-row w-4/5 h-12">
            <div className='w-16 h-16 mr-2'>
                <img className="w-full h-full object-cover" src={defaultProfilePic} alt="default-profile-pic" />
            </div>
            <div className="flex flex-row items-center h-full">
                <h2 className='font-sans text-lg'>{firstName}</h2>
                <div className='relative'>
                    <button className='flex ml-12 text-lg w-10 h-10 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 items-middle justify-center' onClick={toggleMenu}>...</button>
                    {menuVisible && (
                        <div ref={menuRef} className="absolute -top-14 mt-2 py-2 w-max bg-white border border-gray-200 rounded-lg shadow-2xl">
                            <div onClick={() => { auth.signOut() }} className="block px-4 py-2 w-24 text-gray-800 hover:bg-gray-100 cursor-pointer">Sair</div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export const SignIn = ({ src, loginText }) => {
    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            console.log('Usuário logado:', user);
        } catch (error) {
            console.error('Erro ao fazer login com o Google:', error);
        }
    };
    return (
        <div className='w-4/6 flex flex-row justify-center items-center py-3 font-sans font-semibold border border-solid shadow-md rounded-lg mb-3 transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer shadow-slate-300 ' onClick={handleGoogleSignIn}>
            <img className='w-12 h-12 object-cover' src={src} />
            <button className="ml-4 text-lg"> {loginText} </button>
        </div>
    )
}

const SignOut = () => {
    return auth.currentUser && <button onClick={() => { auth.signOut() }}> Sair </button>
}

export default function ProfilePage() {
    return (
        <div>
            <h1>Perfil do Usuário</h1>
            <SignIn />
        </div>
    );
}