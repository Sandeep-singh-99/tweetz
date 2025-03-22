import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SideBar from "./components/SideBar";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content Area */}
        <main className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              {/* 404 Route */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="text-center p-8 bg-white rounded-xl shadow-md border border-gray-200">
                      <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        404
                      </h1>
                      <p className="text-gray-600">Page Not Found</p>
                      <a
                        href="/"
                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        Go Home
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
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937", 
            color: "#ffffff",
            borderRadius: "8px",
            padding: "12px 20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
          success: {
            style: {
              background: "#15803d", 
            },
          },
          error: {
            style: {
              background: "#b91c1c", 
            },
          },
        }}
      />
    </BrowserRouter>
  );
}
