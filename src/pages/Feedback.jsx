import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Image,
  Form,
} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function Feedback() {
  const [name, setName] = useState('');
  const [skillsOffered, setSkillsOffered] = useState('');
  const [skillsWanted, setSkillsWanted] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [newFeedback, setNewFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    if (newFeedback.trim()) {
      alert('Feedback submitted!');
      setNewFeedback('');
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-between px-4">
        <Navbar.Brand>Skill Swap Platform</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Swap request</Nav.Link>
          <Nav.Link href="#">Home</Nav.Link>
          <Image
            src={
              name
                ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&rounded=true&size=40`
                : 'https://ui-avatars.com/api/?name=User&background=888&color=fff&rounded=true&size=40'
            }
            roundedCircle
            width="40"
            height="40"
            className="ms-3"
          />
        </Nav>
      </Navbar>

      <Container className="mt-4" style={{ maxWidth: '900px' }}>
        <Row>
          <Col md={9}>
            <Button variant="info" className="mb-3">
              Request
            </Button>

            {/* Name Input */}
            <Form.Group controlId="nameInput" className="mb-3">
              <Form.Label><h4>Name</h4></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            {/* Skills Offered Input */}
            <Form.Group controlId="skillsOffered" className="mb-3">
              <Form.Label><h5>Skills Offered</h5></Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Graphic Design, Video Editing"
                value={skillsOffered}
                onChange={(e) => setSkillsOffered(e.target.value)}
              />
            </Form.Group>

            {/* Skills Wanted Input */}
            <Form.Group controlId="skillsWanted" className="mb-4">
              <Form.Label><h5>Skills Wanted</h5></Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Python, Excel"
                value={skillsWanted}
                onChange={(e) => setSkillsWanted(e.target.value)}
              />
            </Form.Group>

            {/* Rating & Feedback */}
            <div className="mt-4">
              <h5>Rate & Leave Feedback</h5>
              <div className="mb-3">
                {[...Array(5)].map((_, index) => {
                  const currentRating = index + 1;
                  return (
                    <FaStar
                      key={index}
                      size={28}
                      style={{ cursor: 'pointer', marginRight: 5 }}
                      color={
                        currentRating <= (hover || rating)
                          ? '#ffc107'
                          : '#e4e5e9'
                      }
                      onClick={() => setRating(currentRating)}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    />
                  );
                })}
              </div>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Write your feedback..."
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
              />
              <Button
                variant="success"
                className="mt-2"
                onClick={handleFeedbackSubmit}
              >
                Submit Feedback
              </Button>
            </div>
          </Col>

          {/* Profile Photo */}
          <Col md={3} className="text-center">
            <div
              style={{
                border: '2px solid #ccc',
                borderRadius: '50%',
                padding: '10px',
              }}
            >
              <Image
                src={
                  name
                    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&rounded=true&size=100`
                    : 'https://ui-avatars.com/api/?name=User&background=aaa&color=000&rounded=true&size=100'
                }
                roundedCircle
                width="120"
                height="120"
              />
              <p className="mt-2">Profile Photo</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Feedback;
