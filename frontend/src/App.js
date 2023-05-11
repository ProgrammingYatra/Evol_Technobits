import React, { useState } from "react";

import { Button } from "react-bootstrap";
import LoginModal from "./component/login/LoginModal";
import UploadModal from "./component/upload/UploadModal";

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  const handleLogout = () => {
    // handle logout logic here
    console.log("Logged out");
    handleCloseLoginModal();
  };

  return (
    <div className="">
      <Button onClick={handleShowLoginModal}>Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
      <UploadModal />
    </div>
  );
};

export default App;
