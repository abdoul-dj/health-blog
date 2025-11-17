import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white text-black flex items-center justify-between p-10 shadow-md z-50">

      
      <div className="flex items-center">
        <img
          src="/sss.png"
          alt="Logo"
          className="w-50 h-50 object-cover rounded-full"
        />
        
      </div>

      {/* MENU */}
      <div className="hidden md:flex items-center gap-9 text-md">

        {/* HOME DROPDOWN */}
        <div className=" relative group ">
          <button className="flex items-center gap-1 hover:font-bold">
            Home <FaCaretDown className="text-[12px] mt-0.5" />
          </button>

          <div className="
              absolute left-0 top-full mt-3
              bg-white shadow-xl rounded-xl p-6 w-96
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              z-50 cursor-pointer
            "
          >
            <h2 className="text-xl font-semibold mb-2">Home</h2>
            <p className="text-gray-600 mb-4">
              Quick navigation options for the homepage.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a className="hover:underline">Overview</a>
              <a className="hover:underline">Updates</a>
              <a className="hover:underline">Featured</a>
              <a className="hover:underline">Community</a>
            </div>
          </div>
        </div>

        {/* HEALTH */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:font-bold">
            Health <FaCaretDown className="text-[12px]" />
          </button>

          <div className="
              absolute left-0 top-full mt-3
              bg-white shadow-xl rounded-xl p-6 w-96
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              z-50  cursor-pointer
            "
          >
            <h2 className="text-xl font-semibold mb-2">Health Services</h2>
            <p className="text-gray-600 mb-4">Explore our health-related tools.</p>
            <div className="grid grid-cols-2 gap-2">
              <a className="hover:underline">Medical Tips</a>
              <a className="hover:underline">Checkups</a>
              <a className="hover:underline">Clinics</a>
              <a className="hover:underline">Health Plans</a>
            </div>
          </div>
        </div>

        {/* WELLNESS */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:font-bold">
            Wellness <FaCaretDown className="text-[12px]" />
          </button>

          <div className="
              absolute left-0 top-full mt-3
              bg-white shadow-xl rounded-xl p-6 w-96
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              z-50  cursor-pointer
            "
          >
            <h2 className="text-xl font-semibold mb-2">Wellness Programs</h2>
            <p className="text-gray-600 mb-4">Improve your wellbeing.</p>
            <div className="grid grid-cols-2 gap-2">
              <a className="hover:underline">Mindfulness</a>
              <a className="hover:underline">Yoga</a>
              <a className="hover:underline">Meditation</a>
              <a className="hover:underline">Sleep Guides</a>
            </div>
          </div>
        </div>

        {/* NUTRITION */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:font-bold">
            Nutrition <FaCaretDown className="text-[12px]" />
          </button>

          <div className="
              absolute left-0 top-full mt-3
              bg-white shadow-xl rounded-xl p-6 w-96
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              z-50
            "
          >
            <h2 className="text-xl font-semibold mb-2">Nutrition Plans</h2>
            <p className="text-gray-600 mb-4">
              Healthy eating guides and diet plans.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a className="hover:underline">Healthy Meals</a>
              <a className="hover:underline">Diet Plans</a>
              <a className="hover:underline">Supplements</a>
              <a className="hover:underline">Food Tracker</a>
            </div>
          </div>
        </div>

        {/* ARTICLES */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:font-bold">
            Articles <FaCaretDown className="text-[12px]" />
          </button>

          <div className="
              absolute left-0 top-full mt-3
              bg-white shadow-xl rounded-xl p-6 w-96
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              z-50  cursor-pointer
            " 
          >
            <h2 className="text-xl font-semibold mb-2">Articles</h2>
            <p className="text-gray-600 mb-4">Popular topics and news.</p>
            <div className="grid grid-cols-2 gap-2">
              <a className="hover:underline">Health News</a>
              <a className="hover:underline">Wellness Tips</a>
              <a className="hover:underline">Nutrition Advice</a>
              <a className="hover:underline">Research</a>
            </div>
          </div>
        </div>
      </div>



      



      <div className="relative group ml-5">
          <button className="flex items-center gap-1 hover:font-bold">
            Blog<FaCaretDown className="text-[12px]" />
          </button>

          <div className="
              absolute left-0 top-full mt-3
              bg-white shadow-xl rounded-xl p-6 w-40
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              z-50  cursor-pointer
            "
          >
            <h2 className="text-xl font-semibold mb-2">Articles</h2>
            <p className="text-gray-600 mb-4">blogs about our services.</p>
            <div className="grid grid-cols-2 gap-2">
              <a className="hover:underline">All</a>
              <a className="hover:underline">New</a>
              
            </div>
          </div>
        </div>
      


      {/* RIGHT ICONS */}
      <div className="flex items-center gap-4">
        <MdNotifications className="text-2xl hover:text-3xl transition-all duration-200" />
        <FaUser className="text-xl hover:text-3xl transition-all duration-200" />
      </div>
    </nav>
  );
}
