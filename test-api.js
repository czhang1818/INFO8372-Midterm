// Simple test script to verify API connectivity
// Run this in browser console or as a standalone script

const API_BASE_URL =
  "https://a6tx28o4m8.execute-api.ca-central-1.amazonaws.com/midterm";

async function testHealthEndpoint() {
  try {
    console.log("Testing Health Endpoint...");
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("✅ Health endpoint working:", data);
      return true;
    } else {
      console.log(
        "❌ Health endpoint failed:",
        response.status,
        response.statusText,
      );
      return false;
    }
  } catch (error) {
    console.log("❌ Health endpoint error:", error);
    return false;
  }
}

async function testEventEndpoint() {
  try {
    console.log("Testing Event Endpoint...");
    const eventData = {
      eventType: "test",
      message: "Test message from frontend",
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(`${API_BASE_URL}/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("✅ Event endpoint working:", data);
      return true;
    } else {
      console.log(
        "❌ Event endpoint failed:",
        response.status,
        response.statusText,
      );
      return false;
    }
  } catch (error) {
    console.log("❌ Event endpoint error:", error);
    return false;
  }
}

// Run tests
async function runTests() {
  console.log("🧪 Running API Tests...\n");

  const healthResult = await testHealthEndpoint();
  console.log("");
  const eventResult = await testEventEndpoint();

  console.log("\n📊 Test Results:");
  console.log(`Health Endpoint: ${healthResult ? "✅ PASS" : "❌ FAIL"}`);
  console.log(`Event Endpoint: ${eventResult ? "✅ PASS" : "❌ FAIL"}`);

  if (healthResult && eventResult) {
    console.log("\n🎉 All tests passed! Your API is ready for the frontend.");
  } else {
    console.log(
      "\n⚠️  Some tests failed. Check the API Gateway CORS configuration.",
    );
  }
}

// Uncomment to run tests
// runTests();
