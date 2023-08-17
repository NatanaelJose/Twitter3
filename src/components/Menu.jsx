import { FaTwitter, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from './services/firebaseConfig';
import { ProfilePic } from './Profile'
import { useAuthState } from 'react-firebase-hooks/auth';

const PostButton = () => {
    return (<button className="w-4/5 h-12 mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-3xl"> Post </button>)
}

const NavItem = ({ icon, title, route }) => {
    return (
        <div className='flex flex-row items-center cursor-pointer mb-3 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-sky-600 text-stone-800'><Link to={route} className='flex flex-row'>
            {icon}
            <h2 className='flex items-center w-full pl-5 text-start font-bold font-sans text-lg'>{title}</h2></Link>
        </div>
    );
};

function Menu() {
    const [user] = useAuthState(auth);
    return (
        <div className="w-1/4 h-screen left-0 fixed bg-white opacity-7 flex flex-col pt-4 pl-12 border-r border-r-gray-200">
            <div className="h-106 w-full">
                <FaTwitter size={48} className='text-sky-600' />
            </div>
            <nav className='mt-10 ml-2'>
                <NavItem icon={<FaHome size={40} className="mr-3" />} title="Home" route="/" />
                <NavItem icon={<FaUser size={38} className="mr-3" />} title="Profile" route={user ? "/profile" : "/"} />
                <PostButton />
            </nav>
            <div className='mt-auto mb-5'>
                {user ? <ProfilePic /> : ''}
            </div>
        </div>
    );
}


export default Menu;