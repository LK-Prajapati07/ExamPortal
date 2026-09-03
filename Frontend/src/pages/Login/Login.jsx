import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "../../API/firebase";
import { login } from "../../API/uthAPIconnect";

import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log("Login Data:", data);

      const responce = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const token = await responce.user.getIdToken();

      const res = await login({
        token,
      });

      console.log("Login Response:", res);

      // Login successful
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const googlelogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);

      const token = await data.user.getIdToken();

      const res = await login({ token });

      console.log("Google User:", res);
      console.log("Token:", token);

      navigate("/dashboard");
    } catch (error) {
      console.log("Google Login Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div className="relative hidden overflow-hidden bg-gradient-to-br from-amber-500 to-yellow-400 lg:flex">

          {/* Decorative circles */}

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col justify-center px-12 text-white xl:px-20">

            {/* Logo */}

            <div className="mb-8 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <FaGraduationCap className="text-2xl" />
              </div>

              <span className="text-2xl font-bold">
                ExamPortal
              </span>

            </div>

            {/* Heading */}

            <h1 className="max-w-lg text-5xl font-extrabold leading-tight">

              Your Exam.
              <br />

              Your Future.
              <br />

              <span className="text-yellow-100">
                Your Success.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-lg text-lg leading-8 text-amber-50">
              Access secure online examinations, track your performance,
              and take your academic journey to the next level.
            </p>

            {/* Security */}

            <div className="mt-8 flex items-center gap-3 text-amber-50">

              <FaShieldAlt />

              <span>
                Secure and trusted examination platform
              </span>

            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center px-6 py-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >

            {/* Mobile Logo */}

            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white">
                <FaGraduationCap />
              </div>

              <span className="text-2xl font-bold text-gray-900">
                ExamPortal
              </span>

            </div>

            {/* Heading */}

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-900">
                Welcome Back 👋
              </h2>

              <p className="mt-2 text-gray-600">
                Login to continue to your examination dashboard.
              </p>

            </div>

            {/* Login Card */}

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-amber-100/40">

              {/* ================= FORM ================= */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >

                {/* ================= EMAIL ================= */}

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
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`w-full rounded-xl border bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:bg-white focus:ring-4 focus:ring-amber-100 ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-200 focus:border-amber-500"
                      }`}
                    />

                  </div>

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}

                </div>

                {/* ================= PASSWORD ================= */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-amber-600 hover:text-amber-700"
                    >
                      Forgot Password?
                    </Link>

                  </div>

                  <div className="relative">

                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters",
                        },
                      })}
                      className={`w-full rounded-xl border bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:bg-white focus:ring-4 focus:ring-amber-100 ${
                        errors.password
                          ? "border-red-500"
                          : "border-gray-200 focus:border-amber-500"
                      }`}
                    />

                    {/* Show Password */}

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-600"
                    >
                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                  </div>

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}

                </div>

                {/* ================= REMEMBER ME ================= */}

                <div className="flex items-center gap-2">

                  <input
                    id="remember"
                    type="checkbox"
                    {...register("remember")}
                    className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-600"
                  >
                    Remember me
                  </label>

                </div>

                {/* ================= LOGIN BUTTON ================= */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-amber-500 py-3.5 font-semibold text-white transition hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>

                {/* ================= OR ================= */}

                <div className="my-6 flex items-center gap-4">

                  <div className="h-px flex-1 bg-gray-200" />

                  <span className="text-sm text-gray-500">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-gray-200" />

                </div>

                {/* ================= GOOGLE LOGIN ================= */}

                <button
                  type="button"
                  onClick={googlelogin}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-gray-700 transition hover:bg-amber-50 hover:shadow-md"
                >
                  <FcGoogle className="text-xl" />

                  Continue with Google
                </button>

              </form>

              {/* ================= REGISTER ================= */}

              <p className="mt-7 text-center text-sm text-gray-600">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="font-semibold text-amber-600 hover:text-amber-700"
                >
                  Create Account
                </Link>

              </p>

            </div>

            {/* Footer */}

            <p className="mt-6 text-center text-xs text-gray-500">
              © 2026 ExamPortal. All rights reserved.
            </p>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Login;
