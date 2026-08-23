import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaClipboardList,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Exams",
      path: "/exams",
      icon: <FaBook />,
    },
    {
      name: "My Exams",
      path: "/my-exams",
      icon: <FaClipboardList />,
    },
    {
      name: "Results",
      path: "/results",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-lg">
            E
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-800">
              ExamPortal
            </h1>

            <p className="text-xs text-gray-500">
              Student Panel
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
          Menu
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-amber-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-amber-50 hover:text-amber-600"
                }`
              }
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">

        <div className="flex items-center justify-between gap-2">

          {/* User Details */}
          <div className="flex items-center gap-3 min-w-0">

            {/* Profile Icon */}
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <FaUserCircle className="text-amber-500 text-2xl" />
            </div>

            {/* Name + Email */}
            <div className="min-w-0">
              <p className="font-semibold text-gray-800 text-sm truncate">
                Rajani Kushwaha
              </p>

              <p className="text-xs text-gray-500 truncate">
                rajani@gmail.com
              </p>
            </div>

          </div>

          {/* Logout Icon */}
          <button
            onClick={handleLogout}
            title="Logout"
            className="flex-shrink-0 p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
          >
            <FaSignOutAlt className="text-lg" />
          </button>

        </div>

      </div>
    </aside>
  );
};

export default Sidebar;