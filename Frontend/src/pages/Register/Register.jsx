// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import API from "../../axios";
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock,
//   FaGraduationCap,
//   FaIdCard,
//   FaEye,
// } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// const Register = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       <div className="grid min-h-screen lg:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 lg:flex">
//           <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
//           <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-white/10" />

//           <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 text-white">

//             <div className="mb-8 flex items-center gap-3">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
//                 <FaGraduationCap className="text-2xl" />
//               </div>

//               <span className="text-2xl font-bold">
//                 ExamPortal
//               </span>
//             </div>

//             <h1 className="max-w-lg text-5xl font-extrabold leading-tight">
//               Start Your
//               <br />
//               Examination
//               <br />
//               <span className="text-cyan-100">
//                 Journey Today.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-lg text-lg leading-8 text-blue-50">
//               Create your account and get access to secure online exams,
//               performance tracking, results, and more.
//             </p>

//             <div className="mt-8 space-y-3 text-blue-50">
//               <p>✓ Secure student account</p>
//               <p>✓ Personalized examination dashboard</p>
//               <p>✓ Track your results and performance</p>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center justify-center px-6 py-10 lg:py-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full max-w-lg"
//           >

//             {/* Mobile Logo */}
//             <div className="mb-7 flex items-center justify-center gap-3 lg:hidden">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
//                 <FaGraduationCap />
//               </div>

//               <span className="text-2xl font-bold text-gray-900">
//                 ExamPortal
//               </span>
//             </div>

//             {/* Heading */}
//             <div className="mb-6">
//               <h2 className="text-3xl font-bold text-gray-900">
//                 Create Your Account 🚀
//               </h2>

//               <p className="mt-2 text-gray-600">
//                 Join ExamPortal and start your examination journey.
//               </p>
//             </div>

//             {/* Register Card */}
//             <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-blue-100/40 sm:p-8">

//               <form className="space-y-5">

//                 {/* Full Name */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="mb-2 block text-sm font-semibold text-gray-700"
//                   >
//                     Full Name
//                   </label>

//                   <div className="relative">
//                     <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//                     <input
//                       id="name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                     />
//                   </div>
//                 </div>

//                 {/* Email + Student ID */}
//                 <div className="grid gap-5 sm:grid-cols-2">

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-2 block text-sm font-semibold text-gray-700"
//                     >
//                       Email Address
//                     </label>

//                     <div className="relative">
//                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//                       <input
//                         id="email"
//                         type="email"
//                         placeholder="Email"
//                         className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="studentId"
//                       className="mb-2 block text-sm font-semibold text-gray-700"
//                     >
//                       Student ID
//                     </label>

//                     <div className="relative">
//                       <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//                       <input
//                         id="studentId"
//                         type="text"
//                         placeholder="Student ID"
//                         className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                       />
//                     </div>
//                   </div>

//                 </div>

//                 {/* Course + Year */}
//                 <div className="grid gap-5 sm:grid-cols-2">

//                   <div>
//                     <label
//                       htmlFor="course"
//                       className="mb-2 block text-sm font-semibold text-gray-700"
//                     >
//                       Course
//                     </label>

//                     <select
//                       id="course"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                     >
//                       <option value="">Select Course</option>
//                       <option value="btech">B.Tech</option>
//                       <option value="bca">BCA</option>
//                       <option value="bsc">B.Sc</option>
//                       <option value="mca">MCA</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="year"
//                       className="mb-2 block text-sm font-semibold text-gray-700"
//                     >
//                       Year
//                     </label>

//                     <select
//                       id="year"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                     >
//                       <option value="">Select Year</option>
//                       <option value="1">1st Year</option>
//                       <option value="2">2nd Year</option>
//                       <option value="3">3rd Year</option>
//                       <option value="4">4th Year</option>
//                     </select>
//                   </div>

//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="mb-2 block text-sm font-semibold text-gray-700"
//                   >
//                     Password
//                   </label>

//                   <div className="relative">
//                     <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//                     <input
//                       id="password"
//                       type="password"
//                       placeholder="Create a password"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                     />

//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       <FaEye />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Confirm Password */}
//                 <div>
//                   <label
//                     htmlFor="confirmPassword"
//                     className="mb-2 block text-sm font-semibold text-gray-700"
//                   >
//                     Confirm Password
//                   </label>

//                   <div className="relative">
//                     <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

//                     <input
//                       id="confirmPassword"
//                       type="password"
//                       placeholder="Confirm your password"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                     />

//                     <button
//                       type="button"
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       <FaEye />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Terms */}
//                 <div className="flex items-start gap-2">
//                   <input
//                     id="terms"
//                     type="checkbox"
//                     className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   />

//                   <label
//                     htmlFor="terms"
//                     className="text-sm leading-5 text-gray-600"
//                   >
//                     I agree to the{" "}
//                     <span className="font-medium text-blue-600">
//                       Terms & Conditions
//                     </span>{" "}
//                     and{" "}
//                     <span className="font-medium text-blue-600">
//                       Privacy Policy
//                     </span>
//                   </label>
//                 </div>

//                 {/* Create Account */}
//                 <button
//                   type="submit"
//                   className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
//                 >
//                   Create Account
//                 </button>

//               </form>

//               {/* Divider */}
//               <div className="my-6 flex items-center gap-4">
//                 <div className="h-px flex-1 bg-gray-200" />

//                 <span className="text-sm text-gray-500">
//                   OR
//                 </span>

//                 <div className="h-px flex-1 bg-gray-200" />
//               </div>

//               {/* Google */}
//               <button
//                 type="button"
//                 className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50 hover:shadow-md"
//               >
//                 <FcGoogle className="text-xl" />
//                 Sign up with Google
//               </button>

