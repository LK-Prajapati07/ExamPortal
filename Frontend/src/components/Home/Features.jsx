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

// Container Animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card Animation
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

const Features = () => {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our Platform?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to conduct secure,
            modern and intelligent online examinations.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={card}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="group rounded-2xl bg-white p-8 shadow-md hover:shadow-2xl border border-transparent hover:border-blue-200 cursor-pointer"
            >
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
                className="text-5xl text-blue-600"
              >
                {feature.icon}
              </motion.div>

              <h3 className="mt-6 text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;