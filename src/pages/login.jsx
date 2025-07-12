import React from 'react';
import { Container, Form, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
return (
<>
<Navbar bg="dark" variant="dark" className="justify-content-between px-4">
<Navbar.Brand>Skill Swap Platform</Navbar.Brand>
<Nav>
<Nav.Link as={Link} to="/">Home</Nav.Link>
</Nav>
</Navbar>
  <Container className="mt-5" style={{ maxWidth: '400px' }}>
    <h4 className="text-center mb-4">User Login Page</h4>
    <Form>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">Login</Button>
      </div>

      <div className="mt-3 text-center">
        <Link to="/signup">New User? Sign Up</Link>
      </div>
    </Form>
  </Container>
</>
);
}

export default Login;