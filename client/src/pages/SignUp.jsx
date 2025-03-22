import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Camera } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const signUpUser = async (formData) => {
  const response = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Signup failed");
  }

  return data;
};

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: signUpUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message || "Signup successful!");
      navigate("/");
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setProfileImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    if (profileImage) {
      formData.append("image", profileImage);
    }

    mutate(formData);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-96 p-6 border border-gray-700 rounded-xl shadow-2xl">
        <div className="mb-6">
          <h1 className="text-4xl text-center font-serif font-bold text-blue-600">
            Tweetz
          </h1>
          <p className="text-center text-gray-500 text-sm mt-2">
            Create your account
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Profile preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="w-12 h-12 text-gray-400" />
                )}
              </div>
              <label
                htmlFor="profile-image"
                className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <Camera className="w-5 h-5 text-white" />
              </label>
              <input
                id="profile-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 hover:border-blue-400 transition-colors">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 hover:border-blue-400 transition-colors">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full focus:outline-none"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-6"
          >
            Sign Up
          </button>
        </form>
      </div>

      <div className="absolute bottom-4 text-gray-500 text-sm">
        <p>
          Already have an account?
          <Link to={"/login"} className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
