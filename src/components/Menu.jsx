import { FaTwitter, FaHome, FaUser } from 'react-icons/fa';

const NavItem = ({ icon, title }) => {
    return (
        <div className='flex items-center cursor-pointer mb-3 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-sky-600 text-stone-800'>
            {icon}
            <h2 className='flex items-center w-full pl-5 text-start font-bold'>{title}</h2>
        </div>
    );
};

export default function Menu() {
    return (
        <div className="w-1/4 h-screen bg-white opacity-7 flex flex-col pt-4 pl-12 border-r-2 border-r-gray-200">
            <div className="h-106 w-full">
                <FaTwitter size={48} className='text-sky-600' />
            </div>
            <nav className='mt-10 ml-2'>
                <NavItem icon={<FaHome size={50} className="mr-3" />} title="Home" />
                <NavItem icon={<FaUser size={38} className="mr-3" />} title="Profile" />
            </nav>
        </div>
    );
}
