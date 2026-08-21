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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              whileHover={{
                y: -12,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-2xl hover:border-blue-200 hover:bg-linear-to-br hover:from-blue-50 hover:to-indigo-50 cursor-pointer"
            >
              {/* Floating Icon */}
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
                className="text-5xl text-blue-600"
              >
                {item.icon}
              </motion.div>

              {/* Animated Number */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="mt-6 text-4xl font-bold text-gray-900"
              >
                {item.number}
              </motion.h2>

              <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors">
                {item.title}
              </p>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "60px" }}
                transition={{ duration: 0.3 }}
                className="mt-4 h-1 rounded-full bg-blue-600"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;