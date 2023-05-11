import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UploadModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileUpload = (event) => {
    // const file = event.target.files[0];
    // Handle file upload logic here
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload File
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Select a File:</Form.Label>
            <Form.Control type="file" onChange={handleFileUpload} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UploadModal;
