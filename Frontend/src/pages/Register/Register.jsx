import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGraduationCap,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import API from "../../API/axios";
import { auth } from "../../API/firebase";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ================= REACT HOOK FORM =================

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  // ================= EMAIL/PASSWORD REGISTER =================

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // 1. Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      // 2. Save name in Firebase
      await updateProfile(user, {
        displayName: data.name,
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

      // 5. Reset form
      reset();

      // 6. Go to login
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response?.data || error.message
      );

      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered.");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        alert("Please enter a valid email address.");
      } else {
        alert(
          error.response?.data?.message ||
            "Registration failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // ================= GOOGLE SIGN UP =================

  const handleGoogleSignup = async () => {
    try {
      setGoogleLoading(true);

      const provider = new GoogleAuthProvider();

      // 1. Google authentication
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // 2. Firebase ID token
      const token = await user.getIdToken();

      // 3. Send token to backend
      const response = await API.post(
        "/auth/create-user",
        {
          token: token,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Google Registration Response:", response.data);

      alert("Google account created successfully!");

      navigate("/login");
    } catch (error) {
      console.error(
        "Google Registration Error:",
        error.response?.data || error.message
      );

      if (error.code === "auth/popup-closed-by-user") {
        alert("Google signup was cancelled.");
      } else if (error.code === "auth/popup-blocked") {
        alert("Please allow popups for Google signup.");
      } else {
        alert(
          error.response?.data?.message ||
            "Google registration failed. Please try again."
        );
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <div className="relative hidden overflow-hidden bg-gradient-to-br from-amber-500 to-yellow-400 lg:flex">

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-white/10" />

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

              Start Your
              <br />

              Examination
              <br />

              <span className="text-yellow-100">
                Journey Today.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-lg text-lg leading-8 text-amber-50">
              Create your account and get access to secure online exams,
              performance tracking, results, and more.
            </p>

            {/* Features */}

            <div className="mt-8 space-y-3 text-amber-50">
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

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white">
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

            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-amber-100/40 sm:p-8">

              <form
                onSubmit={handleSubmit(onSubmit)}
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
                      {...register("name", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                    />

                  </div>

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}

                </div>

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
                          value:
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
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
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters",
                        },
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                    />

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
                      {...register("confirmPassword", {
                        required:
                          "Please confirm your password",
                        validate: (value) =>
                          value === password ||
                          "Passwords do not match",
                      })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-600"
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                  </div>

                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}

                </div>

                {/* ================= TERMS ================= */}

                <div className="flex items-start gap-2">

                  <input
                    id="terms"
                    type="checkbox"
                    {...register("terms", {
                      required:
                        "You must accept the Terms & Conditions",
                    })}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm leading-5 text-gray-600"
                  >
                    I agree to{" "}

                    <span className="font-medium text-amber-600">
                      Terms & Conditions
                    </span>{" "}

                    and{" "}

                    <span className="font-medium text-amber-600">
                      Privacy Policy
                    </span>
                  </label>

                </div>

                {errors.terms && (
                  <p className="-mt-3 text-sm text-red-500">
                    {errors.terms.message}
                  </p>
                )}

                {/* ================= CREATE ACCOUNT ================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-amber-500 py-3.5 font-semibold text-white transition hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
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
                onClick={handleGoogleSignup}
                disabled={googleLoading}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-gray-700 transition hover:bg-amber-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >

                <FcGoogle className="text-2xl" />

                {googleLoading
                  ? "Signing up with Google..."
                  : "Sign up with Google"}

              </button>

              {/* ================= LOGIN ================= */}

              <p className="mt-7 text-center text-sm text-gray-600">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-amber-600 hover:text-amber-700"
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