import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import RequestPage from './pages/RequestPage';
import Profile from './components/Profile';
import users from './data/users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserProfileWrapper />} />
        <Route path="/request/:id" element={<RequestPage />} />
      </Routes>
    </Router>
  );
}

// Wrapper to show individual profile page
const UserProfileWrapper = () => {
  const userId = window.location.pathname.split("/").pop();
  const target = users.find((u) => u.id === parseInt(userId));
  const loggedInUserId = 1;

  if (!target) return <p>User not found</p>;
  return <Profile user={target} isLoggedIn={target.id === loggedInUserId} />;
};

export default App;
