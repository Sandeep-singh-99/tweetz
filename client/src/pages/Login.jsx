import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-96 p-6 border border-gray-700 rounded-xl shadow-2xl">
        <div className="mb-6">
          <h1 className="text-4xl text-center font-serif font-bold text-blue-600">
            Tweetz
          </h1>
          <p className="text-center text-gray-500 text-sm mt-2">
            Welcome back! Please login
          </p>
        </div>
        <form className="space-y-4">
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 hover:border-blue-400 transition-colors">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input 
                type="email" 
                className="w-full focus:outline-none" 
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 hover:border-blue-400 transition-colors">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input 
                type={showPassword ? "text" : "password"}
                className="w-full focus:outline-none" 
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end items-center text-sm">
            <Link to={'/forget-password'} className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-6"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}