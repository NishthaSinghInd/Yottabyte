import React, { useState } from 'react';
import './SkillSwap.css';

const SkillSwap = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    yourSkill: '',
    theirSkill: '',
    message: '',
  });

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Swap request submitted!');
    setFormData({ yourSkill: '', theirSkill: '', message: '' });
    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-photo" />
        <h2>Marc Demo</h2>

        <p><strong>Skills Offered:</strong></p>
        <div className="skills">
          {['Python', 'Excel', 'Photoshop'].map((skill, i) => (
            <div key={i} className="skill-badge">{skill}</div>
          ))}
        </div>

        <p><strong>Skills Wanted:</strong></p>
        <div className="skills">
          {['Video Editing', 'Public Speaking'].map((skill, i) => (
            <div key={i} className="skill-badge">{skill}</div>
          ))}
        </div>

        <p><strong>Rating:</strong> ⭐⭐⭐⭐☆ (4.2)</p>
        <p><strong>Feedback:</strong> Great communication and skill sharing!</p>

        <button className="request-btn" onClick={toggleForm}>
          {showForm ? 'Close Request Form' : 'Request Swap'}
        </button>
      </div>

      {showForm && (
        <div className="request-section">
          <h3>Send Skill Swap Request</h3>
          <form onSubmit={handleSubmit}>
            <label>Your Skill:</label>
            <select name="yourSkill" value={formData.yourSkill} onChange={handleChange} required>
              <option value="">--Select Skill--</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="UI Design">UI Design</option>
            </select>

            <label>Their Skill:</label>
            <select name="theirSkill" value={formData.theirSkill} onChange={handleChange} required>
              <option value="">--Select Skill--</option>
              <option value="Public Speaking">Public Speaking</option>
              <option value="Video Editing">Video Editing</option>
            </select>

            <label>Message:</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hey Marc, I’d love to exchange skills..."
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SkillSwap;
