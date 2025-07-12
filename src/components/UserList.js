import React from 'react';
import { Link } from 'react-router-dom';
import '../SkillSwap.css';

const UserList = ({ users, excludeId }) => {
  const filtered = users.filter((user) => user.id !== excludeId);

  return (
    <div className="container">
      <h2>Explore Other Users</h2>
      {filtered.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p><strong>Skills:</strong> {user.offeredSkills.join(', ')}</p>
          <Link to={`/user/${user.id}`}>
            <button className="request-btn">View Profile</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
