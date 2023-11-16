import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"
import Register from "./Pages/Register";
import VerifyOtp from "./Pages/Register/VerifyOtp";

const App = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/auth/sign-up" element={<Register/>}/>
                <Route path="/auth/verify-otp" element={<VerifyOtp/>}/>
            </Routes>
        </Router>
        </>
    )
}
export default App