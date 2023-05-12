import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'

function UploadModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileUpload =async (e) => {
    const file = e.target.files[0];
    console.log(file)
    // Handle file upload logic here
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("File Uploaded Successfully",res.data.originalname)
    } catch (err) {
      console.error(err);
    }
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
