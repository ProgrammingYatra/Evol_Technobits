import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function RecentlyUploaded() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/images');
        const {data} = response.data;
        // Sort the images in descending order of the upload time
        data.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {images.map((image) => (
          <Col key={image._id}>
            <Card>
              <Card.Img variant="top" src={image.img} />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>Likes: {image.likes}</Card.Text>
                <Card.Text>Uploaded: {image.uploadedAt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecentlyUploaded;
