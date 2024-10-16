import axios from 'axios';
import CryptoJS from 'crypto-js';


 

// Define the environment variables
const URL = 'https://openapi.tuyaeu.com';
const clientId = 'rjctffpsft54jqt9wve8';
const secret = '5cae463c582c4249828d6284d3deb6af';
const timestamp = new Date().getTime();
const grantType = '1';

// Function to calculate the signature
function calcSign(clientId, timestamp, signStr, secret) {
    const str = clientId + timestamp + signStr;
    const hash = CryptoJS.HmacSHA256(str, secret);
    const signUp = hash.toString(CryptoJS.enc.Hex).toUpperCase(); // Make sure it's in HEX and uppercase
    return signUp;
}

// Function to create the string to sign
function stringToSign(query, method, secret) {
    let urlStr = `/v1.0/token?grant_type=${grantType}`;
    const sha256 = CryptoJS.SHA256('');
    const signUrl = method + '\n' + sha256 + '\n' + '\n' + urlStr;
    return signUrl;
}

// Generate the signature
const signStr = stringToSign(`grant_type=${grantType}`, 'GET', secret);
const sign = calcSign(clientId, timestamp, signStr, secret);

// Make the request to get the access token
axios({
    method: 'GET',
    url: `${URL}/v1.0/token`,
    params: {
        grant_type: grantType,
    },
    headers: {
        'client_id': clientId,
        'sign': sign,
        't': timestamp,
        'sign_method': 'HMAC-SHA256',
    },
}).then(response => {
    if (response.data.success) {
        console.log('Access Token:', response.data.result.access_token);
    } else {
        console.error('Failed to retrieve access token:', response.data.msg);
    }
}).catch(error => {
    console.error('Error:', error);
});



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

 
 