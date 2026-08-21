import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import StatCard from "../../components/dashboard/StatCard";
import {
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaHome,
  FaClipboardList,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "My Exams",
      path: "/dashboard/exams",
      icon: <FaClipboardList />,
    },
    {
      id: 3,
      name: "Results",
      path: "/dashboard/results",
      icon: <FaChartBar />,
    },
    {
      id: 4,
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser />,
    },
    {
      id: 5,
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  const upcomingExams = [
  {
    id: 1,
    subject: "Java Programming",
    type: "MCQ Examination",
    duration: "60 min",
    questions: 50,
    status: "Upcoming",
  },
  {
    id: 2,
    subject: "Database Management System",
    type: "MCQ + Subjective",
    duration: "75 min",
    questions: 40,
    status: "Upcoming",
  },
  {
    id: 3,
    subject: "Data Structures",
    type: "Coding Assessment",
    duration: "90 min",
    questions: 3,
    status: "Upcoming",
  },
];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= TOP HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-4 sm:px-6">

          {/* Left */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            >
              <FaBars />
            </button>

            {/* Logo */}
            <Link
              to="/dashboard"
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaGraduationCap />
              </div>

              <span className="hidden text-xl font-bold text-gray-900 sm:block">
                ExamPortal
              </span>
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Notification */}
            <button className="relative rounded-full p-3 text-gray-600 hover:bg-gray-100">
              <FaBell />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* User */}
            <div className="hidden items-center gap-3 border-l border-gray-200 pl-4 sm:flex">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                R
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Rohit
                </p>

                <p className="text-xs text-gray-500">
                  Student
                </p>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform bg-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">

          <Link
            to="/dashboard"
            className="flex items-center gap-2"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FaGraduationCap />
            </div>

            <span className="text-lg font-bold text-gray-900">
              ExamPortal
            </span>
          </Link>

          {/* Mobile Close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <FaTimes />
          </button>

        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          <div className="space-y-2">

            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/dashboard"}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                {item.name}
              </NavLink>
            ))}

          </div>

        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-0 right-0 px-4">

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-16 lg:ml-72">
        <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>

    </div>
  );
};

export default DashboardLayout;