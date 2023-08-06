import { FaTwitter, FaHome, FaUser } from 'react-icons/fa';

const NavItem = ({ icon, title }) => {
    return (
        <div className='flex items-center mb-3 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-blue-500 text-gray-900'>
            {icon}
            <h2 className='flex items-center w-full pl-5 text-start'>{title}</h2>
        </div>
    );
};

export default function Menu() {
    return (

        <div className="w-1/4 h-screen bg-white opacity-7 flex flex-col pt-4 pl-12 border-r-2 border-r-gray-200">
            <div className="h-106 w-full">
                <FaTwitter size={48} className='icon text-blue-600' />
            </div>
            <nav className='mt-10'>
                <NavItem icon={<FaHome size={36} />} title="Home" />
                <NavItem icon={<FaTwitter size={36} />} title="Twitter" />
                <NavItem icon={<FaUser size={36} />} title="Profile" />
            </nav>
        </div>

    )
}