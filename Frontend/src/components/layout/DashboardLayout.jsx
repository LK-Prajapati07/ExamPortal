import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar />

      <main className="min-h-screen">
        <div className="p-6 sm:p-8 lg:p-10">
          {children}
        </div>
      </main>

    </div>
  );
};

export default DashboardLayout;