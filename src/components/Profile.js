import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../SkillSwap.css';

const Profile = ({ user, isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-photo" />
        <h2>{user.name}</h2>

        <p><strong>Skills Offered:</strong></p>
        <div className="skills">
          {user.offeredSkills.map((skill, i) => (
            <div key={i} className="skill-badge">{skill}</div>
          ))}
        </div>

        <p><strong>Skills Wanted:</strong></p>
        <div className="skills">
          {user.wantedSkills.map((skill, i) => (
            <div key={i} className="skill-badge">{skill}</div>
          ))}
        </div>

        <p><strong>Rating:</strong> ⭐ {user.rating}</p>
        <p><strong>Feedback:</strong> {user.feedback}</p>

        {/* Show the Request Button only when viewing OTHER user's profile */}
        {!isLoggedIn && (
          <button
            className="request-btn"
            onClick={() => navigate(`/request/${user.id}`)}
          >
            Request Swap
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
