// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   },
// };

// const imageAnimation = {
//   hidden: {
//     opacity: 0,
//     scale: 0.9,
//     x: 50,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     x: 0,
//     transition: {
//       duration: 0.9,
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="overflow-hidden bg-linear-to-br from-blue-50 via-white to-cyan-50"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left Side */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.span
//               variants={fadeUp}
//               className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
//             >
//               AI Powered Examination Platform
//             </motion.span>

//             <motion.h1
//               variants={fadeUp}
//               className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
//             >
//               Conduct
//               <span className="text-blue-600"> Secure </span>
//               Online Exams
//               <br />
//               With Confidence
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="mt-6 text-lg text-gray-600 leading-8"
//             >
//               Create MCQ, Subjective and Coding examinations with AI-based
//               proctoring, instant evaluation, analytics and secure browser
//               support.
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               className="mt-8 flex flex-wrap gap-4"
//             >
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                 }}
//                 className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-white"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{
//                     duration: 1.2,
//                     repeat: Infinity,
//                   }}
//                 >
//                   <FaArrowRight />
//                 </motion.span>
//               </motion.button>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "#eff6ff",
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                 }}
//                 className="rounded-xl border border-blue-600 px-7 py-3 text-blue-600"
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Right Side */}
//           <motion.div
//             variants={imageAnimation}
//             initial="hidden"
//             animate="visible"
//             className="flex justify-center"
//           >
//             <motion.img
//               src="https://illustrations.popsy.co/blue/remote-work.svg"
//               alt="Hero"
//               className="w-full max-w-lg"
//               animate={{
//                 y: [0, -12, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaBrain, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50"
    >
      {/* Background Decoration */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >

            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />

                AI Powered Examination Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Conduct

              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                {" "}
                Secure
              </span>

              <br />

              Online Exams

              <br />

              <span className="text-gray-900">
                With Confidence
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0"
            >
              Create MCQ, subjective and coding examinations with
              AI-powered proctoring, instant evaluation, detailed
              analytics and secure browser support.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >

              {/* Get Started */}
              <Link to="/login">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 px-7 py-3.5 font-semibold text-white shadow-lg shadow-amber-200 transition hover:shadow-xl sm:w-auto"
                >
                  Get Started

                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </Link>

              {/* Learn More */}
              <motion.a
                href="#features"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex w-full items-center justify-center rounded-xl border-2 border-amber-500 bg-white px-7 py-3.5 font-semibold text-amber-600 transition hover:bg-amber-50 sm:w-auto"
              >
                Learn More
              </motion.a>

            </motion.div>

            {/* Trust Features */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-gray-500 lg:justify-start"
            >

              <span className="flex items-center gap-2">
                <FaShieldAlt className="text-amber-500" />
                Secure Exams
              </span>

              <span className="flex items-center gap-2">
                <FaBrain className="text-amber-500" />
                AI Proctoring
              </span>

              <span className="flex items-center gap-2">
                <FaChartLine className="text-amber-500" />
                Smart Analytics
              </span>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >

            {/* Image Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-amber-300/30 blur-3xl sm:h-96 sm:w-96" />

            {/* Decorative Circle */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-80 w-80 rounded-full border border-dashed border-amber-300 sm:h-96 sm:w-96"
            />

            {/* Popsy Illustration */}
            <motion.img
              src="https://illustrations.popsy.co/blue/remote-work.svg"
              alt="Online Examination Platform"
              className="relative z-10 w-full max-w-md drop-shadow-2xl sm:max-w-lg"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Security Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-0 top-10 z-20 hidden rounded-xl bg-white p-3 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                  <FaShieldAlt className="text-amber-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Security
                  </p>

                  <p className="font-semibold text-gray-800">
                    Protected
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Floating Results Card */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-0 z-20 hidden rounded-xl bg-white p-3 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                  <FaChartLine className="text-yellow-600" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Results
                  </p>

                  <p className="font-semibold text-gray-800">
                    Instant
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}