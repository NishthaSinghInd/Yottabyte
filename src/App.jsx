import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UserProfile from './pages/UserProfile';
import Feedback from './pages/Feedback';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="text-center mt-5"><h3>Welcome to Skill Swap Platform</h3></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </Router>
  );
}

export default App;
