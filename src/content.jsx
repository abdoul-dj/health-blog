import { FaSearch } from "react-icons/fa";
import Cardi from "./crd";
import Card from "./Card";

const projects = [
  { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800", content: "health", likes: "70k", views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800", content: "mental", likes: 132, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800", content: "physical", likes: 92, views: "7.6k" },
  { image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800", content: "wellness", likes: 7, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1532798442725-41036acc7489?w=800", content: "sport", likes: 7, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", content: "leisure", likes: 7, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800", content: "protect", likes: "70k", views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800", content: "diseases", likes: 132, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=800", content: "health", likes: 92, views: "7.6k" },
  { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800", content: "protec", likes: "70k", views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800", content: "disease", likes: 132, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=800", content: "health", likes: 92, views: "7.6k" },
  { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800", content: "health", likes: "70k", views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800", content: "mental", likes: 132, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800", content: "physical", likes: 92, views: "7.6k" },
  { image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800", content: "wellness", likes: 7, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1532798442725-41036acc7489?w=800", content: "sport", likes: 7, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", content: "leisure", likes: 7, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800", content: "protect", likes: "70k", views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800", content: "diseases", likes: 132, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=800", content: "health", likes: 92, views: "7.6k" },
  { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800", content: "protec", likes: "70k", views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800", content: "disease", likes: 132, views: "8.8k" },
  { image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=800", content: "health", likes: 92, views: "7.6k" }
];




export default function Content() {
  return (
      <div className="px-12 mt-15 font-poppins ">
    
      <div className="flex flex-col lg:flex-row  items-center gap-10 mt-10">
        
        <div className="flex-1 mt-20">
          <h1 className="text-4xl font-bold text-black mb-6 leading-snug">
            Get started with best advice for <br /> your Health
          </h1>
          <p className="text-black mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
            quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-[#8E36CF] text-white text-xl px-6 py-2 rounded cursor-pointer hover:scale-105 transition-transform mb-6">
            Join now
          </button>

        
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Discover everything here!!"
              className="w-full h-12 rounded-[10px] bg-[#A6A09F]/30 pl-4 pr-12 border border-gray-300 outline-none focus:ring-2 focus:ring-[#8E36CF]"
            />
            <FaSearch className="absolute right-3 top-3 text-xl text-gray-600 cursor-pointer" />
          </div>
        </div>

        
        <div className="flex-1 flex  justify-center">
          <img
            src="/now.png"
            alt="Woman"
            className="w-[700px] h-auto mt-20 object-cover rounded-xl"
          />
        </div>
      </div>





 {/* Popular Courses Section with Left Sidebar */}
<section className="mt-20">
  <h2 className="text-center text-gray-500 tracking-wide mb-6">POPULAR COURSES</h2>

  <div className="flex flex-col lg:flex-row gap-8">
    {/* LEFT SIDEBAR */}
    <aside className="w-full lg:w-80 bg-white  rounded-xl shadow p-4">
      <h3 className="text-2xl font-bold mb-4">Choose a top-rated program</h3>

      <ul className="space-y-2">
        <li className="flex items-center justify-between p-3 bg-[#F7F7FB] rounded-md">
          <span className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Popular Courses
          </span>
          <span className="text-gray-400">›</span>
        </li>

        <li className="p-3 rounded-md hover:bg-gray-50 cursor-pointer flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/></svg>
          AI & Machine Learning
        </li>

        <li className="p-3 rounded-md hover:bg-gray-50 cursor-pointer flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"/></svg>
          Data Science & Analytics
        </li>

        <li className="p-3 rounded-md hover:bg-gray-50 cursor-pointer flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.2"/></svg>
          Generative AI
        </li>

        <li className="p-3 rounded-md hover:bg-gray-50 cursor-pointer flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" stroke="currentColor" strokeWidth="0.8" fill="none"/></svg>
          Software & Tech
        </li>

        <li className="p-3 rounded-md hover:bg-gray-50 cursor-pointer flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M12 2a5 5 0 100 10 5 5 0 000-10zM3 22c3-5 9-7 9-7s6 2 9 7" stroke="currentColor" strokeWidth="0.9" fill="none"/></svg>
          Healthcare
        </li>

        <li className="mt-3 text-center">
          <button className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100">Show more</button>
        </li>
      </ul>
    </aside>

    {/* RIGHT: Cards Grid */}
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Course Card - reuseable pattern; create as many as you need */}
        {[
          {
            title: "PG Program in Artificial Intelligence and Machine Learning",
            subtitle: "7 months · Online · Weekend",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
          },
          {
            title: "No Code AI and Machine Learning: Building Data Science Solutions",
            subtitle: "12 weeks · Online · Weekend",
            img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900"
          },
          {
            title: "Applied AI and Data Science Program",
            subtitle: "14 weeks · Live Online · Weekdays",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
          },
          {
            title: "Data Science and Machine Learning Program",
            subtitle: "12 weeks · Online · Weekend",
            img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900"
          },
          {
            title: "Applied AI and Data Science Program",
            subtitle: "14 weeks · Live Online · Weekdays",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
          },
          {
            title: "Applied AI and Data Science Program",
            subtitle: "14 weeks · Live Online · Weekdays",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
          }
        ].map((course, i) => (
          <article key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img className="w-full h-44 object-cover" src={course.img} alt={course.title} />
            <div className="p-4">
              <p className="text-xs uppercase text-gray-400 tracking-wide mb-2">MCCOMBS SCHOOL OF BUSINESS</p>
              <h4 className="font-semibold text-lg leading-tight">{course.title}</h4>
              <p className="text-sm text-gray-500 mt-2">{course.subtitle}</p>
              <button className="mt-4 text-[#8E36CF] font-semibold">View Program</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>




{/* Invest in Yourself Section */}
<section className="mt-28 text-center px-6">
  
  <p className="text-sm font-semibold tracking-wider text-purple-600">
    YOUR GOALS ARE OUR GOALS
  </p>

  <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A1A2F] leading-tight mt-3">
    Invest in yourself today. <br /> 
    Unlock success for a lifetime.
  </h1>

  <p className="text-gray-600 max-w-2xl mx-auto mt-4">
    Great Learning offers a unique blend of learning methods — including lectures 
    from top faculty, group discussions and mentoring sessions, that keep learners 
    motivated every step of the way.
  </p>

  {/* Stats */}
  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20 max-w-4xl mx-auto">

    <div>
      <h2 className="text-3xl font-extrabold text-orange-500">9 Million</h2>
      <p className="text-xs tracking-widest text-gray-500 mt-2">
        STUDENTS ENROLLED
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-extrabold text-orange-500">96%</h2>
      <p className="text-xs tracking-widest text-gray-500 mt-2">
        SATISFACTION RATE
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-extrabold text-orange-500">91%</h2>
      <p className="text-xs tracking-widest text-gray-500 mt-2">
        PROGRAM COMPLETION RATE
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-extrabold text-orange-500">4.6/5</h2>
      <p className="text-xs tracking-widest text-gray-500 mt-2">
        FACULTY RATING
      </p>
    </div>

  </div>

</section>





      
      <main className="mt-20">
        
        <div className="flex flex-wrap  justify-between bg-white shadow px-6 py-4 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800">Discover</h1>

          <div className="flex  gap-12  text-gray-600 font-medium">
            <a href="#">Advices</a>
            <a href="#">Mental</a>
            <a href="#">Physical</a>
            <a href="#">Diseases</a>
            <a href="#">Protection</a>
            <a href="#">Wellness</a>
            <a href="#">Sport</a>
            <a href="#">Leisure</a>
            <button className="border px-3 py-1 rounded-lg hover:bg-gray-100 transition">
              Filters
            </button>
            
          </div>
        </div>



  




        
        <div className="mt-[20px] grid grid-cols-2   text-sm sm:grid-cols-4 lg:grid-cols-5 gap-9">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
            
          ))}
        </div>
      </main>
      
      
    </div>
  );
}
