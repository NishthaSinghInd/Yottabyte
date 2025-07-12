import React, { useState } from 'react';
import {
Container,
Form,
Button,
Navbar,
Nav,
Badge,
Image,
Row,
Col,
} from 'react-bootstrap';

function UserProfile() {
const [name, setName] = useState('');const [location, setLocation] = useState('');
const [skillsOffered, setSkillsOffered] = useState([]);
const [skillsWanted, setSkillsWanted] = useState([]);
const [newOfferedSkill, setNewOfferedSkill] = useState('');
const [newWantedSkill, setNewWantedSkill] = useState('');
const [availability, setAvailability] = useState('');
const [isPublic, setIsPublic] = useState(true);
const [profilePhoto, setProfilePhoto] = useState(null);

const handleRemoveSkill = (type, skill) => {
if (type === 'offered') {
setSkillsOffered(skillsOffered.filter((s) => s !== skill));
} else {
setSkillsWanted(skillsWanted.filter((s) => s !== skill));
}
};

const handleProfilePhotoChange = (e) => {
const file = e.target.files[0];
if (file) {
setProfilePhoto(URL.createObjectURL(file));
}
};

const handleAddSkill = (type, value) => {
if (!value.trim()) return;
const skill = value.trim();
if (type === 'offered' && !skillsOffered.includes(skill)) {
setSkillsOffered([...skillsOffered, skill]);
}
if (type === 'wanted' && !skillsWanted.includes(skill)) {
setSkillsWanted([...skillsWanted, skill]);
}
};

return (
<>
<Navbar bg="dark" variant="dark" className="justify-content-between px-4">
<Nav>
<Button variant="success" className="me-2">
Save
</Button>
<Button variant="danger">Discard</Button>
</Nav>
<Nav>
<Nav.Link href="#">Swap Request</Nav.Link>
<Nav.Link href="#">Home</Nav.Link>
<Image
  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&rounded=true&size=40`}
  roundedCircle
  width="40"
  height="40"
  style={{ marginLeft: '15px' }}
/>
</Nav>
</Navbar>
<Container className="mt-4" style={{ maxWidth: '900px' }}>
    <Form>
      <Row>
        <Col md={8}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills Offered</Form.Label>
            <div className="mb-2">
              {skillsOffered.map((skill, index) => (
                <Badge key={index} pill bg="secondary" className="me-2">
                  {skill}{' '}
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRemoveSkill('offered', skill)}
                  >
                    ×
                  </span>
                </Badge>
              ))}
            </div>
            <Form.Control
              type="text"
              placeholder="Type and press Enter"
              value={newOfferedSkill}
              onChange={(e) => setNewOfferedSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddSkill('offered', newOfferedSkill);
                  setNewOfferedSkill('');
                }
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills Wanted</Form.Label>
            <div className="mb-2">
              {skillsWanted.map((skill, index) => (
                <Badge key={index} pill bg="info" className="me-2">
                  {skill}{' '}
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRemoveSkill('wanted', skill)}
                  >
                    ×
                  </span>
                </Badge>
              ))}
            </div>
            <Form.Control
              type="text"
              placeholder="Type and press Enter"
              value={newWantedSkill}
              onChange={(e) => setNewWantedSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddSkill('wanted', newWantedSkill);
                  setNewWantedSkill('');
                }
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              type="text"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profile</Form.Label>
            <Form.Select
              value={isPublic ? 'Public' : 'Private'}
              onChange={(e) => setIsPublic(e.target.value === 'Public')}
            >
              <option>Public</option>
              <option>Private</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4} className="text-center">
          <div
            style={{
              border: '2px dashed #ccc',
              padding: '20px',
              borderRadius: '50%',
            }}
          >
            {profilePhoto ? (
              <Image src={profilePhoto} roundedCircle width="100%" />
            ) : (
              <div style={{ fontSize: '14px', padding: '40px' }}>
                Profile Photo
              </div>
            )}
          </div>
          <div className="mt-2">
            <Form.Label className="btn btn-outline-primary btn-sm me-2">
              Add/Edit
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                hidden
              />
            </Form.Label>
            {profilePhoto && (
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => setProfilePhoto(null)}
              >
                Remove
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Form>
  </Container>
</>
);
}

export default UserProfile;