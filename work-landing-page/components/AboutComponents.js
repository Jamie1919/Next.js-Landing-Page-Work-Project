
import { Col, Container, Row } from "reactstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="LandingPage/AboutComponent.png" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Best Updates</h2>
              <b>Wanna get daily updates and keep up with your favourite Creators</b>
              <br />
              <br />
              <p>
                We give you the best updates for each creator and what games they're playing.Wanna know whats the best games right now and get the quickest updates check our app for more.
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;