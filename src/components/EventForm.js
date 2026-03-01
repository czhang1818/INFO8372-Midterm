import React, { useState } from "react";
import { Card, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { eventService } from "../services/api";

const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventType: "",
    message: "",
    timestamp: new Date().toISOString(),
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setResult(null);

    try {
      const response = await eventService.sendEvent(eventData);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send event");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card className="mb-4">
      <Card.Header className="bg-info text-white">
        <h5 className="mb-0">Send Event</h5>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Event Type</Form.Label>
                <Form.Control
                  type="text"
                  name="eventType"
                  value={eventData.eventType}
                  onChange={handleChange}
                  placeholder="e.g., user_action, system_event"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Timestamp</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="timestamp"
                  value={eventData.timestamp.slice(0, 16)}
                  onChange={(e) =>
                    setEventData((prev) => ({
                      ...prev,
                      timestamp: e.target.value + ":00.000Z",
                    }))
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={eventData.message}
              onChange={handleChange}
              placeholder="Enter event message..."
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Event"}
            </Button>
          </div>
        </Form>

        {result && (
          <Alert variant="success" className="mt-3">
            <h6>Event Sent Successfully!</h6>
            <p>
              <strong>Message:</strong> {result.message}
            </p>
            <p>
              <strong>Event ID:</strong> {result.eventId}
            </p>
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(result.timestamp).toLocaleString()}
            </p>
          </Alert>
        )}

        {error && (
          <Alert variant="danger" className="mt-3">
            <strong>Error:</strong> {error}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default EventForm;
