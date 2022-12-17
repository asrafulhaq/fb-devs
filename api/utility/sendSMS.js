import axios from "axios";

// register confirmation OTP
export const sendOTP = async (cell, sms) => {
  try {
    await axios.get(
      `https://bulksmsbd.net/api/smsapi?api_key=${process.env.SMS_API_KEY}&type=${process.env.SMS_TYPE}&number=${cell}&senderid=${process.env.SMS_SENDER_ID}&message=${sms}`
    );
  } catch (error) {
    console.log(error);
  }
};
