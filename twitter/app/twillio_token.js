const twilio = require('twilio');

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

function TokenGenerator(identity) {
  const appName = 'TwilioChat';

  // Create a "grant" which enables a client to use Chat as a given user
  const chatGrant = new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
  });
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  token.addGrant(chatGrant);
  token.identity = identity;

  return token;
}