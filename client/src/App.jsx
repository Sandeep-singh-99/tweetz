import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SideBar from "./components/SideBar";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";
import { isCheckAuth } from "./redux/slice/auth.slice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isCheckAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-black text-white">
        <SideBar />
        <main className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
          <div className="max-w-5xl mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
                      <h1 className="text-5xl font-bold text-white mb-2">404</h1>
                      <p className="text-gray-400 mb-6">Page Not Found</p>
                      <a
                        href="/"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Back to Home
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>
        </main>
      </div>

      <Toaster
        position="top-right"
        containerStyle={{ top: 20, right: 20 }}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#ffffff",
            borderRadius: "12px",
            padding: "16px 24px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
          success: {
            style: {
              background: "#15803d",
              border: "1px solid rgba(22, 163, 74, 0.3)",
            },
            iconTheme: {
              primary: "#ffffff",
              secondary: "#15803d",
            },
          },
          error: {
            style: {
              background: "#b91c1c",
              border: "1px solid rgba(185, 28, 28, 0.3)",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}


