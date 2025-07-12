import React, { useState } from 'react';
import '../SkillSwap.css';

const RequestForm = ({ targetUser, fromUser }) => {
  const [formData, setFormData] = useState({
    yourSkill: '',
    theirSkill: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request sent from ${fromUser.name} to ${targetUser.name}`);
  };

  return (
    <div className="container form-page">
      <div className="request-section">
        <h3>Swap Request to {targetUser.name}</h3>
        <form onSubmit={handleSubmit}>
          <label>Your Skill:</label>
          <select name="yourSkill" value={formData.yourSkill} onChange={handleChange} required>
            <option value="">--Select--</option>
            {fromUser.offeredSkills.map((skill, i) => (
              <option key={i} value={skill}>{skill}</option>
            ))}
          </select>

          <label>Their Skill:</label>
          <select name="theirSkill" value={formData.theirSkill} onChange={handleChange} required>
            <option value="">--Select--</option>
            {targetUser.offeredSkills.map((skill, i) => (
              <option key={i} value={skill}>{skill}</option>
            ))}
          </select>

          <label>Message:</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hey, I'd love to swap skills..."
            required
          ></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
