import { motion } from "framer-motion";

import {
  FaShieldAlt,
  FaRobot,
  FaClipboardList,
  FaChartBar,
  FaBolt,
  FaCloud,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Secure Exams",
    description:
      "Conduct exams with secure authentication and browser protection.",
  },
  {
    id: 2,
    icon: <FaRobot />,
    title: "AI Proctoring",
    description:
      "Monitor candidates using AI-powered proctoring and face detection.",
  },
  {
    id: 3,
    icon: <FaClipboardList />,
    title: "MCQ & Subjective",
    description:
      "Support objective, subjective and coding examinations.",
  },
  {
    id: 4,
    icon: <FaChartBar />,
    title: "Analytics",
    description:
      "Generate detailed reports and performance analysis instantly.",
  },
  {
    id: 5,
    icon: <FaBolt />,
    title: "Fast Performance",
    description:
      "Optimized for smooth and responsive online examinations.",
  },
  {
    id: 6,
    icon: <FaCloud />,
    title: "Cloud Storage",
    description:
      "Access exams and results securely from anywhere.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* Background Decorations */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Small Badge */}

          <span className="inline-block rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Powerful Features
          </span>

          {/* Heading */}

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Our Platform?
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Everything you need to conduct secure, modern and intelligent
            online examinations from one powerful platform.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={card}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-md transition-all duration-300 hover:border-amber-300 hover:shadow-2xl sm:p-8"
            >

              {/* Top Gradient Line */}

              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500 group-hover:w-full" />

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-yellow-400 group-hover:text-white"
              >
                {feature.icon}
              </motion.div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-600 sm:text-2xl">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>

              {/* Bottom Arrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileHover={{
                  opacity: 1,
                  x: 0,
                }}
                className="mt-5 font-semibold text-amber-600"
              >
                Explore Feature →
              </motion.div>

              {/* Decorative Glow */}

              <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-amber-200/20 blur-2xl transition-all duration-500 group-hover:bg-amber-300/30" />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;