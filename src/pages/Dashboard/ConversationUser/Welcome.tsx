import React from "react";
import { Button, Col, Row } from "reactstrap";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="chat-welcome-section">
        <Row className="w-100 justify-content-center">
          <Col xxl={5} md={7}>
            <div className="p-4 text-center">
              <div className="avatar-xl mx-auto mb-4">
                <div className="avatar-title bg-transparent rounded-circle">
                  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 62" width="71" height="62"><defs><image  width="71" height="62" id="img1" href="data:image/png;base64,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"/></defs><style></style><use  href="#img1" x="0" y="0"/></svg>
                  
                </div>
              </div>
              <h4>Introducing D8 Chat App</h4>
              <p className="text-muted mb-4">
               A modern chat application that combines the power of video calling and messaging, revolutionizing your communication experience. With D8 Chat, stay connected with friends, family, and colleagues through high-quality video calls, bringing you closer no matter the distance.
              </p>
              <Button type="button" className="btn btn-primary w-lg">
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
