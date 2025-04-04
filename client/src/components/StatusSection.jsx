import React from "react";

// Sample data for user stories (you can replace this with an API call)
const userStories = [
  { username: "sandeep_necoder", profilePic: "https://via.placeholder.com/60", hasStory: true },
  { username: "itz_sameer_khan_7", profilePic: "https://via.placeholder.com/60", hasStory: true },
  { username: "instagram", profilePic: "https://via.placeholder.com/60", hasStory: false },
  { username: "thakurakash.singh_3", profilePic: "https://via.placeholder.com/60", hasStory: true },
  { username: "rishabh_thakur_05", profilePic: "https://via.placeholder.com/60", hasStory: false },
  { username: "kapilkaushik4", profilePic: "https://via.placeholder.com/60", hasStory: true },
];

const StatusSection = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-hide">
      {userStories.map((user, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
              user.hasStory ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" : "bg-gray-300"
            } p-1`}
          >
            <img
              src={user.profilePic}
              alt={`${user.username} story`}
              className="w-14 h-14 rounded-full object-cover border-2 border-white"
            />
          </div>
          <span className="text-xs text-gray-200 mt-1 truncate w-16 text-center">
            {user.username}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatusSection;