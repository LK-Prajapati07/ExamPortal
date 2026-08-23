import { useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import QuizCard from "../../components/dashboard/QuizCard";
import { getCurrentUser } from "../../API/uthAPIconnect";


const Dashboard = () => {
   useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCurrentUser();

        console.log("API Response:", res.data);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-gray-900">
        Welcome back, Rahul 👋
      </h1>

      <p className="mt-2 text-gray-500">
        Ready to start your examination?
      </p>

      <div className="mt-10">
  <h2 className="text-2xl font-bold text-gray-900 mb-5">
    Available Quizzes
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    <QuizCard
      title="JavaScript Fundamentals"
      name="JavaScript Quiz"
      questions={20}
      createdBy="Base"
    />

    <QuizCard
      title="React Basics"
      name="React.js Quiz"
      questions={25}
      createdBy="Base"
    />

    <QuizCard
      title="Database Management"
      name="DBMS Quiz"
      questions={30}
      createdBy="Base"
    />

  </div>
</div>

    </DashboardLayout>
  );
};

export default Dashboard;