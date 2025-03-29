import React from 'react';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="">
        <div className="max-w-2xl mx-auto p-4">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Home</h2>
              <div className="flex space-x-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6V3m-6 14H1l1.405-1.405A2.032 2.032 0 006 14.158V11a6 6 0 016-6V3" />
                </svg>
              </div>
            </div>
          </header>

          {/* Stories Section (Instagram-like) */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4 shadow-sm overflow-x-auto">
            <div className="flex space-x-4">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-300 border-2 border-white" />
                  </div>
                  <span className="text-xs mt-1 text-gray-700 truncate w-16 text-center">User {index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Post Input */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4 shadow-sm">
            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div className="flex-1">
                <textarea
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="What's on your mind?"
                  rows="2"
                />
                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-4 mt-4">
            {[
              { user: 'UserName', handle: '@username', time: '2h', text: 'Enjoying the sunset! 🌅', img: true },
              { user: 'AnotherUser', handle: '@anotheruser', time: '5h', text: 'Coffee time ☕', img: false },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <div className="flex space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{post.user}</span>
                        <span className="text-gray-500 text-sm">{post.handle}</span>
                        <span className="text-gray-500 text-sm">· {post.time}</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </div>
                    <p className="mt-1 text-gray-900">{post.text}</p>
                    {post.img && (
                      <div className="mt-2 w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                        {/* Placeholder for image */}
                      </div>
                    )}
                    <div className="flex space-x-6 mt-3">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="text-sm">12</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-sm">3</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span className="text-sm">5</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}