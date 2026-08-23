import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaBookOpen,
  FaChalkboardTeacher,
  FaServer,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUserGraduate />,
    number: "10K+",
    title: "Students",
  },
  {
    id: 2,
    icon: <FaBookOpen />,
    number: "500+",
    title: "Exams Conducted",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    number: "100+",
    title: "Faculty Members",
  },
  {
    id: 4,
    icon: <FaServer />,
    number: "99.9%",
    title: "Platform Uptime",
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
    },
  },
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">

      {/* Background Decoration */}

      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Our Platform
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            A secure and reliable examination platform designed for
            students, faculty and institutions.
          </p>
        </motion.div>

        {/* Stats Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          {stats.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-md transition-all duration-300 hover:border-amber-300 hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50 hover:shadow-xl sm:p-8"
            >

              {/* Top Gradient Line */}

              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500 group-hover:w-full" />

              {/* Icon */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  rotate: 8,
                  scale: 1.2,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-3xl text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white"
              >
                {item.icon}
              </motion.div>

              {/* Number */}

              <motion.h2
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="mt-6 text-4xl font-extrabold text-gray-900"
              >
                {item.number}
              </motion.h2>

              {/* Title */}

              <p className="mt-2 font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                {item.title}
              </p>

              {/* Underline */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileHover={{
                  width: "60px",
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-4 h-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
              />

              {/* Bottom Glow */}

              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-amber-200/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Stats;