import WebcamCapture from "../../components/proctoring/WebcamCapture";

const Exam = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-2xl font-bold mb-6">
        Online Examination
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Questions Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">
            Questions
          </h2>

          <p>Question will appear here...</p>
        </div>

        {/* Proctoring Section */}
        <div className="bg-white rounded-2xl p-4 shadow">
          <h2 className="text-lg font-bold mb-4">
            Proctoring
          </h2>

          <WebcamCapture />
        </div>

      </div>
    </div>
  );
};

export default Exam;