//               {/* Login Link */}
//               <p className="mt-7 text-center text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="font-semibold text-blue-600 hover:text-blue-700"
//                 >
//                   Login
//                 </Link>
//               </p>
//             </div>

//             <p className="mt-5 text-center text-xs text-gray-500">
//               © 2026 ExamPortal. All rights reserved.
//             </p>

//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
// import API from "../../api/axios";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGraduationCap,
  FaIdCard,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import API from "../../API/axios";
import { auth } from "../../API/firebase";
// import { auth } from "../../api/firebase";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    course: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    setLoading(true);

    // 1. Create account in Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredential.user;

    // 2. Save name in Firebase
    await updateProfile(user, {
      displayName: formData.name,
    });

    // 3. Get Firebase ID token
    const token = await user.getIdToken();

    // 4. Send token to backend
    const response = await API.post(
      "/auth/create-user",
      {
        token: token,
      },
      {
        withCredentials: true,
      }
    );

    console.log("Registration Response:", response.data);

    alert("Account created successfully!");

    // 5. Clear form
    setFormData({
      name: "",
      email: "",
      studentId: "",
      course: "",
      year: "",
      password: "",
      confirmPassword: "",
    });
  } catch (error) {
    console.error(
      "Registration Error:",
      error.response?.data || error.message
    );

    alert(
      error.response?.data?.message ||
        "Registration failed. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden overflow-hidden bg-linear-to-br from-blue-600 to-cyan-500 lg:flex">

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col justify-center px-12 text-white xl:px-20">

            <div className="mb-8 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <FaGraduationCap className="text-2xl" />
              </div>

              <span className="text-2xl font-bold">
                ExamPortal
              </span>

            </div>

            <h1 className="max-w-lg text-5xl font-extrabold leading-tight">
              Start Your
              <br />
              Examination
              <br />

              <span className="text-cyan-100">
                Journey Today.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-blue-50">
              Create your account and get access to secure online exams,
              performance tracking, results, and more.
            </p>

            <div className="mt-8 space-y-3 text-blue-50">
              <p>✓ Secure student account</p>
              <p>✓ Personalized examination dashboard</p>
              <p>✓ Track your results and performance</p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center px-6 py-10 lg:py-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg"
          >

            {/* Mobile Logo */}

            <div className="mb-7 flex items-center justify-center gap-3 lg:hidden">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaGraduationCap />
              </div>

              <span className="text-2xl font-bold text-gray-900">
                ExamPortal
              </span>

            </div>

            {/* Heading */}

            <div className="mb-6">

              <h2 className="text-3xl font-bold text-gray-900">
                Create Your Account 🚀
              </h2>

              <p className="mt-2 text-gray-600">
                Join ExamPortal and start your examination journey.
              </p>

            </div>

            {/* Register Card */}

            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-blue-100/40 sm:p-8">

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* ================= FULL NAME ================= */}

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <div className="relative">

                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>

                {/* ================= EMAIL + STUDENT ID ================= */}

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Email */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address
                    </label>

                    <div className="relative">

                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* Student ID */}

                  <div>

                    <label
                      htmlFor="studentId"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Student ID
                    </label>

                    <div className="relative">

                      <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        id="studentId"
                        type="text"
                        placeholder="Student ID"
                        value={formData.studentId}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                </div>

                {/* ================= COURSE + YEAR ================= */}

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Course */}

                  <div>

                    <label
                      htmlFor="course"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Course
                    </label>

                    <select
                      id="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >

                      <option value="">
                        Select Course
                      </option>

                      <option value="btech">
                        B.Tech
                      </option>

                      <option value="bca">
                        BCA
                      </option>

                      <option value="bsc">
                        B.Sc
                      </option>

                      <option value="mca">
                        MCA
                      </option>

                    </select>

                  </div>

                  {/* Year */}

                  <div>

                    <label
                      htmlFor="year"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Year
                    </label>

                    <select
                      id="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >

                      <option value="">
                        Select Year
                      </option>

                      <option value="1">
                        1st Year
                      </option>

                      <option value="2">
                        2nd Year
                      </option>

                      <option value="3">
                        3rd Year
                      </option>

                      <option value="4">
                        4th Year
                      </option>

                    </select>

                  </div>

                </div>

                {/* ================= PASSWORD ================= */}

                <div>

                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <div className="relative">

                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                  </div>

                </div>

                {/* ================= CONFIRM PASSWORD ================= */}

                <div>

                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">

                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                  </div>

                </div>

                {/* ================= TERMS ================= */}

                <div className="flex items-start gap-2">

                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm leading-5 text-gray-600"
                  >
                    I agree to the{" "}

                    <span className="font-medium text-blue-600">
                      Terms & Conditions
                    </span>{" "}

                    and{" "}

                    <span className="font-medium text-blue-600">
                      Privacy Policy
                    </span>

                  </label>

                </div>

                {/* ================= CREATE ACCOUNT ================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {loading
                    ? "Creating Account..."
                    : "Create Account"}

                </button>

              </form>

              {/* ================= DIVIDER ================= */}

              <div className="my-6 flex items-center gap-4">

                <div className="h-px flex-1 bg-gray-200" />

                <span className="text-sm text-gray-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-gray-200" />

              </div>

              {/* ================= GOOGLE ================= */}

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50 hover:shadow-md"
              >

                <FcGoogle className="text-xl" />

                Sign up with Google

              </button>

              {/* ================= LOGIN LINK ================= */}

              <p className="mt-7 text-center text-sm text-gray-600">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Login
                </Link>

              </p>

            </div>

            {/* Footer */}

            <p className="mt-5 text-center text-xs text-gray-500">
              © 2026 ExamPortal. All rights reserved.
            </p>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Register;