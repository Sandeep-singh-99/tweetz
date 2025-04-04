import React from "react";
import SuggestedUsers from "../components/SuggestedUser";
import StatusSection from "../components/StatusSection";

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <StatusSection />
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {/* Post 1 */}
            <div className="bg-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <span className="font-semibold text-white block">
                    sandeep_necoder
                  </span>
                  <span className="text-xs text-gray-400">2h ago</span>
                </div>
              </div>
              <div className="w-full h-72 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                {/* Add image or media here */}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                This is a sample post caption...
              </p>
              <div className="mt-4 flex gap-4 text-gray-400">
                <button className="hover:text-white transition-colors">
                  ❤️ 24
                </button>
                <button className="hover:text-white transition-colors">
                  💬 8
                </button>
                <button className="hover:text-white transition-colors">
                  ↳ 3
                </button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-gray-900 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  K
                </div>
                <div>
                  <span className="font-semibold text-white block">
                    itz_sameer_khan_7
                  </span>
                  <span className="text-xs text-gray-400">1h ago</span>
                </div>
              </div>
              <div className="w-full h-72 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                {/* Add image or media here */}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Another sample post caption...
              </p>
              <div className="mt-4 flex gap-4 text-gray-400">
                <button className="hover:text-white transition-colors">
                  ❤️ 15
                </button>
                <button className="hover:text-white transition-colors">
                  💬 5
                </button>
                <button className="hover:text-white transition-colors">
                  ↳ 2
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block w-80 sticky top-6 h-fit">
          <div className="bg-gray-900 rounded-xl p-5 shadow-lg border border-gray-800">
            <SuggestedUsers />
          </div>
        </div>
      </div>
    </div>
  );
}


