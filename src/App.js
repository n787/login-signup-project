import "./App.css";
import LoginSignup from "./components/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the LoginSignup component (Login page) */}
        <Route path="/" element={<LoginSignup />} />

        {/* Route for the Signup component */}
        <Route
          path="/signup"
          element={<LoginSignup signupClickedInit={true} />}
        />

        {/* Route for the Home component */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
