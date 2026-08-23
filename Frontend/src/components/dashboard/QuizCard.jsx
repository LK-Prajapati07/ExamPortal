import { motion } from "framer-motion";
import { FaQuestionCircle, FaUser } from "react-icons/fa";

const QuizCard = ({
  title,
  name,
  questions,
  createdBy,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md"
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Quiz Name */}
      <p className="mt-2 text-gray-600">
        {name}
      </p>

      {/* Questions */}
      <div className="flex items-center gap-2 mt-4 text-gray-600">
        <FaQuestionCircle className="text-orange-500" />
        <span>{questions} Questions</span>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaUser />
          <span>Created by {createdBy}</span>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition">
          Start
        </button>
      </div>
    </motion.div>
  );
};

export default QuizCard;