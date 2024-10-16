
// Example device ID and access token
const deviceId = "bfda0de9486ca26979ijfl";
const accessToken = "a821675939ba0717cd575538596f2964";

// The API endpoint to get the temperature data (example)
const url = `https://openapi.tuyaeu.com/devices/${deviceId}/temperature`;

// Function to fetch temperature
async function getDeviceTemperature() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,  // Bearer token authentication
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Device Temperature:', data.temperature);
    } catch (error) {
        console.error('Failed to fetch temperature:', error);
    }
}

// Call the function
getDeviceTemperature();
