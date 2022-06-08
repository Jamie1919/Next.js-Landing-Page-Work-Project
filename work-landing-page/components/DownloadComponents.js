
import { Col, Container, Row } from "reactstrap";

function DownloadComponent() {
  return (
    <div className="download-container-bg">
      <Container className="download-component">
        <h3>The Platform</h3>
        <h3>Where to find us</h3>
        <p>
         Our App is available on the Google and App store
        </p>
        <Container className="img-download">
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            className="img-fluid"
          />
          <img
            src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1"
            className="img-fluid"
          />
        </Container>
      </Container>
    </div>
  );
}

export default DownloadComponent;