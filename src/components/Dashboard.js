import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HealthCheck from "./HealthCheck";
import EventForm from "./EventForm";
import HeartbeatMonitor from "./HeartbeatMonitor";

const Dashboard = () => {
  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-primary">
            Application Health & Event Service
          </h1>
          <p className="text-center text-muted">
            AWS Serverless Backend Dashboard
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <HealthCheck />
          <EventForm />
        </Col>
        <Col lg={4}>
          <HeartbeatMonitor />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <div className="alert alert-info">
            <h6>API Endpoints:</h6>
            <ul className="mb-0">
              <li>
                <strong>GET</strong> /health - Get application health
                information
              </li>
              <li>
                <strong>POST</strong> /event - Send event data to Lambda
                function
              </li>
            </ul>
            <hr />
            <h6>EventBridge Schedule:</h6>
            <p className="mb-0">
              Heartbeat function runs every 5 minutes automatically
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
