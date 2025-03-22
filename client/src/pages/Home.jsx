import React from 'react';

export default function Home() {
  return (
    <div className="flex min-h-screen">
    
      
      <div className="flex-1 ml-20 lg:ml-64"> 
        <div className="max-w-2xl mx-auto p-4">

          <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
            <h2 className="text-xl font-bold text-gray-900">Home</h2>
          </header>

          
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-300" /> 
              <div className="flex-1">
                <textarea
                  className="w-full border-none focus:outline-none resize-none text-gray-900 placeholder-gray-500"
                  placeholder="What's happening?"
                  rows="2"
                />
                <div className="flex justify-end mt-2">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-4 mt-4">
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900">User Name</span>
                    <span className="text-gray-500">@username</span>
                    <span className="text-gray-500">· 2h</span>
                  </div>
                  <p className="mt-1 text-gray-900">
                    This is a sample tweet showing how the content might look in the feed.
                  </p>
                </div>
              </div>
            </div>


            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900">Another User</span>
                    <span className="text-gray-500">@anotheruser</span>
                    <span className="text-gray-500">· 5h</span>
                  </div>
                  <p className="mt-1 text-gray-900">
                    Another example of a tweet in the home feed!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

