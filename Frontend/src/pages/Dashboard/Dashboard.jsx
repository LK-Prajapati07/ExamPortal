import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";

import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Total Exams",
    value: "12",
    subtitle: "2 new exams available",
    icon: <FaBookOpen className="text-xl" />,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Completed",
    value: "9",
    subtitle: "75% completion rate",
    icon: <FaCheckCircle className="text-xl" />,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Upcoming",
    value: "3",
    subtitle: "Next exam in 2 days",
    icon: <FaClock className="text-xl" />,
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    title: "Average Score",
    value: "84%",
    subtitle: "+6% from last month",
    icon: <FaChartLine className="text-xl" />,
    iconBg: "bg-purple-100 text-purple-600",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome back, Rajani 👋
        </h1>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Here is your examination overview.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            iconBg={stat.iconBg}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;