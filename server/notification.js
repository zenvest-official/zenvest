
const axios = require('axios');
const { GoogleAuth } = require('google-auth-library');
const path = require('path');

const serviceAccountKeyFile = path.join(__dirname, 'serviceAccountKey.json');

const projectId = 'zenvest-8f417';

const fcmUrl = `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`;

const userTokens = [
  'erFUXhJ_tvS4MMpWeFqPP6:APA91bHeDNO_E5WNieR0LHirk7nNuUp05CXT_yBeS6Oc-03VwZPunFlrsQi2DoDkMWGr1aHgasMVylzwo5dEFXIw2L8Yc2tSnbZ2-dt2RBwRG2O2P7_2-ugGiJKOvf6yd_SSRMX6a4JA',
  'cnx3XmDNRuXzopKM_usrBX:APA91bFm8sQZdpxu4o6wL2TgLsO9T8-NvVEtkfRZU2JA8Mx6_lwNPYrBW8bVaBDOT6XlUb2g5XJLVwYRHinq-0fwtCvNmfl1-7olCrAMlZGHzdL8WcCd93-PpSFuPB2QzRah7WGq0qCl',
  'e_YTa3dx1xtKM7ndBrvrcx:APA91bGTfTTLzITAK7k2xYtPZYukXvQSCZx-ddADRu6PJSGnejnoMMkTdsFPcE27LhDzLBzNozYmfP1jzXuOjTXvEh9CfMKA1ET2FxfddvAGJW4mRV8DnLKMQp2yqUpwsrB4wD-9Q0Ne',
];

async function getAccessToken() {
  try {
    const auth = new GoogleAuth({
      keyFile: serviceAccountKeyFile,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const client = await auth.getClient();
    const accessTokenResponse = await client.getAccessToken();
    return accessTokenResponse.token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

async function sendNotification(message) {
  try {
    const accessToken = await getAccessToken();

    for (const token of userTokens) {
      const notificationMessage = {
        ...message,
        token: token, // Set the token for each message
      };

      const response = await axios.post(fcmUrl, { message: notificationMessage }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      console.log(`Notification sent successfully to ${token}:`, response.data);
    }
  } catch (error) {
    if (error.response) {
      console.error('Error sending notification:', error.response.data);
    } else {
      console.error('Error sending notification:', error.message);
    }
  }
}

module.exports = {
  sendNotification,
};
