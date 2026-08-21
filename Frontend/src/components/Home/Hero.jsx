import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-linear-to-br from-blue-50 via-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
            >
              AI Powered Examination Platform
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Conduct
              <span className="text-blue-600"> Secure </span>
              Online Exams
              <br />
              With Confidence
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-gray-600 leading-8"
            >
              Create MCQ, Subjective and Coding examinations with AI-based
              proctoring, instant evaluation, analytics and secure browser
              support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-white"
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#eff6ff",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-xl border border-blue-600 px-7 py-3 text-blue-600"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <motion.img
              src="https://illustrations.popsy.co/blue/remote-work.svg"
              alt="Hero"
              className="w-full max-w-lg"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}