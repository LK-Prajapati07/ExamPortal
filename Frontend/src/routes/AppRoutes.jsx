import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Landing from "../pages/Landing/Landing"

const AppRoutes=()=>{
    return (
        <Routes>
            <Route
            path="/"
            element={
                <Landing/>
            }
            />
            <Route
            path="/login"
            element={
                <Login/>
            }/>
            <Route
            path="/register"
            element={
                <Register/>
            }/>

        </Routes>
    )
}
export default AppRoutes