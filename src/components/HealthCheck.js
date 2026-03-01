import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Spinner } from "react-bootstrap";
import { healthService } from "../services/api";

const HealthCheck = () => {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await healthService.getHealth();
      setHealthData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch health data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <Card className="mb-4">
      <Card.Header className="bg-primary text-white">
        <h5 className="mb-0">Application Health Check</h5>
      </Card.Header>
      <Card.Body>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p className="mt-2">Checking health...</p>
          </div>
        ) : error ? (
          <Alert variant="danger">
            <strong>Error:</strong> {error}
            <br />
            <Button variant="danger" onClick={checkHealth} className="mt-2">
              Retry
            </Button>
          </Alert>
        ) : healthData ? (
          <div>
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Application Name:</strong>{" "}
                  {healthData.applicationName}
                </p>
                <p>
                  <strong>Student Name:</strong> {healthData.studentName}
                </p>
                <p>
                  <strong>Student ID:</strong> {healthData.studentId}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Environment:</strong> {healthData.environment}
                </p>
                <p>
                  <strong>Memory Size:</strong> {healthData.lambdaMemorySize} MB
                </p>
                <p>
                  <strong>Timestamp:</strong>{" "}
                  {new Date(healthData.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="text-center mt-3">
              <Button variant="success" onClick={checkHealth}>
                Refresh Health Check
              </Button>
            </div>
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default HealthCheck;
