import { FaClock, FaFileAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ExamCard = ({ exam }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Exam Info */}
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <FaFileAlt className="text-xl" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {exam.subject}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {exam.type}
            </p>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FaClock />
                {exam.duration}
              </span>

              <span>
                {exam.questions} Questions
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            {exam.status}
          </span>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Start Exam
            <FaArrowRight className="text-xs" />
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default ExamCard;