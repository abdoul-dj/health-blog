// Home.jsx

import React from "react";
import JetCard from "./crd";
import KidCareHero from "./bby";
import PediatricHero from "./bottom";
import CourseLandingPage from "./parterners";
import PopularCoursesSection from "./last";

import {
  Search,
} from "lucide-react";

export default function BioLearning() {

  const courses = [
    {
      image:
        "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200&auto=format&fit=crop",
      title: "Study About Human Body",
      lesson: "The middle lesson",
      duration: "1h 25 min",
      rating: "4.7",
    },

    {
      image:
        "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop",
      title: "Chemistry Laboratory",
      lesson: "Advanced chemistry",
      duration: "2h 10 min",
      rating: "4.9",
    },

    {
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      title: "Physics And Motion",
      lesson: "Beginner course",
      duration: "45 min",
      rating: "4.5",
    },

    {
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop",
      title: "Science Space Study",
      lesson: "Professional lesson",
      duration: "3h 05 min",
      rating: "5.0",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f6fb] overflow-hidden">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-8 relative">

        {/* BLUR EFFECTS */}
        <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] bg-purple-200 blur-[120px] opacity-50 rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-purple-100 blur-[120px] opacity-50 rounded-full"></div>

        {/* NAVBAR */}
        <nav className="fixed bg-white h-15 mt-5 mr-500 flex rounded-md items-center justify-between py-5   z-20">

          {/* LEFT */}
          <div className="flex mr-40 gap-2 items-center ">

            <div className="w-14  h-14 rounded-full overflow-hidden">
              <img
                src="bnbn.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold  text-gray-800">
              ScienceLearn
            </h1>

          </div>

          {/* CENTER */}
          <div className="hidden  lg:flex items-center  gap-12 text-[15px] font-medium text-gray-700">

            <a href="/" className="hover:text-blue-500 transition">
              Home
            </a>

            <a href="/" className="hover:text-blue-500 transition">
              About
            </a>

            <a href="/" className="hover:text-blue-500 transition">
              Quizzes
            </a>

            <a href="/" className="hover:text-blue-500 transition">
              Certificates
            </a>
            <a href="/" className="hover:text-blue-500 transition">
              lessons
            </a>
             
            <a href="/" className="hover:text-blue-500 transition">
              Contact
            </a> <a href="/" className="hover:text-blue-500 transition">
              tips
            </a>



          </div>

          {/* RIGHT */}
          <div className="flex gap-4 ml-22 items-center ">

            <button className="px-5 py-2 border border-[#C4419F] text-[#C4419F] rounded-xl font-medium">
              Login
            </button>

            <button className="px-3 py-2  bg-[#C4419F] hover:bg-blue-600 text-white rounded-xl font-medium transition">
              Signup
            </button>

          </div>

        </nav>

        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mt-16 relative z-10">

          {/* LEFT */}
          <div>

            <h1 className="text-6xl mt-32 font-extrabold leading-tight text-gray-900">

              Learn Science.
              <br />

              Understand{" "}
              <span className="text-[#B83092]">
                Better.
              </span>

              <br />

              <span className="text-[#B83092]">
                Build Your Future.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-gray-600 text-lg leading-relaxed">
              Interactive lessons, smart quizzes and recognized certificates
              to help you master science and prepare for your dream career.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-5 mt-10">

              <button className="bg-[#C4419F] hover:bg-blue-600  px-6 py-3 rounded-xl shadow-xl transition font-medium">
                Start Learning
              </button>

              <button className="border border-[#C4419F] hover:bg-blue-50 text-[#C4419F] px-6 py-3 rounded-xl transition font-medium">
                Explore Courses
              </button>

            </div>

            {/* SEARCH */}
            <div className="mt-10 relative max-w-xl">

              <input
                type="text"
                placeholder="Search science topics..."
                className="w-full bg-white border border-blue-200 rounded-xl px-5 py-4 outline-none shadow-sm"
              />

              <button className="absolute right-1 top-1 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl">
                <Search size={20} />
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <img
              src="hjhj.png"
              alt="hero"
              className="w-full  max-w-xl object-cover rounded-xl "
            />

          </div>

        </section>

        {/* COURSES */}
        <section className="mt-28 relative z-10">

          {/* TITLE */}
          <div className="flex items-center justify-between mb-10">

            <div>
              <h2 className="text-4xl font-bold text-gray-800">
                Featured Courses
              </h2>

              <p className="text-gray-500 mt-2">
                Explore the most popular science lessons
              </p>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl transition">
              View All
            </button>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {courses.map((course, index) => (
              <JetCard
                key={index}
                image={course.image}
                title={course.title}
                lesson={course.lesson}
                duration={course.duration}
                rating={course.rating}
              />
            ))}

          </div>

        </section>

        {/* BABY SECTION */}
        <section className="mt-32">
          <KidCareHero />
        </section>

        {/* BOTTOM SECTION */}
        <section className="mt-32 mb-20">
          <PediatricHero />
          <CourseLandingPage />
          <PopularCoursesSection />
          
        </section>

      </div>
    </div>
  );
}