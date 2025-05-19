import React from "react";
import { Link } from "react-router-dom";
import { Home, Code, Wrench, Info, FileText, Users, Rocket } from "lucide-react";

const SideBarMobile = ({ isOpen, closeMenu }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Home", to: "/" },
    { icon: <Code size={20} />, label: "Problems", to: "/problems" },
    { icon: <Wrench size={20} />, label: "Solutions", to: "/solutions" },
    { icon: <Info size={20} />, label: "About", to: "/about" },
    { icon: <FileText size={20} />, label: "Blog", to: "/blog" },
    { icon: <Users size={20} />, label: "Team", to: "/team" },
    { icon: <Rocket size={20} />, label: "I’m Ready to Grow", to: "/slides" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="bg-black/75 fixed inset-0 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}
      <aside
        className={`fixed bottom-0 left-0 w-full h-[90%] bg-white text-[#373737] shadow-2xl rounded-t-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <nav className="mt-16 px-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-base text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-xl transition"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBarMobile;
