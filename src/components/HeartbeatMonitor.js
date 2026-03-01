import React, { useState, useEffect } from "react";
import { Card, ListGroup, Badge, Spinner, Button } from "react-bootstrap";

const HeartbeatMonitor = () => {
  const [heartbeats, setHeartbeats] = useState([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMonitoring) {
        const newHeartbeat = {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          status: "active",
          duration: Math.floor(Math.random() * 50) + 10, // Simulate duration
        };

        setHeartbeats((prev) => [newHeartbeat, ...prev.slice(0, 9)]); // Keep last 10
      }
    }, 5000); // Update every 5 seconds to simulate the 5-minute EventBridge schedule

    return () => clearInterval(interval);
  }, [isMonitoring]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    setHeartbeats([]);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  return (
    <Card>
      <Card.Header className="bg-warning text-dark">
        <h5 className="mb-0">
          EventBridge Heartbeat Monitor
          <div className="float-end">
            {isMonitoring ? (
              <Badge bg="success">Monitoring Active</Badge>
            ) : (
              <Badge bg="secondary">Monitoring Stopped</Badge>
            )}
          </div>
        </h5>
      </Card.Header>
      <Card.Body>
        <div className="text-center mb-3">
          {isMonitoring ? (
            <Button variant="danger" onClick={stopMonitoring}>
              Stop Monitoring
            </Button>
          ) : (
            <Button variant="success" onClick={startMonitoring}>
              Start Monitoring
            </Button>
          )}
        </div>

        {isMonitoring && (
          <div className="text-center text-muted mb-3">
            <Spinner animation="border" size="sm" className="me-2" />
            Monitoring EventBridge scheduled executions (simulated)
          </div>
        )}

        <ListGroup variant="flush">
          {heartbeats.length === 0 ? (
            <ListGroup.Item className="text-center text-muted">
              No heartbeat data yet. Start monitoring to see scheduled
              executions.
            </ListGroup.Item>
          ) : (
            heartbeats.map((heartbeat) => (
              <ListGroup.Item
                key={heartbeat.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>Heartbeat</strong>
                  <br />
                  <small className="text-muted">
                    {new Date(heartbeat.timestamp).toLocaleString()}
                  </small>
                </div>
                <div className="text-end">
                  <Badge bg="success">Active</Badge>
                  <br />
                  <small className="text-muted">{heartbeat.duration}ms</small>
                </div>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>

        <div className="mt-3 text-center text-muted">
          <small>
            Note: This is a simulation. In production, EventBridge triggers the
            heartbeat function every 5 minutes automatically.
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HeartbeatMonitor;
