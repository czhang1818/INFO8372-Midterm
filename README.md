### Why Serverless Architecture Was Chosen

Serverless architecture was chosen for this application because:

1. **Cost Efficiency**: Pay only for actual usage, no idle resources
2. **Automatic Scaling**: Handles traffic spikes without manual intervention
3. **Reduced Operational Overhead**: No servers to manage or maintain
4. **Fast Deployment**: Quick iteration and deployment cycles
5. **High Availability**: Built-in redundancy across AWS regions

### How IAM Secures Lambda Execution

The IAM configuration follows the least privilege principle:

**Lambda Execution Role** (`lambda-execution-role`):
- Only allows CloudWatch logging permissions
- No access to other AWS services
- Minimal attack surface

**User Policy** (`cloud-mid-user`):
- Specific permissions for required AWS services
- No wildcard (`*`) permissions
- Separated concerns between deployment and execution

### How Automatic Scaling Works

AWS Lambda automatically scales based on:
- **Concurrent Requests**: Each request gets a separate container
- **Burst Capacity**: Instant scaling for sudden traffic spikes
- **Memory Allocation**: Scales compute power with memory size
- **No Configuration Required**: Scaling happens transparently

### What Changes Would Be Required for Production

For production deployment, the following changes would be required:

1. **API Security**:
   - Add API keys and usage plans
   - Implement Cognito authentication
   - Add request validation and throttling

2. **Monitoring & Alerting**:
   - Set up CloudWatch alarms for error rates
   - Configure custom metrics
   - Add distributed tracing with X-Ray

3. **Environment Management**:
   - Separate dev/staging/prod environments
   - Environment-specific configurations
   - Blue/green deployment strategies

4. **Data Persistence**:
   - Add DynamoDB for event storage
   - Implement data retention policies
   - Add backup and recovery procedures

5. **Performance Optimization**:
   - Lambda function memory tuning
   - Cold start mitigation strategies
   - VPC configuration for database access

## Features

- **Health Check**: Displays application health information from Lambda function
- **Event Form**: Sends events to the Lambda function via API Gateway
- **Heartbeat Monitor**: Simulates EventBridge scheduled executions
- **Responsive Design**: Works on desktop and mobile devices