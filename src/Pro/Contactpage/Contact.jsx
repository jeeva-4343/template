import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert, ListGroup, Modal } from "react-bootstrap";

const Blog = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]); // Store fetched users
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jeeva-backend.onrender.com/api/users", formData);
      setMessage(res.data.message);
      setFormData({ name: "", email: "" });
    } catch (error) {
      setMessage("Error submitting form");
    }
  };

  const handleViewData = async () => {
    try {
      const res = await axios.get("https://jeeva-backend.onrender.com/api/users");
      setUsers(res.data); // Store fetched users in state
      setShowModal(true); // Show the modal
    } catch (error) {
      setMessage("Error fetching data");
      console.log("error fetch the users");
    }
  };

  const handleCloseModal = () => setShowModal(false); // Function to close the modal

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Simple Form</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Row className="mb-4">
        <Col xs={12} md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <Button variant="secondary" onClick={handleViewData} className="w-100 mb-4">
            View Data
          </Button>
        </Col>
      </Row>

      {/* Modal for displaying users */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Stored Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {users.length > 0 ? (
              users.map((user) => (
                <ListGroup.Item key={user._id}>
                  <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No users found.</ListGroup.Item>
            )}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Blog;