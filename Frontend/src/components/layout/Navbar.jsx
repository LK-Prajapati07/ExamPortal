// // import { Link } from "react-router-dom";
// // import { HiOutlineMenuAlt3 } from "react-icons/hi";

// // const Navbar = () => {
// //   return (
// //     <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
// //       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

// //         {/* Logo */}
// //         <Link to="/" className="text-2xl font-bold text-blue-600">
// //           ExamPortal
// //         </Link>

// //         {/* Navigation Links */}
// //         <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
// //           <li>
// //             <a href="#home" className="hover:text-blue-600 transition">
// //               Home
// //             </a>
// //           </li>

// //           <li>
// //             <a href="#features" className="hover:text-blue-600 transition">
// //               Features
// //             </a>
// //           </li>

// //           <li>
// //             <a href="#about" className="hover:text-blue-600 transition">
// //               About
// //             </a>
// //           </li>

// //           <li>
// //             <a href="#contact" className="hover:text-blue-600 transition">
// //               Contact
// //             </a>
// //           </li>
// //         </ul>

// //         {/* Buttons */}
// //         <div className="hidden md:flex gap-3">
// // {/* 
// //           <button className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition">
// //             Login
// //           </button> */}

// //           <Link
// //           to="/login"
// //          className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
// //           >
// //         Login
// // </Link>
// // {/* 
// //           <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
// //             Register
// //           </button> */}

// //         <Link
// //           to="/register"

// //          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
// //          >
// //          Register
// //         </Link>

// //         </div>

// //         {/* Mobile Menu */}
// //         <button className="md:hidden text-3xl">
// //           <HiOutlineMenuAlt3 />
// //         </button>

// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

//         {/* Logo */}
//         <Link
//           to="/"
//           onClick={closeMenu}
//           className="flex items-center gap-2"
//         >
//           {/* Logo Icon */}
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400 text-white font-bold shadow-md shadow-amber-200">
//             E
//           </div>

//           {/* Logo Text */}
//           <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
//             ExamPortal
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

//           <li>
//             <a
//               href="#home"
//               className="transition duration-300 hover:text-amber-600"
//             >
//               Home
//             </a>
//           </li>

//           <li>
//             <a
//               href="#features"
//               className="transition duration-300 hover:text-amber-600"
//             >
//               Features
//             </a>
//           </li>

//           <li>
//             <a
//               href="#about"
//               className="transition duration-300 hover:text-amber-600"
//             >
//               About
//             </a>
//           </li>

//           <li>
//             <a
//               href="#contact"
//               className="transition duration-300 hover:text-amber-600"
//             >
//               Contact
//             </a>
//           </li>

//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center gap-3">

//           {/* Login */}
//           <Link
//             to="/login"
//             className="rounded-xl border border-amber-500 px-5 py-2.5 font-medium text-amber-600 transition duration-300 hover:bg-amber-50 hover:-translate-y-0.5"
//           >
//             Login
//           </Link>

//           {/* Register */}
//           <Link
//             to="/register"
//             className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 px-5 py-2.5 font-medium text-white shadow-md shadow-amber-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
//           >
//             Register
//           </Link>

//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden rounded-xl p-2 text-2xl text-gray-700 transition duration-300 hover:bg-amber-50 hover:text-amber-600"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
//         </button>

//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-5 pt-3 shadow-lg">

//           <div className="flex flex-col gap-1">

//             {/* Home */}
//             <a
//               href="#home"
//               onClick={closeMenu}
//               className="rounded-lg px-4 py-3 font-medium text-gray-700 transition duration-300 hover:bg-amber-50 hover:text-amber-600"
//             >
//               Home
//             </a>

//             {/* Features */}
//             <a
//               href="#features"
//               onClick={closeMenu}
//               className="rounded-lg px-4 py-3 font-medium text-gray-700 transition duration-300 hover:bg-amber-50 hover:text-amber-600"
//             >
//               Features
//             </a>

//             {/* About */}
//             <a
//               href="#about"
//               onClick={closeMenu}
//               className="rounded-lg px-4 py-3 font-medium text-gray-700 transition duration-300 hover:bg-amber-50 hover:text-amber-600"
//             >
//               About
//             </a>

//             {/* Contact */}
//             <a
//               href="#contact"
//               onClick={closeMenu}
//               className="rounded-lg px-4 py-3 font-medium text-gray-700 transition duration-300 hover:bg-amber-50 hover:text-amber-600"
//             >
//               Contact
//             </a>

//             {/* Mobile Buttons */}
//             <div className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">

//               {/* Mobile Login */}
//               <Link
//                 to="/login"
//                 onClick={closeMenu}
//                 className="rounded-xl border border-amber-500 px-4 py-2.5 text-center font-medium text-amber-600 transition duration-300 hover:bg-amber-50"
//               >
//                 Login
//               </Link>

//               {/* Mobile Register */}
//               <Link
//                 to="/register"
//                 onClick={closeMenu}
//                 className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 px-4 py-2.5 text-center font-medium text-white shadow-md shadow-amber-200 transition duration-300 hover:shadow-lg"
//               >
//                 Register
//               </Link>

//             </div>

//           </div>

//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-amber-600"
        >
          ExamPortal
        </Link>

        {/* Navigation Links */}

        <ul className="hidden items-center gap-8 font-medium text-gray-700 md:flex">

          <li>
            <a
              href="#home"
              className="transition hover:text-amber-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#features"
              className="transition hover:text-amber-600"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition hover:text-amber-600"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-amber-600"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Buttons */}

        <div className="hidden gap-3 md:flex">

          <Link
            to="/login"
            className="rounded-lg border border-amber-500 px-5 py-2 text-amber-600 transition hover:bg-amber-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-amber-500 px-5 py-2 text-white transition hover:bg-amber-600"
          >
            Register
          </Link>

        </div>

        {/* Mobile Menu */}

        <button className="text-3xl text-amber-600 md:hidden">
          <HiOutlineMenuAlt3 />
        </button>

      </nav>
    </header>
  );
};

export default Navbar;