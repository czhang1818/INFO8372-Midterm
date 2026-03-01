# Cloud Mid Frontend

React.js frontend for the Application Health & Event Service.

## Features

- **Health Check**: Displays application health information from Lambda function
- **Event Form**: Sends events to the Lambda function via API Gateway
- **Heartbeat Monitor**: Simulates EventBridge scheduled executions
- **Responsive Design**: Works on desktop and mobile devices

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Update API URL:
   - Open `src/services/api.js`
   - Replace `your-api-id` with your actual API Gateway URL

3. Start development server:
   ```bash
   npm start
   ```

4. Open http://localhost:3000 in your browser

## API Integration

The frontend connects to your AWS Lambda functions through API Gateway:

- **Health Endpoint**: `GET /health`
- **Event Endpoint**: `POST /event`

## EventBridge Simulation

The heartbeat monitor simulates the EventBridge scheduled rule that triggers every 5 minutes. In production, this happens automatically through AWS EventBridge.

## Production Deployment

To deploy to AWS Amplify:

1. Install AWS Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Initialize Amplify project:
   ```bash
   amplify init
   ```

3. Add hosting:
   ```bash
   amplify add hosting
   ```

4. Deploy:
   ```bash
   amplify publish
   ```

## Screenshots

The application provides a clean, modern interface for interacting with your serverless backend.

## Project Structure

```
cloud-mid-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HealthCheck.js
│   │   ├── EventForm.js
│   │   ├── HeartbeatMonitor.js
│   │   └── Dashboard.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Dependencies

- React 18.2.0
- React Bootstrap 2.7.0
- Bootstrap 5.1.3
- Axios 1.6.0