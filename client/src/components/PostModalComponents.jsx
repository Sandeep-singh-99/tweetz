// PostModal.jsx
import { ImageMinus } from "lucide-react";
import { HiGif } from "react-icons/hi2";
import React from "react";

// Icons (you can use a library like react-icons for these)
const PollIcon = () => <span>📊</span>;
const EmojiIcon = () => <span>😊</span>;
const LocationIcon = () => <span>📍</span>;

export default function PostModalComponents({ isOpen, onClose, userInitial = "S" }) {
  const [postContent, setPostContent] = React.useState("");
  const [mediaFile, setMediaFile] = React.useState(null);
  const maxLength = 280; 

  // Handle posting logic
  const handlePost = () => {
    if (!postContent.trim()) return; 
    console.log("Posting:", { content: postContent, media: mediaFile });
    setPostContent("");
    setMediaFile(null);
    onClose();
  };

  // Handle media file selection
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(URL.createObjectURL(file));
    }
  };

  // Handle clicks outside the modal to close it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Reset state when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      setPostContent("");
      setMediaFile(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      id="post_modal"
      className="modal modal-middle"
      open={isOpen}
      onClick={handleOverlayClick}
      aria-labelledby="post_modal_title"
    >
      <div className="modal-box shadow-2xl shadow-white/10 text-white w-full max-w-lg rounded-lg">
        {/* Header with close button */}
        <div className="flex justify-between items-center">
          <button onClick={onClose} className="text-white text-xl">
            ✕
          </button>
          <button className="text-blue-500 hover:underline text-sm">
            Drafts
          </button>
        </div>

        {/* Main content */}
        <div className="flex mt-4">
          {/* User Avatar */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
              {userInitial}
            </div>
          </div>

          {/* Post Input Area */}
          <div className="flex-1 ml-3">
            <textarea
              className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none"
              placeholder="What's happening?"
              rows="3"
              maxLength={maxLength}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              aria-label="Post content"
            ></textarea>

            {/* Reply Settings */}
            <div className="flex items-center text-blue-500 text-sm mt-2">
              <span className="mr-1">🌐</span>
              <span>Everyone can reply</span>
            </div>

            {/* Media Preview */}
            {mediaFile && (
              <div className="mt-2">
                <img
                  src={mediaFile}
                  alt="Selected media preview"
                  className="max-w-full h-auto rounded-md"
                />
                <button
                  className="text-red-500 text-sm mt-1"
                  onClick={() => setMediaFile(null)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Toolbar and Post Button */}
        <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-2">
          <div className="flex space-x-3">
            <label className="cursor-pointer text-blue-500">
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleMediaChange}
                aria-label="Upload media"
              />
              <ImageMinus/>
            </label>
            <button className="text-blue-500" disabled>
            <HiGif size={25} />
            </button>
            <button className="text-blue-500" disabled>
              <PollIcon />
            </button>
            <button className="text-blue-500" disabled>
              <EmojiIcon />
            </button>
            <button className="text-blue-500" disabled>
              <LocationIcon />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {postContent.length}/{maxLength}
            </span>
            <button
              className="btn bg-gray-600 text-white rounded-full px-4 py-1"
              onClick={handlePost}
              disabled={!postContent.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}