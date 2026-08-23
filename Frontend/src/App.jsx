import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AppRoutes from "./routes/AppRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <AppRoutes/>
  );
}

export default App;