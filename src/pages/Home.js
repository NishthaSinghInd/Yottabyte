import React from 'react';
import Profile from '../components/Profile';
import users from '../data/users';

const Home = () => {
  const loggedInUser = users[0]; // Simulate "Niyati" as logged-in
  return <Profile user={loggedInUser} isLoggedIn />;
};

export default Home;
