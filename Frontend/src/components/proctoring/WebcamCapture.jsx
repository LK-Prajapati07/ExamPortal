import Webcam from "react-webcam";

const WebcamCapture = () => {
  return (
    <div className="flex justify-center">
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        className="w-full max-w-md rounded-2xl border-4 border-amber-400 shadow-lg"
      />
    </div>
  );
};

export default WebcamCapture;