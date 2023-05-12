import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("/images")
      .then((response) => {
        setImages(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
};

export default Home;
