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

export default function SideBar() {
  return (
    <div className="fixed top-0 left-10 h-screen w-20 lg:w-64 flex flex-col justify-between border-r border-gray-700">
      
      <div className="flex flex-col items-center lg:items-start">
        {/* Logo */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600 lg:text-3xl">
            Tweetz
          </h1>
        </div>

        
        <nav className="space-y-6 mt-4 w-full">
          <Link to={"/"} className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-full transition-colors lg:w-11/12">
            <Home className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Home</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-full transition-colors lg:w-11/12">
            <Hash className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Explore</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-full transition-colors lg:w-11/12">
            <Bell className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Notifications</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-full transition-colors lg:w-11/12">
            <Mail className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Messages</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-full transition-colors lg:w-11/12">
            <Bookmark className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Bookmarks</span>
          </Link>

          <Link to={"/profile"} className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-full transition-colors lg:w-11/12">
            <User className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">Profile</span>
          </Link>

          <Link to={""} className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-full transition-colors lg:w-11/12">
            <MoreHorizontal className="w-6 h-6" />
            <span className="hidden lg:inline ml-4 text-lg">More</span>
          </Link>
        </nav>
      </div>

      
      <div className="p-4">
        <Link to={"/login"} className="w-full flex items-center justify-center lg:justify-start px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          <LogIn className="w-6 h-6 lg:mr-2" />
          <span className="hidden lg:inline text-lg">Login</span>
        </Link>
      </div>
    </div>
  );
}