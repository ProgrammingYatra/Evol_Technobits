import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

const LoginModal = ({ show, handleClose, set }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login logic here
    try {
      const response = await axios.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      console.log(`Email: ${email}, Password: ${password}`);
      // redirect to home page or dashboard
      navigate("/");
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      console.error(error);
      // display error message to user
    }

    handleClose();
    set(true);
  };

  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    
    </>
  );
};

export default LoginModal;
