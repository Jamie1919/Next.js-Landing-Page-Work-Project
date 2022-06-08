
import { Col, Container, Row } from "reactstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <img src="LandingPage/ServiceComponent1.png" className="img-fluid service-img" />
            <h2>Real Time Updates</h2>
            <p>
              Main text
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src="LandingPage/ServiceComponent2.png" className="img-fluid service-img" />
            <h2>Best Information</h2>
            <p>
              Main text 2
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="LandingPage/ServiceComponent3.png"
              className="img-fluid service-img"
            />
            <h2>Quality Content</h2>
            <p>
              Main text 3
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;