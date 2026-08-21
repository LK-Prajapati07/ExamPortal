import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ExamPortal
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
{/* 
          <button className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition">
            Login
          </button> */}

          <Link
          to="/login"
         className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
          >
        Login
</Link>
{/* 
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Register
          </button> */}

        <Link
          to="/register"

         className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
         >
         Register
        </Link>

        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-3xl">
          <HiOutlineMenuAlt3 />
        </button>

      </nav>
    </header>
  );
};

export default Navbar;