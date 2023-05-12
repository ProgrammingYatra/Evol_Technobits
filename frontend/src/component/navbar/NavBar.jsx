import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import LoginModal from "../login/LoginModal";
import UploadModal from "../upload/UploadModal";
import { toast } from 'react-toastify';

const NavBar = () => {
 
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logout Successfully !", {
      position: toast.POSITION.TOP_CENTER
    });
    // handle logout logic here
    console.log("Logged out");
    handleCloseLoginModal();
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Pic App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/recently-uploaded" className="nav-link">
              Recently-Uploaded
            </Link>
            <Link to="/top-rated" className="nav-link">
              Top-Rated
            </Link>

            <LoginModal
              show={showLoginModal}
              handleClose={handleCloseLoginModal}
              set={setIsLoggedIn}
            />
          </Nav>
          {isLoggedIn ? (
            <>
              <UploadModal />
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button onClick={handleShowLoginModal}>Login</Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
