import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/auth.slice";
import toast from "react-hot-toast";

const loginUser = async ({ email, password }) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({ email, password }), 
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Login failed");
  }

  return data;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      toast.error(error.message); 
    },
    onSuccess: (data) => {
      toast.success(data.message || "Login successful!");
      dispatch(login(data));
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    
    console.log("Submitting:", { email, password });
    mutate({ email, password });
  };

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 hover:border-blue-400 transition-colors">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md p-2 hover:border-blue-400 transition-colors">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none"
                placeholder="••••••••"
                required
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
            <Link
              to="/forget-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-6 ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isPending ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
