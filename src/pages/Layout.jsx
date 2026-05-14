import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarNav from "../components/SidebarNav";

export default function Layout() {
  return (
    <div className="min-h-screen text-white  bg-blue-600">
      <div className="max-w-[1400px] mx-auto flex gap-4 px-4">
        <SidebarNav className="bg-blue-600 " />

        <div className="flex-1 min-w-0 py-4">
          <div className="glass rounded-2xl overflow-hidden">
            <Navbar />
            <div className="p-4 sm:p-6">
              <Outlet />
            </div>
            <div className="border-t border-white">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
