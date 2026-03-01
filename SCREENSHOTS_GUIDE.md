# Screenshots Guide for Cloud Mid Assignment

This guide provides instructions for capturing all required screenshots of your AWS serverless solution.

## Required Screenshots

### 1. AWS Console Screenshots

#### IAM Configuration
- **IAM Users**: Show the `cloud-mid-user` user in IAM console
- **IAM Policies**: Show the custom policy attached to the user
- **IAM Roles**: Show the `lambda-execution-role` with its trust policy

**How to capture**:
1. Go to https://console.aws.amazon.com/iam/
2. Navigate to Users → cloud-mid-user → Permissions
3. Navigate to Roles → lambda-execution-role → Trust relationships

#### Lambda Functions
- **Health API Function**: Show function configuration, code, and environment variables
- **Heartbeat Function**: Show function configuration and code
- **Function Monitoring**: Show CloudWatch metrics and logs

**How to capture**:
1. Go to https://console.aws.amazon.com/lambda/
2. Select each function and capture:
   - Configuration tab (memory, timeout, environment variables)
   - Code tab (your .NET code)
   - Monitoring tab (metrics)
   - Click on "View logs in CloudWatch" for log screenshots

#### API Gateway
- **API Overview**: Show the "Health API" in API Gateway console
- **Resources**: Show /health and /event resources
- **Methods**: Show GET /health and POST /event method configurations
- **Deployment**: Show the deployed stage (prod)

**How to capture**:
1. Go to https://console.aws.amazon.com/apigateway/
2. Select your API and capture:
   - API overview page
   - Resources tree showing /health and /event
   - Method configurations
   - Stages page showing deployment

#### EventBridge
- **Scheduled Rule**: Show the `heartbeat-scheduled-rule`
- **Rule Details**: Show schedule expression (rate(5 minutes))
- **Targets**: Show the heartbeat function as target

**How to capture**:
1. Go to https://console.aws.amazon.com/events/
2. Navigate to Rules → heartbeat-scheduled-rule
3. Capture rule details and targets

#### CloudWatch Logs
- **Health API Logs**: Show structured JSON logs from health-api-function
- **Heartbeat Logs**: Show heartbeat and duration logs from heartbeat-function
- **Log Groups**: Show /aws/lambda/health-api-function and /aws/lambda/heartbeat-function

**How to capture**:
1. Go to https://console.aws.amazon.com/cloudwatch/
2. Navigate to Logs → Log groups
3. Select each log group and show recent log events

### 2. Frontend Application Screenshots

#### React Application Screenshots
- **Health Check Component**: Show the health information display
- **Event Form**: Show the event submission form
- **Heartbeat Monitor**: Show the monitoring interface
- **Full Dashboard**: Show the complete application layout

**How to capture**:
1. Start your React application: `npm start`
2. Open http://localhost:3000
3. Capture screenshots of:
   - Main dashboard with all components
   - Health check component with data
   - Event form filled out
   - Heartbeat monitor in action

#### Browser Developer Tools
- **Network Tab**: Show successful API calls to your Lambda functions
- **Console**: Show any console logs or errors

**How to capture**:
1. Open browser developer tools (F12)
2. Go to Network tab
3. Make API calls and capture successful requests
4. Go to Console tab and capture any relevant logs

### 3. Testing Screenshots

#### Manual API Testing
- **Health Endpoint Test**: Show curl command and response
- **Event Endpoint Test**: Show curl command with POST data and response
- **Error Handling**: Show invalid request and error response

**How to capture**:
1. Use curl commands:
   ```bash
   curl -X GET "https://your-api-id.execute-api.region.amazonaws.com/prod/health"
   curl -X POST "https://your-api-id.execute-api.region.amazonaws.com/prod/event" \
     -H "Content-Type: application/json" \
     -d '{"eventType": "test", "message": "test message"}'
   ```
2. Capture terminal output

#### EventBridge Testing
- **Manual Trigger**: Show running the EventBridge rule on demand
- **CloudWatch Logs**: Show heartbeat function execution logs

**How to capture**:
1. In EventBridge console, select your rule
2. Click "Manage schedule" → "Run on demand"
3. Check CloudWatch logs for execution

### 4. Architecture Documentation

#### Architecture Diagram
- **System Architecture**: Show your ASCII architecture diagram
- **Data Flow**: Show how components interact

**How to capture**:
1. Open your architecture-diagram.txt file
2. Capture the diagram
3. Optionally create a visual diagram using tools like Lucidchart or draw.io

### 5. Code Repository Screenshots

#### Project Structure
- **Backend Structure**: Show Lambda function files and structure
- **Frontend Structure**: Show React project structure
- **Configuration Files**: Show deployment scripts and configuration

**How to capture**:
1. Use file explorer or terminal to show directory structure
2. Capture screenshots of key files:
   - Lambda function code
   - React components
   - API service files
   - Deployment scripts

## Screenshot Quality Guidelines

1. **Clear and Readable**: Ensure all text is legible
2. **Relevant Content**: Focus on the specific component being demonstrated
3. **Consistent Format**: Use similar screenshot sizes and formats
4. **Annotated**: Add labels or arrows if needed to highlight important areas
5. **File Naming**: Use descriptive names like:
   - `iam-user-policy.png`
   - `lambda-health-function.png`
   - `api-gateway-resources.png`
   - `frontend-dashboard.png`

## Example Screenshot Organization

```
screenshots/
├── aws-console/
│   ├── iam/
│   │   ├── user-cloud-mid-user.png
│   │   ├── policy-cloud-mid-policy.png
│   │   └── role-lambda-execution-role.png
│   ├── lambda/
│   │   ├── health-api-function-config.png
│   │   ├── health-api-function-code.png
│   │   ├── heartbeat-function-config.png
│   │   └── cloudwatch-logs.png
│   ├── api-gateway/
│   │   ├── api-overview.png
│   │   ├── resources-tree.png
│   │   ├── health-method.png
│   │   ├── event-method.png
│   │   └── deployment-stage.png
│   └── eventbridge/
│       ├── scheduled-rule.png
│       ├── rule-details.png
│       └── targets.png
├── frontend/
│   ├── dashboard-full.png
│   ├── health-check-component.png
│   ├── event-form.png
│   ├── heartbeat-monitor.png
│   └── browser-network.png
└── testing/
    ├── api-test-health.png
    ├── api-test-event.png
    ├── eventbridge-test.png
    └── architecture-diagram.png
```

## Final Checklist

- [ ] IAM configuration screenshots
- [ ] Lambda function screenshots (config, code, logs)
- [ ] API Gateway screenshots (resources, methods, deployment)
- [ ] EventBridge screenshots (rule, targets)
- [ ] CloudWatch logs screenshots
- [ ] React application screenshots (all components)
- [ ] Browser developer tools screenshots
- [ ] Manual API testing screenshots
- [ ] Architecture diagram
- [ ] Project structure screenshots

Capture these screenshots and include them in your final submission to demonstrate the complete implementation of your Application Health & Event Service.