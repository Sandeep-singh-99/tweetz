import React from 'react';
import { 
  Home, 
  Hash, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  LogIn,
  MoreHorizontal 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SideBar() {
  const {  isAuthenticated, user, loading } = useSelector((state) => state.auth)
  return (
    <div className="fixed top-0 lg:left-5 left-0 h-screen w-23 lg:w-64 flex flex-col justify-between lg:items-stretch items-center border-r border-gray-700">
      
      <div className="flex flex-col items-start">
        {/* Logo */}
        <div className="p-4">
          <h1 className='text-2xl font-bold md:hidden text-white lg:text-3xl font-serif'>T</h1>
          <h1 className="text-2xl font-bold hidden md:block text-white lg:text-3xl">
            Tweetz
          </h1>
        </div>

        
        <nav className="space-y-4 mt-4 w-full">
          <Link to={"/"} className="flex items-center px-4 py-2 text-white hover:bg-[#181818] rounded-full transition-colors lg:w-11/12">
            <Home className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-xl">Home</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-[#181818] rounded-full transition-colors lg:w-11/12">
            <Hash className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Explore</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-[#181818] rounded-full transition-colors lg:w-11/12">
            <Bell className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Notifications</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-[#181818] rounded-full transition-colors lg:w-11/12">
            <Mail className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Messages</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-[#181818] rounded-full transition-colors lg:w-11/12">
            <Bookmark className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Bookmarks</span>
          </Link>

          <Link to={"/profile"} className="flex items-center px-4 py-2 text-white hover:bg-[#181818] rounded-full transition-colors lg:w-11/12">
            <User className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Profile</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-[#181818] rounded-full transition-colors lg:w-11/12">
            <MoreHorizontal className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">More</span>
          </Link>
        </nav>
      </div>

      
      <div className="p-4">
        {
          loading ? (
            <div className='flex items-center space-x-4'>
              <div className="w-12 h-12 skeleton rounded-full animate-pulse"></div>
              <div className="w-24 h-6 skeleton rounded-full mt-2 animate-pulse"></div>
            </div>
          ) :
          isAuthenticated ? (
            <div className="flex items-center space-x-4 hover:bg-[#181818] rounded-full transition-colors p-2">
              <img src={user.data.profileImage} alt="Profile" className="w-12 h-12 rounded-full" />
              <p className='text-xl hidden md:block'>{user.data.fullName}</p>
            </div>
          ) : (
            <Link to={"/login"} className="w-full flex items-center justify-center lg:justify-start px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <LogIn className="w-6 h-6 lg:mr-2" />
            <span className="hidden lg:inline text-xl">Login</span>
          </Link>
          )
        }
      </div>
    </div>
  );
}


